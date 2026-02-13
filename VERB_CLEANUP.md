# Tamil Verb Dataset Cleanup

## Research-Based Verb Classification

### Verb Types Identified:
1. **Dative-Stative**: pudikka, theriya, puriya (describe psychological states)
2. **Modal-Auxiliary**: venum/vendam (express necessity/desire)
3. **Regular**: irukka (to be - normal conjugation with person)

### Key Findings:
- Dative-stative verbs use **-um ending** (future tense marker) to express **habitual/ongoing states**
- "Instant" forms = **present-momentary** (happening right now)
- "Continuous/Cont" forms = **present-habitual** (general state)

---

## CLEANED VERB DATA

### 1. IRUKKA (To Be) - Regular Verb with Person Conjugations

#### Past Tense - Irundh-
```javascript
{id:50, en:"I was", enClean:"I was", ta:"Irundhan", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"I"}},

{id:53, en:"You were", enClean:"You were", ta:"Irundheenga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"you"}},

{id:56, en:"He was", enClean:"He was", ta:"Irundharu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"he"}},

{id:59, en:"She/They were", enClean:"She/They were", ta:"Irundhanga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"they"}},

{id:62, en:"We were (Inc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-inc"}},

{id:65, en:"We were (Exc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-exc"}},

{id:68, en:"It was", enClean:"It was", ta:"Irundhuchu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"non-human"}},
```

#### Present Tense - Iruk-
```javascript
{id:51, en:"I am", enClean:"I am", ta:"Irukan", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"I"}},

{id:54, en:"You are", enClean:"You are", ta:"Irukeenga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"you"}},

{id:57, en:"He is", enClean:"He is", ta:"Irukaru", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"he"}},

{id:60, en:"She/They are", enClean:"She/They are", ta:"Irukanga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"they"}},

{id:63, en:"We are (Inc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-inc"}},

{id:66, en:"We are (Exc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-exc"}},

{id:69, en:"It is", enClean:"It is", ta:"Iruku", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"non-human"}},
```

#### Future Tense - Irup-
```javascript
{id:52, en:"I will be", enClean:"I will be", ta:"Irupan", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"I"}},

{id:55, en:"You will be", enClean:"You will be", ta:"Irupeenga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"you"}},

{id:58, en:"He will be", enClean:"He will be", ta:"Iruparu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"he"}},

{id:61, en:"She/They will be", enClean:"She/They will be", ta:"Irupanga", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"they"}},

{id:64, en:"We will be (Inc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-inc"}},

{id:67, en:"We will be (Exc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-exc"}},

{id:70, en:"It will be", enClean:"It will be", ta:"Irukum", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"non-human"}},
```

#### Question Forms - Past
```javascript
{id:79, en:"Was I?", enClean:"Was I?", ta:"Irundhana?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"I"}},

{id:80, en:"Were you?", enClean:"Were you?", ta:"Irundheengala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"you"}},

{id:81, en:"Was he?", enClean:"Was he?", ta:"Irundhara?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"he"}},

{id:82, en:"Were she/they?", enClean:"Were she/they?", ta:"Irundhangala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"they"}},

{id:83, en:"Were we?", enClean:"Were we?", ta:"Irundhoma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"we"}},

{id:84, en:"Was it?", enClean:"Was it?", ta:"Irundhucha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"non-human"}},
```

#### Question Forms - Present
```javascript
{id:85, en:"Am I?", enClean:"Am I?", ta:"Irukana?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"I"}},

{id:86, en:"Are you?", enClean:"Are you?", ta:"Irukeengala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"you"}},

{id:87, en:"Is he?", enClean:"Is he?", ta:"Irukara?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"he"}},

{id:88, en:"Are she/they?", enClean:"Are she/they?", ta:"Irukangala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"they"}},

{id:89, en:"Are we?", enClean:"Are we?", ta:"Irukoma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"we"}},

{id:90, en:"Is it?", enClean:"Is it?", ta:"Iruka?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"non-human"}},
```

#### Question Forms - Future
```javascript
{id:91, en:"Will I be?", enClean:"Will I be?", ta:"Irupana?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"I"}},

{id:92, en:"Will you be?", enClean:"Will you be?", ta:"Irupeengala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"you"}},

{id:93, en:"Will he be?", enClean:"Will he be?", ta:"Irupara?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"he"}},

{id:94, en:"Will she/they be?", enClean:"Will she/they be?", ta:"Irupangala?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"they"}},

{id:95, en:"Will we be?", enClean:"Will we be?", ta:"Irupoma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"we"}},

{id:96, en:"Will it be?", enClean:"Will it be?", ta:"Irukuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"non-human"}},
```

---

### 2. VENUM/VENDAM (Want/Need) - Modal Auxiliary + Dative-Stative

