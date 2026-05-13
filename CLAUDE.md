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

**Current highest ID: 445** (update this comment when adding words)

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

### Updating from new class notes (ALWAYS do both files)

Class notes arrive in **any format** — a raw vocab list, a block of example sentences, a grammar explanation, a mixed dump, or just a few lines. Parse the content first, then route each piece.

**Step 1 — Parse: identify what's in the paste**
- Tamil = English pairs (any separator: `=`, `-`, `:`, `→`, tab) → **vocab**
- Numbered/bulleted Tamil words with English → **vocab**
- Tamil sentences with English translations → **example sentences**
- Prose explaining a rule, pattern, or structure → **grammar rule**
- A conjugation grid or tense table → **conjugation table**
- A postposition / particle with suffix shown → **postposition**

**Step 2 — Route each piece to the right place:**
| Content type | `tamil_words.js` | `notes.html` |
|---|---|---|
| New vocab words | ✅ Add to `data` array | ✅ Add to matching vocab section |
| New verbs | ✅ Add to `data` array | ✅ Add row to verb table in `#vocab-verbs` |
| Grammar rules / tables | ✗ | ✅ Add/update matching grammar section |
| Conjugation tables | ✗ | ✅ Add table to `#grammar-conjugations` |
| Example sentences | ✗ | ✅ Add to matching examples section |
| Postpositions | ✗ | ✅ Add row to `#postpositions-table` |

**Step 3 — If a section doesn't exist yet in notes.html**, create it using the `<!-- SECTION: id -->` + `<section id="...">` pattern. Add its ID to the section ID list below.

**Finish every session with:** `git add tamil_words.js notes.html && git commit && git push` — keeps the live site at `https://jolv-iz.github.io/tamil-master/notes.html` in sync.

---

### Step-by-step: adding vocab to `tamil_words.js`

User typically pastes notes in these formats — all treated the same:
```
Word = Translation
Word - Translation
Word: Translation
Word (context) = Translation
```

1. Check current highest ID: **Current highest ID: 445**
2. Grep for duplicates first: `grep -i "TAMIL_WORD" tamil_words.js`
3. Append new entries to `data` array, incrementing IDs
4. Update **Current highest ID** above
5. Syntax check: `node -e "const fs=require('fs');eval(fs.readFileSync('tamil_words.js','utf8').replace('const ','global.'));console.log(data.length,'words, last id:',data[data.length-1].id)"`

**Category quick-reference:**
| Category | Use for |
|----------|---------|
| `Verb` + `type:"base"` | Action words (base/dictionary form) |
| `Noun` | People, things, places |
| `Adjective` | Describing words (big, half, different) |
| `Adverb` | General manner adverbs |
| `Adverb/Time` | Frequency/time adverbs (always, sometimes, daily) |
| `Adverb/Place` | Location adverbs (here, there) |
| `Question Word` | Questions (where, what, can you?, is it?) |
| `Pronoun` | Personal pronouns + all/everyone |
| `Connector` | Linking words (if, till, but) |
| `Abstract` | States/concepts (need, okay, fear) |
| `Postposition` | Particles that attach to nouns (in/at, from, with) |
| `Greeting` | Hi/bye/thanks phrases |
| `Location` | Specific place words |
| `Time` | Time-of-day / calendar words |
| `Family` | Immediate family |
| `Family-Extended` | Extended family |

**Edge cases:**
- Same Tamil word for two English meanings → one entry: `en:"All / Everything"`
- Two Tamil forms for one meaning → slash in `ta`: `"Thaa / Kudu"`
- Must-form/obligation form → put in `pron`: `"Paarkanum"`
- Particles/suffixes (la, na, ku) → `Postposition` or `Conjunction`
- Verbal phrases → `Abstract` if noun-like, `Verb`+`type:"base"` if action-like

---

### Step-by-step: adding content to `notes.html`

`notes.html` is the live structured reference at `https://jolv-iz.github.io/tamil-master/notes.html`. Always update it alongside `tamil_words.js`.

**Finding sections fast:** `grep -n 'id="SECTION_ID"' notes.html`

**Section IDs:**
- Grammar: `grammar-sentence-structure` · `grammar-to-be` · `grammar-pronouns` · `grammar-have` · `grammar-special-verbs` · `grammar-verb-categories` · `grammar-conjugations` · `grammar-compound` · `grammar-extended-forms` · `grammar-demonstratives`
- Postpositions: `postpositions-table`
- Vocab: `vocab-greetings` · `vocab-questions` · `vocab-pronouns` · `vocab-family` · `vocab-time` · `vocab-numbers` · `vocab-colors` · `vocab-days` · `vocab-connectors` · `vocab-modal` · `vocab-verbs` · `vocab-adjectives` · `vocab-nouns`
- Examples: `examples-location` · `examples-possession` · `examples-special-verbs` · `examples-modal` · `examples-verb-sentences` · `examples-postpositions` · `examples-long`

**Snippets:**
- Add vocab item: `<dt>Tamil</dt><dd>English</dd>` inside `<dl>` of the right section
- Add verb row: `<tr><td>#</td><td>English</td><td>Tamil</td><td>Must-form</td></tr>` in `#vocab-verbs` table
- Add grammar rule: `<div class="rule">Rule text<br><span class="eg">Example</span></div>`
- Add conjugation table: copy an existing `<table>` block in `#grammar-conjugations` and update
- Add example: `<dt>Tamil sentence.</dt><dd>English translation.</dd>` in right examples section
- Add new section: use `<!-- SECTION: id -->` comment + `<section id="...">` pattern

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
