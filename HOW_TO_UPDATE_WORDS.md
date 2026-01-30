# How to Update Tamil Master Vocabulary

## 📝 Easy Way to Update Words

You have **2 files** to manage your vocabulary:

### 1. `tamil_words.js` - Your Vocabulary Database
This file contains all the words. To update:

1. **Open `tamil_words.js`** in any text editor
2. **Add, edit, or remove words** in the `data` array
3. **Save the file**
4. **Upload to GitHub** (replacing the old version)
5. **Refresh your browser** - Done! ✅

### 2. `index.html` - The App (Don't need to touch this often!)
This contains the app logic. You only update this if you want to change how the app works, not the words.

---

## 📋 Word Format

Each word follows this pattern:
```javascript
{id:1, en:"English", ta:"Tamil", pron:"Pronunciation", cat:"Category"}
```

### Examples:

**With pronunciation:**
```javascript
{id:101, en:"Beautiful", ta:"Azhagu", pron:"Aa-zha-gu", cat:"Adjective"}
```

**Without pronunciation:**
```javascript
{id:102, en:"Very beautiful", ta:"Romba Azhagu", pron:"", cat:"Adjective"}
```

---

## ✏️ How to Add New Words

### Step 1: Open `tamil_words.js`

### Step 2: Find the last word in the array
Look for the highest `id` number (currently 100)

### Step 3: Add your new word
```javascript
    {id:100, en:"Name/People", ta:"Peru", pron:"", cat:"Noun"},
    {id:101, en:"Beautiful", ta:"Azhagu", pron:"Aa-zha-gu", cat:"Adjective"}  // ← NEW!
];
```

**Important:**
- Comma after the previous word
- NO comma after the last word
- Close with `];`

### Step 4: Save and upload to GitHub

---

## 🔄 How to Add Opposite Pairs (for Matching Game)

Find the `oppositePairs` section in `tamil_words.js`:

```javascript
const oppositePairs = [
    [1, 4],   // Morning - Night
    [60, 61], // Up - Down
    // ... existing pairs ...
    [101, 102]  // ← Add your new pair (using word IDs)
];
```

---

## 📤 Updating on GitHub

### Method 1: Via GitHub Website
1. Go to your repository
2. Click `tamil_words.js`
3. Click the pencil icon (✏️) to edit
4. Make your changes
5. Scroll down, click "Commit changes"
6. Wait 1 minute
7. Refresh your app!

### Method 2: Upload New File
1. Download your edited `tamil_words.js`
2. Go to your repository
3. Click on old `tamil_words.js` → Delete it (trash icon)
4. Click "Add file" → "Upload files"
5. Upload your new `tamil_words.js`
6. Commit changes

---

## 🎯 Quick Reference: Categories

Current categories in use:
- `Time`
- `Time/Food`
- `Family`
- `Noun`
- `Question`
- `Pronoun`
- `Direction`
- `Adjective`
- `Adverb/Place`
- `Adverb/Time`
- `Taste`
- `Location`
- `Word`

---

## ⚠️ Common Mistakes to Avoid

❌ **Missing comma between words**
```javascript
{id:100, en:"Name", ta:"Peru", pron:"", cat:"Noun"}
{id:101, en:"Beautiful", ta:"Azhagu", pron:"", cat:"Adjective"}  // ERROR!
```

✅ **Correct:**
```javascript
{id:100, en:"Name", ta:"Peru", pron:"", cat:"Noun"},  // ← comma here
{id:101, en:"Beautiful", ta:"Azhagu", pron:"", cat:"Adjective"}
```

❌ **Comma after last word**
```javascript
{id:101, en:"Beautiful", ta:"Azhagu", pron:"", cat:"Adjective"},  // ERROR!
];
```

✅ **Correct:**
```javascript
{id:101, en:"Beautiful", ta:"Azhagu", pron:"", cat:"Adjective"}  // no comma
];
```

---

## 🚀 You're Done!

Now you can update your vocabulary anytime by just editing one simple file!