```javascript
{id:174, en:"Want/Need", enClean:"Want", ta:"Venum", pron:"Ve-nu-im", cat:"Verb", type:"conjugation",
 grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:175, en:"Don't want/need", enClean:"Don't want", ta:"Vendam", pron:"Ve-in-da-im", cat:"Verb", type:"conjugation",
 grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"statement", person:null}},

{id:176, en:"Do you want?", enClean:"Do you want?", ta:"Venuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},

{id:177, en:"Don't you want?", enClean:"Don't you want?", ta:"Vendama?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}},
```

---

### 3. PUDIKKA (Like) - Dative-Stative Verb

#### Past Tense
```javascript
{id:216, en:"Liked", enClean:"Liked", ta:"Pudichithu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:217, en:"Did you like?", enClean:"Did you like?", ta:"Pudichitha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}},

{id:194, en:"Didn't like", enClean:"Didn't like", ta:"Pudikala", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}},

{id:197, en:"Didn't you like?", enClean:"Didn't you like?", ta:"Pudikalaiya?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}},
```

#### Present - Momentary (happening right now)
```javascript
{id:218, en:"Liking (now)", enClean:"Liking", ta:"Pudichiruku", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:219, en:"Are you liking (now)?", enClean:"Are you liking?", ta:"Pudichiruka?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}},
```

#### Present - Habitual (general preference)
```javascript
{id:220, en:"Like (general)", enClean:"Like", ta:"Pudikum", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:221, en:"Do you like?", enClean:"Do you like?", ta:"Pudikuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},

{id:172, en:"Do you like?", enClean:"Do you like?", ta:"Pudikuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},
 NOTE: "Duplicate of 221 - consider removing"},

{id:173, en:"Don't you like?", enClean:"Don't you like?", ta:"Pudikatha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}},
```

---

### 4. THERIYA (Know) - Dative-Stative Verb

#### Past Tense
```javascript
{id:228, en:"Knew/Found out", enClean:"Knew", ta:"Therinjuthu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:229, en:"Did you know?", enClean:"Did you know?", ta:"Therinjutha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}},

{id:195, en:"Didn't know", enClean:"Didn't know", ta:"Therila", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}},

{id:198, en:"Didn't you know?", enClean:"Didn't you know?", ta:"Therilaiya?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}},
```

#### Present - Momentary (realizing now)
```javascript
{id:230, en:"Know (realizing now)", enClean:"Know", ta:"Theriyuthu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:231, en:"Do you know (now)?", enClean:"Do you know?", ta:"Theriyutha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}},
```

#### Present - Habitual (general knowledge)
```javascript
{id:232, en:"Know (general)", enClean:"Know", ta:"Theriyum", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:233, en:"Do you know?", enClean:"Do you know?", ta:"Theriyuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},

{id:184, en:"Do you know?", enClean:"Do you know?", ta:"Theriyuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},
 NOTE: "Duplicate of 233 - consider removing"},

{id:185, en:"Don't you know?", enClean:"Don't you know?", ta:"Theriyatha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}},
```

---

### 5. PURIYA (Understand) - Dative-Stative Verb

#### Past Tense
```javascript
{id:222, en:"Understood", enClean:"Understood", ta:"Purinjuthu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:223, en:"Did you understand?", enClean:"Did you understand?", ta:"Purinjutha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}},

{id:196, en:"Didn't understand", enClean:"Didn't understand", ta:"Purila", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}},

{id:199, en:"Didn't you understand?", enClean:"Didn't you understand?", ta:"Purilaiya?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}},
```

#### Present - Momentary (understanding now)
```javascript
{id:224, en:"Understand (now)", enClean:"Understand", ta:"Puriyuthu", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:225, en:"Do you understand (now)?", enClean:"Do you understand?", ta:"Puriyutha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}},
```

#### Present - Habitual (general understanding)
```javascript
{id:226, en:"Understand (general)", enClean:"Understand", ta:"Puriyum", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}},

{id:227, en:"Do you understand?", enClean:"Do you understand?", ta:"Puriyuma?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}},

{id:181, en:"Don't you understand?", enClean:"Don't you understand?", ta:"Puriyatha?", pron:"", cat:"Verb", type:"conjugation",
 grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}},
```

---

## ISSUES FOUND:

1. **Duplicates:**
   - id:172 and id:221 both are "Pudikuma?"
   - id:184 and id:233 both are "Theriyuma?"

2. **Missing forms:**
   - No negative statements for present-habitual (e.g., "Don't like", "Don't know", "Don't understand")
   - Only have negative questions

3. **Inconsistent categorization:**
   - Some entries use "Verb - Present Cont."
   - Others use "Verb - Like", "Verb - Know", "Verb - Understand"
   - Should standardize to just "Verb" with grammar metadata

---

## RECOMMENDATIONS:

1. **Remove duplicates** (172, 184)
2. **Add missing negative statements:**
   - "Pudikatha" (Don't like - statement)
   - "Theriyatha" (Don't know - statement)
   - "Puriyatha" (Don't understand - statement)
3. **Standardize category to "Verb"** for all conjugations
4. **Use subcategories in grammar.verbType** instead

Should I generate the final cleaned JavaScript array?
