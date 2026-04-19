# Tamil Master — Project Guide for Claude

## What This App Is
A single-page Tamil language learning game for children. No backend, no build step, no dependencies. Open `index.html` in a browser and it works.

---

## File Map

| File | Role | Edit frequency |
|------|------|---------------|
| `tamil_words.js` | All vocabulary data | Often — adding words |
| `index.html` | Entire app (HTML + CSS + JS) | Occasionally — new features/modes |
| `verbs_cleaned.js` | Conjugated verb data (not yet wired into app) | Rarely |

**Never needed for normal edits:** `.git/`, `.claude/`

---

## `tamil_words.js` — Data Structure

### `data` array — vocabulary words
```js
{id:305, en:"Lift", ta:"Thooku", pron:"", cat:"Verb", type:"base"}
```
- `id`: unique integer, never reuse, always increment from highest existing
- `en`: English label shown in game
- `ta`: Tamil transliteration (what's shown/tested)
- `pron`: pronunciation hint or "must-form" (e.g. `"Pudi-ka-num"`) — leave `""` if none
- `cat`: category string used for filtering (see categories below)
- `type`: `"base"` for simple vocab; `"conjugation"` for full verb forms (has extra `grammar` field)

**Current highest ID: 403** (update this comment when adding words)

### Word categories in use
`Time`, `Time/Food`, `Family`, `Family-Extended`, `Question Word`, `Pronoun`, `Direction`, `Adjective`, `Adverb`, `Adverb/Place`, `Adverb/Time`, `Taste`, `Location`, `Noun`, `Abstract`, `Postposition`, `Connector`, `Greeting`, `Color`, `Day`, `Verb`

### `oppositePairs` array
Pairs of word IDs for the Match (Opposites) game mode:
```js
[111, 112]  // Up - Down
```
Only add a pair if both words exist in `data`.

### `sentencePairs` array
Children's book sentences for Fill Blank mode:
```js
{
  id: 1,
  english: "Where are you going?",
  tamil: "Neenga yenga poreenga?",
  blanks: ["yenga", "poreenga"],
  blankEnglish: {"yenga": "where", "poreenga": "going"},
  hint: "where / going",
  highlight: [],
  difficulty: "easy"  // "easy" | "medium" | "hard"
}
```

---

## `index.html` — App Architecture

### Game modes (set via `setMode(mode)`)
| Mode string | Nav label | What it does |
|-------------|-----------|--------------|
| `'flash'` | Learn | Flashcard flip (EN↔TA), memory rating |
| `'quiz'` | Quiz | 4-option multiple choice |
| `'match'` | Opposites | Tap-to-match opposite pairs |
| `'fill'` | Fill Blank | Sentence completion |
| `'list'` | Vocab List | Full searchable word list, inline edit |

### localStorage keys
| Key | Contents |
|-----|---------|
| `tamilMasterMemory` | `{wordId: {level:0-2, lastReview, reviewCount}}` |
| `tamilMasterStats` | Quiz score stats |
| `tamilSentenceStats` | Per-sentence wrong/reveal/correct counts |
| `tamilTeacherSentences` | Sentences imported by teacher |
| `tamilMasterCustomWords` | User-added custom words |
| `tamilGoogleApiKey` | Google Drive API key for doc import |

### Memory levels (wordMemory)
- `0` = don't know
- `1` = unsure
- `2` = know

Fill Blank auto-blanks vocab words at level ≤ 1.

### Fill Blank sentence weighting
Higher weight = appears more often:
```
weight = (revealCount × 2 + wrongCount × 0.5) / (correctCount + 1)
```

### Teacher sentence import formats (text paste or Google Doc)
1. **Pairs**: English line, Tamil line, blank line between
2. **Pipe**: `English | Tamil` or `English | Tamil | blank1,blank2`
3. **Labeled**: `EN: ...` / `TA: ...` / `BLANK: word1,word2`

---

## Dos

- **Always check the highest existing ID** before adding new words — grep for the last `{id:` in `tamil_words.js`
- **Use `type:"base"`** for all simple/dictionary-form verbs
- **Put must-forms in `pron`** (e.g. `"Paarkanum"`) when the teacher provides them — they display as hints
- **Use `/` to separate alternate Tamil forms** in the `ta` field (e.g. `"Thaa / Kudu"`)
- **Test by opening `index.html` in browser** — no build needed, just reload
- **Keep `verbs_cleaned.js`** — it has conjugation data (all persons/tenses) useful if a conjugation mode is ever added

## Don'ts

- **Don't add a comma after the last entry** in any of the three arrays — JS will error
- **Don't reuse IDs** — each word needs a unique id across the entire `data` array
- **Don't touch `verbs_cleaned.js`** unless specifically asked — it's not loaded by the app yet
- **Don't create new files** for word additions — everything goes into `tamil_words.js`
- **Don't add a backend, package.json, or build tooling** — this is intentionally a zero-dependency static file
- **Don't modify `sentencePairs`** unless asked — those are curated children's book sentences
- **Don't add Tamil script** (e.g. செய்) — the app uses transliteration only (e.g. "Sei")

---

## Common Tasks & How to Do Them

### Add new vocabulary words
1. Find current highest ID in `tamil_words.js`
2. Append entries to the appropriate section in the `data` array
3. Use `type:"base"` and the correct `cat` string

### Add a new game mode
- Add a nav button in the `<nav>` section of `index.html` (around line 611)
- Add a case in `setMode()` (around line 1132)
- Add the mode's HTML panel and JS functions

### Add a sentence to Fill Blank
- Append to `sentencePairs` in `tamil_words.js`
- ID must be unique within that array (separate from `data` IDs)

### Wire in `verbs_cleaned.js`
- Add `<script src="verbs_cleaned.js"></script>` before the `tamil_words.js` script tag in `index.html`
- The exported variable is `verbsData` (array of conjugation objects)
