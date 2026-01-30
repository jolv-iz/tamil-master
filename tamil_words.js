// Tamil Master Vocabulary Database
// Last updated: 2026-01-31

const data = [
    {id:1, en:"Morning", ta:"Kaalai", pron:"Kaa-lai", cat:"Time"},
    {id:2, en:"Afternoon", ta:"Madhiyam", pron:"Ma-dhe-ya-im", cat:"Time"},
    {id:3, en:"Evening", ta:"Maalai", pron:"Maa-lai Saaingalam", cat:"Time"},
    {id:4, en:"Night", ta:"Rathiri", pron:"Raath-ree", cat:"Time"},
    {id:5, en:"Good Morning", ta:"Kaalai Vanakkam", pron:"", cat:"Time"},
    {id:6, en:"Good Afternoon", ta:"Madhiyam Vanakkam", pron:"", cat:"Time"},
    {id:7, en:"Good Evening", ta:"Maalai Vanakkam", pron:"", cat:"Time"},
    {id:8, en:"Good night", ta:"Rathiri Vanakkam", pron:"", cat:"Time"},
    {id:9, en:"Breakfast", ta:"Kaalai Saapadu", pron:"food", cat:"Time/Food"},
    {id:10, en:"Lunch", ta:"Madhiyam Sapadu", pron:"", cat:"Time/Food"},
    {id:11, en:"Dinner", ta:"Rathiri Sapadu", pron:"", cat:"Time/Food"},
    {id:12, en:"Father", ta:"Appa", pron:"Aa-ip-paa", cat:"Family"},
    {id:13, en:"Mother", ta:"Amma", pron:"Aa-im-maa", cat:"Family"},
    {id:14, en:"Grandfather", ta:"Thatha", pron:"Thaa-ith-tha", cat:"Family"},
    {id:15, en:"Grandmother", ta:"Paati", pron:"Paa-it-tea", cat:"Family"},
    {id:16, en:"Older brother", ta:"Anna", pron:"Aa-in-naa", cat:"Family"},
    {id:17, en:"Older sister", ta:"Akka", pron:"Aa-ik-kaa", cat:"Family"},
    {id:18, en:"Younger brother", ta:"Thumbi", pron:"Thumb--bee", cat:"Family"},
    {id:19, en:"Younger sister", ta:"Thangachi", pron:"Thaa-nga-ga-chee", cat:"Family"},
    {id:20, en:"Uncle", ta:"Mama", pron:"Maa-im-ma", cat:"Family"},
    {id:21, en:"Aunty", ta:"Maami / Athai", pron:"Maa-mee / aa-ith-ai", cat:"Family"},
    {id:22, en:"Husband", ta:"Kanavan", pron:"Ka-na-va-in / Purushan", cat:"Family"},
    {id:23, en:"Wife", ta:"Manaivi", pron:"Maa-nai-vee / Pondatii", cat:"Family"},
    {id:24, en:"Father's older brother - Big Dad", ta:"Periyaappa", pron:"", cat:"Family"},
    {id:25, en:"Father's older brother's wife - Big Mom", ta:"PeriyaAmma", pron:"", cat:"Family"},
    {id:26, en:"Father's younger brother - Small Dad", ta:"Chithappa (ChinnaAppa)", pron:"", cat:"Family"},
    {id:27, en:"Father's younger brother's wife - Small Mom", ta:"ChinnaAmma (Chithi)", pron:"", cat:"Family"},
    {id:28, en:"Father's younger sister - Small Aunty", ta:"Chinnaathai", pron:"", cat:"Family"},
    {id:29, en:"Father's younger sister's husband - Small Uncle", ta:"ChinnaMama", pron:"", cat:"Family"},
    {id:30, en:"Father's older sister - Big Aunty", ta:"Periyaathai", pron:"", cat:"Family"},
    {id:31, en:"Father's older sister's husband - Big Uncle", ta:"PeriyaMama", pron:"", cat:"Family"},
    {id:32, en:"Mother's older brother - Big Uncle", ta:"PeriyaMama", pron:"", cat:"Family"},
    {id:33, en:"Mother's older brother's wife - Big Aunty", ta:"PeriyaAthai", pron:"", cat:"Family"},
    {id:34, en:"Mother's younger brother - Small Uncle", ta:"ChinnaMama", pron:"", cat:"Family"},
    {id:35, en:"Mother's younger brother's wife - Small Aunty", ta:"ChinnaAthai", pron:"", cat:"Family"},
    {id:36, en:"Mother's younger sister - Small Mom", ta:"ChinnaAmma (Chithi)", pron:"", cat:"Family"},
    {id:37, en:"Mother's younger sister's husband - Small Dad", ta:"ChinnaAppa (Chithappa)", pron:"", cat:"Family"},
    {id:38, en:"Mother's older sister - Big Mom", ta:"PeriyaAmma", pron:"", cat:"Family"},
    {id:39, en:"Mother's older sister's husband - Big Dad", ta:"PeriyaAppa", pron:"", cat:"Family"},
    {id:40, en:"Boy/Son", ta:"Paiyan", pron:"Paa-ai-ya-in", cat:"Noun"},
    {id:41, en:"Girl/Daughter", ta:"Ponnu", pron:"Poo-in-nu", cat:"Noun"},
    {id:42, en:"What", ta:"Yenna", pron:"Ye-in-na", cat:"Question"},
    {id:43, en:"When", ta:"Yeppo", pron:"Yup-po", cat:"Question"},
    {id:44, en:"Where", ta:"Yenga", pron:"Ye-ing-ga", cat:"Question"},
    {id:45, en:"Who", ta:"Yaaru", pron:"Yaa-roo", cat:"Question"},
    {id:46, en:"Why", ta:"Yaen", pron:"Yae-in", cat:"Question"},
    {id:47, en:"How", ta:"Eppadi", pron:"Yup-pa-di", cat:"Question"},
    {id:48, en:"How many", ta:"Yethana", pron:"Ye-ith-tha-na", cat:"Question"},
    {id:49, en:"How much", ta:"Yevlo", pron:"Ye-iv-lo", cat:"Question"},
    {id:50, en:"From where", ta:"Yenga Irundhu", pron:"Ye-ing-ga Ee-ru-indh-uu", cat:"Question"},
    {id:51, en:"For what", ta:"Yethuku/Yethukaga", pron:"Ye-thu-ku / Ye-thu-ka-ga", cat:"Question"},
    {id:52, en:"Which", ta:"Yethu", pron:"Ye-thu", cat:"Question"},
    {id:53, en:"Whose", ta:"Yaarodathu", pron:"Yaa-ro-da-thu", cat:"Question"},
    {id:54, en:"I", ta:"Naan", pron:"Naa-in", cat:"Pronoun"},
    {id:55, en:"You", ta:"Neenga", pron:"Nee-ing-ga", cat:"Pronoun"},
    {id:56, en:"He", ta:"Avaru", pron:"Aa-va-ru", cat:"Pronoun"},
    {id:57, en:"She/They", ta:"Avanga", pron:"Aa-vang-ga", cat:"Pronoun"},
    {id:58, en:"We (Inc. Listener)", ta:"Namma", pron:"Na-im-ma", cat:"Pronoun"},
    {id:59, en:"We (Exc. Listener)", ta:"Naanga", pron:"Naa-ing-ga", cat:"Pronoun"},
    {id:60, en:"Up/Above/On/Upstairs", ta:"Maela", pron:"MAY-le", cat:"Direction"},
    {id:61, en:"Below/Under/Down/Downstairs", ta:"Keela", pron:"KEY-le", cat:"Direction"},
    {id:62, en:"Front/Before/Infront", ta:"Munnadi", pron:"MU-naddi", cat:"Direction"},
    {id:63, en:"Back/After/Behind", ta:"Pinnadi", pron:"PI-naddi", cat:"Direction"},
    {id:64, en:"Small", ta:"Chinnathu/Chinna", pron:"CHIN-ath-e / Che-in-na", cat:"Adjective"},
    {id:65, en:"Big", ta:"Perusu/Periya", pron:"Pae-ree-ya / Pe-ru-su", cat:"Adjective"},
    {id:66, en:"Little/Less", ta:"Konjam / Kammi", pron:"Koo-in-jam / Kaa-im-me", cat:"Adjective"},
    {id:67, en:"More/Very/A lot", ta:"Neraiya/Romba", pron:"NE-ray-uh / RUUM-ba", cat:"Adjective"},
    {id:68, en:"Many", ta:"Adhigam", pron:"UH-di-gum", cat:"Adjective"},
    {id:69, en:"This", ta:"Idhu / Indha", pron:"", cat:"Adjective"},
    {id:70, en:"That", ta:"Adhu / Andha", pron:"", cat:"Adjective"},
    {id:71, en:"Here", ta:"Inga", pron:"", cat:"Adverb/Place"},
    {id:72, en:"There", ta:"Anga", pron:"", cat:"Adverb/Place"},
    {id:73, en:"Now", ta:"Ippo", pron:"", cat:"Adverb/Time"},
    {id:74, en:"Then/while/during", ta:"Appo", pron:"", cat:"Adverb/Time"},
    {id:75, en:"Truth", ta:"Unmai", pron:"", cat:"Noun"},
    {id:76, en:"Lie", ta:"Poi", pron:"", cat:"Noun"},
    {id:77, en:"Correct/Right/Okay", ta:"Sari", pron:"Cherry", cat:"Adjective"},
    {id:78, en:"Wrong/mistake", ta:"Thappu", pron:"", cat:"Noun"},
    {id:79, en:"Bitter", ta:"Kasapu", pron:"", cat:"Taste"},
    {id:80, en:"Sweet", ta:"Inipu", pron:"", cat:"Taste"},
    {id:81, en:"Sour", ta:"Pulipu", pron:"", cat:"Taste"},
    {id:82, en:"Salt", ta:"Uppu", pron:"", cat:"Taste"},
    {id:83, en:"Tart", ta:"Thuvarpu", pron:"", cat:"Taste"},
    {id:84, en:"Spicy", ta:"Kaaram", pron:"", cat:"Taste"},
    {id:85, en:"Inside", ta:"Ulla", pron:"", cat:"Location"},
    {id:86, en:"Outside", ta:"Veliya", pron:"", cat:"Location"},
    {id:87, en:"Old", ta:"Palaya/Palasu", pron:"", cat:"Adjective"},
    {id:88, en:"New", ta:"Pudhu/Pudhusu", pron:"", cat:"Adjective"},
    {id:89, en:"Yesterday", ta:"Nethu", pron:"", cat:"Time"},
    {id:90, en:"Today", ta:"Inaiku", pron:"", cat:"Time"},
    {id:91, en:"Tomorrow", ta:"Naalaiku", pron:"", cat:"Time"},
    {id:92, en:"House", ta:"Veedu", pron:"", cat:"Noun"},
    {id:93, en:"In the House", ta:"Veetla", pron:"", cat:"Noun"},
    {id:94, en:"To the House", ta:"Veetuku", pron:"", cat:"Noun"},
    {id:95, en:"Yes", ta:"Aama", pron:"", cat:"Word"},
    {id:96, en:"No/Not/Not there/Neither/Either/Or", ta:"illa", pron:"", cat:"Word"},
    {id:97, en:"But", ta:"Aana", pron:"", cat:"Word"},
    {id:98, en:"Because", ta:"Yaena", pron:"", cat:"Word"},
    {id:99, en:"And/After", ta:"Apram", pron:"", cat:"Word"},
    {id:100, en:"Name/People", ta:"Peru", pron:"", cat:"Noun"}
];

// Opposite pairs for matching game
// Auto-detected and confirmed - 15 pairs total
const oppositePairs = [
    [1, 4],   // Morning - Night
    [60, 61], // Up/Above/On/Upstairs - Below/Under/Down/Downstairs
    [62, 63], // Front/Before/Infront - Back/After/Behind
    [64, 65], // Small - Big
    [66, 67], // Little/Less - More/Very/A lot
    [69, 70], // This - That
    [71, 72], // Here - There
    [73, 74], // Now - Then/while/during
    [75, 76], // Truth - Lie
    [77, 78], // Correct/Right/Okay - Wrong/mistake
    [79, 80], // Bitter - Sweet
    [85, 86], // Inside - Outside
    [87, 88], // Old - New
    [89, 91], // Yesterday - Tomorrow
    [95, 96]  // Yes - No/Not/Not there/Neither/Either/Or
];

// Sentence templates for fill-in-the-blank exercises
// Use {word} as placeholder for the word to fill in
const sentenceTemplates = [
    // Time sentences
    {
        tamil: "{word} sapten",
        english: "I ate in the {word}",
        categories: ["Time"]
    },
    {
        tamil: "{word} vanakkam",
        english: "Good {word}",
        categories: ["Time"]
    },
    {
        tamil: "Naan {word} velai seiren",
        english: "I work in the {word}",
        categories: ["Time"]
    },
    // Family sentences
    {
        tamil: "En {word} veetla irukanga",
        english: "My {word} is at home",
        categories: ["Family"]
    },
    {
        tamil: "Naan en {word}-oda pesuren",
        english: "I am talking with my {word}",
        categories: ["Family"]
    },
    // Question words
    {
        tamil: "{word} pesura?",
        english: "{word} is speaking?",
        categories: ["Question"]
    },
    {
        tamil: "{word} poganum?",
        english: "{word} should I go?",
        categories: ["Question"]
    },
    {
        tamil: "{word} vandha?",
        english: "{word} did you come?",
        categories: ["Question"]
    },
    // Pronouns
    {
        tamil: "{word} saapten",
        english: "{word} ate",
        categories: ["Pronoun"]
    },
    {
        tamil: "{word} inga irukkom",
        english: "{word} are here",
        categories: ["Pronoun"]
    },
    // Direction
    {
        tamil: "{word} podu",
        english: "Put it {word}",
        categories: ["Direction"]
    },
    {
        tamil: "{word} paaru",
        english: "Look {word}",
        categories: ["Direction"]
    },
    // Adjectives
    {
        tamil: "Idhu romba {word}",
        english: "This is very {word}",
        categories: ["Adjective"]
    },
    {
        tamil: "{word} veedu",
        english: "{word} house",
        categories: ["Adjective"]
    },
    {
        tamil: "{word} saapadu",
        english: "{word} food",
        categories: ["Adjective"]
    },
    // Location/Place
    {
        tamil: "Naan {word} irukken",
        english: "I am {word}",
        categories: ["Location", "Adverb/Place"]
    },
    {
        tamil: "{word} vai",
        english: "Keep it {word}",
        categories: ["Location"]
    },
    // Taste
    {
        tamil: "Idhu {word}",
        english: "This is {word}",
        categories: ["Taste"]
    },
    // Common words
    {
        tamil: "{word}, naan pogiren",
        english: "{word}, I am going",
        categories: ["Word"]
    },
    {
        tamil: "{word}, idhu sari",
        english: "{word}, this is correct",
        categories: ["Word"]
    },
    // Nouns
    {
        tamil: "En {word} periya",
        english: "My {word} is big",
        categories: ["Noun"]
    },
    {
        tamil: "{word} poganum",
        english: "Should go to the {word}",
        categories: ["Noun"]
    },
    // General templates that work with most words
    {
        tamil: "Idhu {word}",
        english: "This is {word}",
        categories: ["Time", "Family", "Noun", "Adjective", "Taste"]
    },
    {
        tamil: "Adhu {word} illa",
        english: "That is not {word}",
        categories: ["Adjective", "Noun"]
    }
];
