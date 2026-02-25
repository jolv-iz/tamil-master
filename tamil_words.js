// Tamil Master Vocabulary Database
// Last updated: 2026-02-14
// Total words: 246 (removed 2 duplicate verb entries)
// Verb data cleaned and enhanced with grammar metadata:
//   - 70 verb conjugations with full grammar structure
//   - 3 verb types: regular, dative-stative, modal-auxiliary-dative-stative
//   - Grammar fields: verbType, tense, aspect, polarity, form, person
//   - Research-based categorization (see VERB_CLEANUP.md)

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
    {id:24, en:"Father's older brother - Big Dad", ta:"Periyaappa", pron:"PeriyaAmma", cat:"Family-Extended"},
    {id:25, en:"Father's younger brother - Small Dad", ta:"Chithappa (ChinnaAppa)", pron:"Chithappa / ChinnaAppa", cat:"Family-Extended"},
    {id:26, en:"Father's younger sister - Small Aunty", ta:"Chinnaathai", pron:"ChinnaMama", cat:"Family-Extended"},
    {id:27, en:"Father's older sister - Big Aunty", ta:"Periyaathai", pron:"PeriyaMama", cat:"Family-Extended"},
    {id:28, en:"Mother's older brother - Big Uncle", ta:"PeriyaMama", pron:"PeriyaAthai", cat:"Family-Extended"},
    {id:29, en:"Mother's younger brother - Small Uncle", ta:"ChinnaMama", pron:"ChinnaAthai", cat:"Family-Extended"},
    {id:30, en:"Mother's younger sister - Small Mom", ta:"ChinnaAmma (Chithi)", pron:"ChinnaAmma / Chithi", cat:"Family-Extended"},
    {id:31, en:"Mother's older sister - Big Mom", ta:"PeriyaAmma", pron:"PeriyaAppa", cat:"Family-Extended"},
    {id:32, en:"What", ta:"Yenna", pron:"Ye-in-na", cat:"Question Word"},
    {id:33, en:"When", ta:"Yeppo", pron:"Yup-po", cat:"Question Word"},
    {id:34, en:"Where", ta:"Yenga", pron:"Ye-ing-ga", cat:"Question Word"},
    {id:35, en:"Who", ta:"Yaaru", pron:"Yaa-roo", cat:"Question Word"},
    {id:36, en:"Why", ta:"Yaen", pron:"Yae-in", cat:"Question Word"},
    {id:37, en:"How", ta:"Eppadi", pron:"Yup-pa-di", cat:"Question Word"},
    {id:38, en:"How many", ta:"Yethana", pron:"Ye-ith-tha-na", cat:"Question Word"},
    {id:39, en:"How much", ta:"Yevlo", pron:"Ye-iv-lo", cat:"Question Word"},
    {id:40, en:"From where", ta:"Yenga Irundhu", pron:"Ye-ing-ga Ee-ru-indh-uu", cat:"Question Word"},
    {id:41, en:"For what", ta:"Yethuku/Yethukaga", pron:"Ye-thu-ku / Ye-thu-ka-ga", cat:"Question Word"},
    {id:42, en:"Which", ta:"Yethu", pron:"Ye-thu", cat:"Question Word"},
    {id:43, en:"Whose", ta:"Yaarodathu", pron:"Yaa-ro-da-thu", cat:"Question Word"},
    {id:44, en:"I", ta:"Naan", pron:"Naa-in", cat:"Pronoun"},
    {id:45, en:"You", ta:"Neenga", pron:"Nee-ing-ga", cat:"Pronoun"},
    {id:46, en:"He", ta:"Avaru", pron:"Aa-va-ru", cat:"Pronoun"},
    {id:47, en:"She/They", ta:"Avanga", pron:"Aa-vang-ga", cat:"Pronoun"},
    {id:48, en:"We - Including Listener", ta:"Namma", pron:"Na-im-ma", cat:"Pronoun"},
    {id:49, en:"We - Excluding Listener", ta:"Naanga", pron:"Naa-ing-ga", cat:"Pronoun"},
    {id:50, en:"I was", enClean:"I was", ta:"Irundhan", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"I"}, relatedWords:[51,52,79,85,91]},
    {id:51, en:"I am", enClean:"I am", ta:"Irukan", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"I"}, relatedWords:[50,52,79,85,91]},
    {id:52, en:"I will be", enClean:"I will be", ta:"Irupan", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"I"}, relatedWords:[50,51,79,85,91]},
    {id:53, en:"You were", enClean:"You were", ta:"Irundheenga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"you"}, relatedWords:[54,55,80,86,92]},
    {id:54, en:"You are", enClean:"You are", ta:"Irukeenga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"you"}, relatedWords:[53,55,80,86,92]},
    {id:55, en:"You will be", enClean:"You will be", ta:"Irupeenga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"you"}, relatedWords:[53,54,80,86,92]},
    {id:56, en:"He was", enClean:"He was", ta:"Irundharu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"he"}, relatedWords:[57,58,81,87,93]},
    {id:57, en:"He is", enClean:"He is", ta:"Irukaru", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"he"}, relatedWords:[56,58,81,87,93]},
    {id:58, en:"He will be", enClean:"He will be", ta:"Iruparu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"he"}, relatedWords:[56,57,81,87,93]},
    {id:59, en:"She/They were", enClean:"She/They were", ta:"Irundhanga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"they"}, relatedWords:[60,61,82,88,94]},
    {id:60, en:"She/They are", enClean:"She/They are", ta:"Irukanga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"they"}, relatedWords:[59,61,82,88,94]},
    {id:61, en:"She/They will be", enClean:"She/They will be", ta:"Irupanga", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"they"}, relatedWords:[59,60,82,88,94]},
    {id:62, en:"We were (Inc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-inc"}, relatedWords:[63,64,83,89,95]},
    {id:63, en:"We are (Inc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-inc"}, relatedWords:[62,64,83,89,95]},
    {id:64, en:"We will be (Inc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-inc"}, relatedWords:[62,63,83,89,95]},
    {id:65, en:"We were (Exc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-exc"}, relatedWords:[66,67]},
    {id:66, en:"We are (Exc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-exc"}, relatedWords:[65,67]},
    {id:67, en:"We will be (Exc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-exc"}, relatedWords:[65,66]},
    {id:68, en:"It was", enClean:"It was", ta:"Irundhuchu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"non-human"}, relatedWords:[69,70,84,90,96]},
    {id:69, en:"It is", enClean:"It is", ta:"Iruku", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"non-human"}, relatedWords:[68,70,84,90,96]},
    {id:70, en:"It will be", enClean:"It will be", ta:"Irukum", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"non-human"}, relatedWords:[68,69,84,90,96]},
    {id:71, en:"My", ta:"Ennoda / En", pron:"", cat:"Possessive"},
    {id:72, en:"Your", ta:"Ungaloda / Unga", pron:"", cat:"Possessive"},
    {id:73, en:"His", ta:"Avaroda", pron:"", cat:"Possessive"},
    {id:74, en:"Her/Their", ta:"Avangaloda", pron:"", cat:"Possessive"},
    {id:75, en:"Our", ta:"Nammaloda", pron:"", cat:"Possessive"},
    {id:76, en:"Us (Our - Exc.)", ta:"Engaloda", pron:"", cat:"Possessive"},
    {id:79, en:"Was I?", enClean:"Was I?", ta:"Irundhana?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"I"}, relatedWords:[50,51,52,85,91]},
    {id:80, en:"Were you?", enClean:"Were you?", ta:"Irundheengala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"you"}, relatedWords:[53,54,55,86,92]},
    {id:81, en:"Was he?", enClean:"Was he?", ta:"Irundhara?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"he"}, relatedWords:[56,57,58,87,93]},
    {id:82, en:"Were she/they?", enClean:"Were she/they?", ta:"Irundhangala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"they"}, relatedWords:[59,60,61,88,94]},
    {id:83, en:"Were we?", enClean:"Were we?", ta:"Irundhoma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"we"}, relatedWords:[62,63,64,65,66,67,89,95]},
    {id:84, en:"Was it?", enClean:"Was it?", ta:"Irundhucha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"non-human"}, relatedWords:[68,69,70,90,96]},
    {id:85, en:"Am I?", enClean:"Am I?", ta:"Irukana?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"I"}, relatedWords:[50,51,52,79,91]},
    {id:86, en:"Are you?", enClean:"Are you?", ta:"Irukeengala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"you"}, relatedWords:[53,54,55,80,92]},
    {id:87, en:"Is he?", enClean:"Is he?", ta:"Irukara?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"he"}, relatedWords:[56,57,58,81,93]},
    {id:88, en:"Are she/they?", enClean:"Are she/they?", ta:"Irukangala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"they"}, relatedWords:[59,60,61,82,94]},
    {id:89, en:"Are we?", enClean:"Are we?", ta:"Irukoma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"we"}, relatedWords:[62,63,64,65,66,67,83,95]},
    {id:90, en:"Is it?", enClean:"Is it?", ta:"Iruka?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"non-human"}, relatedWords:[68,69,70,84,96]},
    {id:91, en:"Will I be?", enClean:"Will I be?", ta:"Irupana?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"I"}, relatedWords:[50,51,52,79,85]},
    {id:92, en:"Will you be?", enClean:"Will you be?", ta:"Irupeengala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"you"}, relatedWords:[53,54,55,80,86]},
    {id:93, en:"Will he be?", enClean:"Will he be?", ta:"Irupara?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"he"}, relatedWords:[56,57,58,81,87]},
    {id:94, en:"Will she/they be?", enClean:"Will she/they be?", ta:"Irupangala?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"they"}, relatedWords:[59,60,61,82,88]},
    {id:95, en:"Will we be?", enClean:"Will we be?", ta:"Irupoma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"we"}, relatedWords:[62,63,64,65,66,67,83,89]},
    {id:96, en:"Will it be?", enClean:"Will it be?", ta:"Irukuma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"non-human"}, relatedWords:[68,69,70,84,90]},
    {id:97, en:"Father (/?)", ta:"Appa-va?", pron:"", cat:"Family-Question"},
    {id:98, en:"Mother (/?)", ta:"Amma-va?", pron:"", cat:"Family-Question"},
    {id:99, en:"Grandfather (/?)", ta:"Thatha-va?", pron:"", cat:"Family-Question"},
    {id:100, en:"Grandmother (/?)", ta:"Paati-ya?", pron:"", cat:"Family-Question"},
    {id:101, en:"Older brother (/?)", ta:"Anna-va?", pron:"", cat:"Family-Question"},
    {id:102, en:"Older sister (/?)", ta:"Akka-va?", pron:"", cat:"Family-Question"},
    {id:103, en:"Younger brother (/?)", ta:"Thumbi-ya?", pron:"", cat:"Family-Question"},
    {id:104, en:"Younger sister (/?)", ta:"Thungachi-ya?", pron:"", cat:"Family-Question"},
    {id:105, en:"Uncle (/?)", ta:"Mama-va?", pron:"", cat:"Family-Question"},
    {id:106, en:"Aunty (/?)", ta:"Maami-ya? Athai-ya?", pron:"", cat:"Family-Question"},
    {id:107, en:"Husband (/?)", ta:"Kanava-ah? Purushana?", pron:"", cat:"Family-Question"},
    {id:108, en:"Wife (/?)", ta:"Manaivi-ya? Pondatii-ya?", pron:"", cat:"Family-Question"},
    {id:109, en:"Boy/Son", ta:"Paiyan", pron:"Paa-ai-ya-in", cat:"People"},
    {id:110, en:"Girl/Daughter", ta:"Ponnu", pron:"Poo-in-nu", cat:"People"},
    {id:111, en:"Up/Above/On/Upstairs", ta:"Maela", pron:"MAY-le", cat:"Location/Adverb"},
    {id:112, en:"Below/Under/Down/Downstairs", ta:"Keela", pron:"KEY-le", cat:"Location/Adverb"},
    {id:113, en:"Front/Before/Infront", ta:"Munnadi", pron:"MU-naddi", cat:"Location/Adverb"},
    {id:114, en:"Back/After/Behind", ta:"Pinnadi", pron:"PI-naddi", cat:"Location/Adverb"},
    {id:115, en:"Small", ta:"Chinnathu/Chinna", pron:"CHIN-ath-e / Che-in-na", cat:"Adjective"},
    {id:116, en:"Big", ta:"Perusu/Periya", pron:"Pae-ree-ya / Pe-ru-su", cat:"Adjective"},
    {id:117, en:"Little/Less", ta:"Konjam / Kammi", pron:"Koo-in-jam / Kaa-im-me", cat:"Quantity"},
    {id:118, en:"More/Very/A lot", ta:"Neraiya/Romba", pron:"NE-ray-uh / RUUM-ba", cat:"Quantity"},
    {id:119, en:"Many", ta:"Adhigam", pron:"UH-di-gum", cat:"Quantity"},
    {id:120, en:"This", ta:"Idhu / Indha", pron:"", cat:"Demonstrative"},
    {id:121, en:"That", ta:"Adhu / Andha", pron:"", cat:"Demonstrative"},
    {id:122, en:"Here", ta:"Inga", pron:"", cat:"Location"},
    {id:123, en:"There", ta:"Anga", pron:"", cat:"Location"},
    {id:124, en:"Now", ta:"Ippo", pron:"", cat:"Time"},
    {id:125, en:"Then/while/during", ta:"Appo", pron:"", cat:"Time"},
    {id:126, en:"Like this", ta:"Indha Mathiri / Ippadi", pron:"", cat:"Manner"},
    {id:127, en:"Like that", ta:"Andha Mathiri / Appadi", pron:"", cat:"Manner"},
    {id:128, en:"Truth", ta:"Unmai", pron:"", cat:"Abstract"},
    {id:129, en:"Lie", ta:"Poi", pron:"", cat:"Abstract"},
    {id:130, en:"Correct/Right/Okay", ta:"Sari", pron:"Cherry", cat:"Abstract"},
    {id:131, en:"Wrong/mistake", ta:"Thappu", pron:"", cat:"Abstract"},
    {id:132, en:"Bitter", ta:"Kasapu", pron:"", cat:"Taste"},
    {id:133, en:"Sweet", ta:"Inipu", pron:"", cat:"Taste"},
    {id:134, en:"Sour", ta:"Pulipu", pron:"", cat:"Taste"},
    {id:135, en:"Salt", ta:"Uppu", pron:"", cat:"Taste"},
    {id:136, en:"Tart", ta:"Thuvarpu", pron:"", cat:"Taste"},
    {id:137, en:"Spicy", ta:"Kaaram", pron:"", cat:"Taste"},
    {id:138, en:"Inside", ta:"Ulla", pron:"", cat:"Location"},
    {id:139, en:"Outside", ta:"Veliya", pron:"", cat:"Location"},
    {id:140, en:"Old", ta:"Palaya/Palasu", pron:"", cat:"Adjective"},
    {id:141, en:"New", ta:"Pudhu/Pudhusu", pron:"", cat:"Adjective"},
    {id:142, en:"Yesterday", ta:"Nethu", pron:"", cat:"Time"},
    {id:143, en:"Today", ta:"Inaiku", pron:"", cat:"Time"},
    {id:144, en:"Tomorrow", ta:"Naalaiku", pron:"", cat:"Time"},
    {id:145, en:"House", ta:"Veedu", pron:"", cat:"Noun"},
    {id:146, en:"In the House", ta:"Veetla", pron:"", cat:"Noun"},
    {id:147, en:"To the House", ta:"Veetuku", pron:"", cat:"Noun"},
    {id:148, en:"Yes", ta:"Aama", pron:"", cat:"Affirmation/Negation"},
    {id:149, en:"No/Not/Not there/Neither/Either/Or", ta:"illa", pron:"", cat:"Affirmation/Negation"},
    {id:150, en:"But", ta:"Aana", pron:"", cat:"Conjunction"},
    {id:151, en:"Because", ta:"Yaena", pron:"", cat:"Conjunction"},
    {id:152, en:"And/After", ta:"Apram", pron:"", cat:"Conjunction/Time"},
    {id:153, en:"Name/People", ta:"Peru", pron:"", cat:"Noun"},
    {id:154, en:"To me", ta:"Enaku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:155, en:"To you", ta:"Ungaluku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:156, en:"To him", ta:"Avaruku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:157, en:"To her/them", ta:"Avangaluku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:158, en:"To us (Inc.)", ta:"Nammaluku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:159, en:"To us (Exc.)", ta:"Engaluku", pron:"", cat:"Personal Pronoun-Dative"},
    {id:162, en:"To me", ta:"Enkitta", pron:"", cat:"Non Personal Pronoun"},
    {id:163, en:"To you", ta:"Ungakitta", pron:"", cat:"Non Personal Pronoun"},
    {id:164, en:"To him", ta:"Avarukitta", pron:"", cat:"Non Personal Pronoun"},
    {id:165, en:"To her/them", ta:"Avangakitta", pron:"", cat:"Non Personal Pronoun"},
    {id:166, en:"To us (Inc.)", ta:"Nammakitta", pron:"", cat:"Non Personal Pronoun"},
    {id:167, en:"To us (Exc.)", ta:"Engakitta", pron:"", cat:"Non Personal Pronoun"},
    {id:173, en:"Don't you like?", enClean:"Don't you like?", ta:"Pudikatha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[216,217,194,197,218,219,220,221]},
    {id:174, en:"Want/Need", enClean:"Want", ta:"Venum", pron:"Ve-nu-im", cat:"Verb", type:"conjugation", grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[175,176,177]},
    {id:175, en:"Don't want/need", enClean:"Don't want", ta:"Vendam", pron:"Ve-in-da-im", cat:"Verb", type:"conjugation", grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"statement", person:null}, relatedWords:[174,176,177]},
    {id:176, en:"Do you want?", enClean:"Do you want?", ta:"Venuma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[174,175,177]},
    {id:177, en:"Don't you want?", enClean:"Don't you want?", ta:"Vendama?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[174,175,176]},
    {id:181, en:"Don't you understand?", enClean:"Don't you understand?", ta:"Puriyatha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[222,223,196,199,224,225,226,227]},
    {id:185, en:"Don't you know?", enClean:"Don't you know?", ta:"Theriyatha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[228,229,195,198,230,231,232,233]},
    {id:186, en:"Enough (Quantity)", ta:"Podhum", pron:"Po-dhu-im", cat:"Quantity"},
    {id:187, en:"Enough (Measurement)", ta:"Pathum", pron:"Pa-ith-um", cat:"Quantity"},
    {id:188, en:"Enough (Quantity -)", ta:"Podhathu", pron:"Po-dha-thu", cat:"Quantity"},
    {id:189, en:"Enough (Measurement -)", ta:"Pathathu", pron:"Pa-ith-tha-thu", cat:"Quantity"},
    {id:190, en:"Enough (Quantity /?)", ta:"Podhuma?", pron:"", cat:"Quantity"},
    {id:191, en:"Enough (Measurement /?)", ta:"Pathuma?", pron:"", cat:"Quantity"},
    {id:192, en:"Enough (Quantity - /?)", ta:"Podhatha?", pron:"", cat:"Quantity"},
    {id:193, en:"Enough (Measurement - /?)", ta:"Pathatha?", pron:"", cat:"Quantity"},
    {id:194, en:"Didn't like", enClean:"Didn't like", ta:"Pudikala", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}, relatedWords:[216,217,197,218,219,220,221,173]},
    {id:195, en:"Didn't know", enClean:"Didn't know", ta:"Therila", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}, relatedWords:[228,229,198,230,231,232,233,185]},
    {id:196, en:"Didn't understand", enClean:"Didn't understand", ta:"Purila", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null}, relatedWords:[222,223,199,224,225,226,227,181]},
    {id:197, en:"Didn't you like?", enClean:"Didn't you like?", ta:"Pudikalaiya?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[216,217,194,218,219,220,221,173]},
    {id:198, en:"Didn't you know?", enClean:"Didn't you know?", ta:"Therilaiya?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[228,229,195,230,231,232,233,185]},
    {id:199, en:"Didn't you understand?", enClean:"Didn't you understand?", ta:"Purilaiya?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null}, relatedWords:[222,223,196,224,225,226,227,181]},
    {id:200, en:"In/at", ta:"la", pron:"", cat:"Postposition"},
    {id:201, en:"With", ta:"Kuda", pron:"", cat:"Postposition"},
    {id:202, en:"Without", ta:"illama", pron:"", cat:"Postposition"},
    {id:203, en:"For", ta:"Kaga", pron:"", cat:"Postposition"},
    {id:204, en:"About", ta:"Pathi", pron:"", cat:"Postposition"},
    {id:205, en:"Because of", ta:"Naela", pron:"", cat:"Postposition"},
    {id:206, en:"Inside", ta:"Ulla", pron:"", cat:"Postposition"},
    {id:207, en:"Outside", ta:"Veliya", pron:"", cat:"Postposition"},
    {id:208, en:"To - Inside", ta:"Ku", pron:"", cat:"Postposition"},
    {id:209, en:"To - Nearby", ta:"Kitta", pron:"", cat:"Postposition"},
    {id:210, en:"On", ta:"Maela", pron:"", cat:"Postposition"},
    {id:211, en:"If", ta:"na", pron:"", cat:"Conjunction"},
    {id:212, en:"From", ta:"Irundhu", pron:"", cat:"Postposition"},
    {id:213, en:"Under", ta:"Keezhla", pron:"", cat:"Postposition"},
    {id:214, en:"Front", ta:"Munnadi", pron:"", cat:"Postposition"},
    {id:215, en:"Back", ta:"Pinnadi", pron:"", cat:"Postposition"},
    {id:216, en:"Liked", enClean:"Liked", ta:"Pudichithu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[217,194,197,218,219,220,221,173]},
    {id:217, en:"Did you like?", enClean:"Did you like?", ta:"Pudichitha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[216,194,197,218,219,220,221,173]},
    {id:218, en:"Liking (now)", enClean:"Liking", ta:"Pudichiruku", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[216,217,194,197,219,220,221,173]},
    {id:219, en:"Are you liking (now)?", enClean:"Are you liking?", ta:"Pudichiruka?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[216,217,194,197,218,220,221,173]},
    {id:220, en:"Like (general)", enClean:"Like", ta:"Pudikum", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[216,217,194,197,218,219,221,173]},
    {id:221, en:"Do you like?", enClean:"Do you like?", ta:"Pudikuma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[216,217,194,197,218,219,220,173]},
    {id:222, en:"Understood", enClean:"Understood", ta:"Purinjuthu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[223,196,199,224,225,226,227,181]},
    {id:223, en:"Did you understand?", enClean:"Did you understand?", ta:"Purinjutha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[222,196,199,224,225,226,227,181]},
    {id:224, en:"Understand (now)", enClean:"Understand", ta:"Puriyuthu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[222,223,196,199,225,226,227,181]},
    {id:225, en:"Do you understand (now)?", enClean:"Do you understand?", ta:"Puriyutha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[222,223,196,199,224,226,227,181]},
    {id:226, en:"Understand (general)", enClean:"Understand", ta:"Puriyum", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[222,223,196,199,224,225,227,181]},
    {id:227, en:"Do you understand?", enClean:"Do you understand?", ta:"Puriyuma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[222,223,196,199,224,225,226,181]},
    {id:228, en:"Knew/Found out", enClean:"Knew", ta:"Therinjuthu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[229,195,198,230,231,232,233,185]},
    {id:229, en:"Did you know?", enClean:"Did you know?", ta:"Therinjutha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[228,195,198,230,231,232,233,185]},
    {id:230, en:"Know (realizing now)", enClean:"Know", ta:"Theriyuthu", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[228,229,195,198,231,232,233,185]},
    {id:231, en:"Do you know (now)?", enClean:"Do you know?", ta:"Theriyutha?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[228,229,195,198,230,232,233,185]},
    {id:232, en:"Know (general)", enClean:"Know", ta:"Theriyum", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null}, relatedWords:[228,229,195,198,230,231,233,185]},
    {id:233, en:"Do you know?", enClean:"Do you know?", ta:"Theriyuma?", pron:"", cat:"Verb", type:"conjugation", grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null}, relatedWords:[228,229,195,198,230,231,232,185]},
    {id:234, en:"Day before yesterday", ta:"Mundha Nethu", pron:"", cat:"Time"},
    {id:235, en:"Day after tomorrow", ta:"Naalanaiku", pron:"", cat:"Time"},
    {id:236, en:"Day", ta:"Naal", pron:"", cat:"Time"},
    {id:237, en:"Week", ta:"Vaaram", pron:"", cat:"Time"},
    {id:238, en:"Month", ta:"Maasam", pron:"", cat:"Time"},
    {id:239, en:"Year", ta:"Varusham", pron:"", cat:"Time"},
    {id:240, en:"Second", ta:"Nodi", pron:"", cat:"Time"},
    {id:241, en:"Minute", ta:"Nimisham", pron:"", cat:"Time"},
    {id:242, en:"Hour", ta:"Mani Neram", pron:"", cat:"Time"},
    {id:243, en:"Clock", ta:"Mani", pron:"", cat:"Time"},
    {id:244, en:"2 weeks before", ta:"2 weeks Munnadi", pron:"", cat:"Time"},
    {id:245, en:"2 months after", ta:"2 weeks apram", pron:"", cat:"Time"},
    {id:246, en:"Last week", ta:"Ponna Varam", pron:"", cat:"Time"},
    {id:247, en:"This week", ta:"Indha Varam", pron:"", cat:"Time"},
    {id:248, en:"Next week", ta:"Adutha Varam", pron:"", cat:"Time"},
    {id:249, en:"Indian Money", ta:"Rupees", pron:"", cat:"Noun"},
    {id:250, en:"1", ta:"Onnu", pron:"", cat:"Number"},
    {id:251, en:"2", ta:"Rendu", pron:"", cat:"Number"},
    {id:252, en:"3", ta:"Moonu", pron:"", cat:"Number"},
    {id:253, en:"4", ta:"Naalu", pron:"", cat:"Number"},
    {id:254, en:"5", ta:"Aanchu", pron:"", cat:"Number"},
    {id:255, en:"6", ta:"Aaru", pron:"", cat:"Number"},
    {id:256, en:"7", ta:"Yellu", pron:"", cat:"Number"},
    {id:257, en:"8", ta:"Yettu", pron:"", cat:"Number"},
    {id:258, en:"9", ta:"Onbathu", pron:"", cat:"Number"},
    {id:259, en:"10", ta:"Pathu", pron:"", cat:"Number"},
    {id:260, en:"11", ta:"Pathionnu", pron:"", cat:"Number"},
    {id:261, en:"12", ta:"Panandu", pron:"", cat:"Number"}
];

// Opposite pairs for matching game
// Total: 15 pairs
const oppositePairs = [
    [1, 4],     // Morning - Night
    [111, 112], // Up - Down
    [113, 114], // Front - Back
    [115, 116], // Small - Big
    [117, 118], // Less - More
    [120, 121], // This - That
    [122, 123], // Here - There
    [124, 125], // Now - Then
    [128, 129], // Truth - Lie
    [130, 131], // Right - Wrong
    [132, 133], // Bitter - Sweet
    [138, 139], // Inside - Outside
    [140, 141], // Old - New
    [142, 144], // Yesterday - Tomorrow
    [148, 149]  // Yes - No
];

// Sentence templates inspired by Tamil children's books
// All sentences use romanized Tamil (no Tamil script)
// {word} is the blank to fill in
// <mark> tags highlight new vocabulary words introduced
const sentenceTemplates = [
    // Morning/Time stories
    {tamil: "{word} elundhirichen, kaalai vanakkam sollanum", english: "I woke up in the {word}, must say good morning", categories: ["Time"]},
    {tamil: "Paati {word} samaichu tharuvaanga", english: "Grandma will cook for {word}", categories: ["Time/Food"]},
    {tamil: "Naan {word} <mark>paal kudichen</mark>", english: "I <mark>drank milk</mark> in the {word}", categories: ["Time", "Time/Food"]},

    // Family in stories
    {tamil: "En {word} romba <mark>azhaga</mark> irukanga", english: "My {word} is very <mark>beautiful/handsome</mark>", categories: ["Family", "Family-Extended"]},
    {tamil: "{word} enaku <mark>kadhai solluvaanga</mark>", english: "{word} will <mark>tell me a story</mark>", categories: ["Family", "Family-Extended"]},
    {tamil: "Naan en {word} kuda <mark>vilayaaduren</mark>", english: "I <mark>play</mark> with my {word}", categories: ["Family", "Family-Extended"]},
    {tamil: "En {word} veetukku vandhaanga", english: "My {word} came to the house", categories: ["Family", "Family-Extended"]},

    // Daily life phrases from children's books
    {tamil: "Idhu {word}, adhu periya", english: "This is {word}, that is big", categories: ["Adjective"]},
    {tamil: "Naan {word} irukken, neenga anga irukeengala?", english: "I am {word}, are you there?", categories: ["Location", "Demonstrative"]},
    {tamil: "{word} saapadu romba <mark>rusiyaa</mark> irundhuchu", english: "The {word} food was very <mark>tasty</mark>", categories: ["Time/Food", "Taste"]},

    // Question words from storybooks
    {tamil: "Nee {word} poore? Veetuku poganuma?", english: "Where are you going? Should I go home?", categories: ["Question Word"], exclude: ["What", "When", "Who", "Why", "How", "How many", "How much", "For what", "Which", "Whose"]},
    {tamil: "{word} ippadiyellam aayiduchu?", english: "{word} did this happen?", categories: ["Question Word"], exclude: ["Where", "Who", "How many", "How much", "From where", "For what", "Which", "Whose"]},
    {tamil: "Idhu {word} veedu? Enaku theriyala", english: "This is {word} house? I don't know", categories: ["Question Word"], exclude: ["What", "When", "Where", "Why", "How", "How many", "How much", "For what", "Which"]},

    // Simple narratives
    {tamil: "Oru naal, {word} <mark>nadandhu poonen</mark>", english: "One day, I <mark>walked</mark> in the {word}", categories: ["Time"], exclude: ["Yesterday", "Today", "Tomorrow", "Day before yesterday", "Day after tomorrow", "Now", "Then/while/during", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "2 weeks before", "2 months after", "Last week", "This week", "Next week"]},
    {tamil: "{word} romba <mark>santhoshamaa</mark> irundhen", english: "I was very <mark>happy</mark> {word}", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Now", "Then/while/during", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "2 weeks before", "2 months after", "Last week", "This week", "Next week"]},
    {tamil: "Naan {word} veetla irundhuten", english: "I was at home {word}", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Now", "Then/while/during", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "This week", "Next week", "2 months after"]},

    // Common phrases kids use
    {tamil: "Enaku {word} venum, please thaanga", english: "I want {word}, please give", categories: ["Adjective", "Quantity", "Demonstrative"]},
    {tamil: "Idhu {word} iruku, enaku pudikkala", english: "This is {word}, I don't like it", categories: ["Taste", "Adjective"]},
    {tamil: "Naan {word} <mark>odi ponen</mark>", english: "I <mark>ran</mark> {word}", categories: ["Location/Adverb"]},

    // Numbers in stories
    {tamil: "Anga {word} <mark>pookkal</mark> irukku", english: "There are {word} <mark>flowers</mark> there", categories: ["Number"]},
    {tamil: "Enaku {word} <mark>friends</mark> irukanga", english: "I have {word} <mark>friends</mark>", categories: ["Number"]},
    {tamil: "Naan {word} mani neramukku <mark>thoonguven</mark>", english: "I will <mark>sleep</mark> at {word} o'clock", categories: ["Number"]},

    // Location and direction
    {tamil: "Paiyan {word} ninnutaan", english: "The boy stood {word}", categories: ["Location/Adverb"]},
    {tamil: "Naan {word} <mark>paarthen</mark>, yaarum illai", english: "I <mark>looked</mark> {word}, no one there", categories: ["Location/Adverb"]},
    {tamil: "Amma {word} irukkanga, naan keezha irukkuren", english: "Mother is {word}, I am below", categories: ["Location/Adverb"]},

    // Opposites in stories
    {tamil: "Idhu {word}, adhu pudhusu", english: "This is {word}, that is new", categories: ["Adjective"]},
    {tamil: "Naan {word} paakkuren, apram pinnadi paakuren", english: "I look {word}, then look back", categories: ["Location/Adverb"]},
    {tamil: "Ippo {word}, appo apdi irundhuchu", english: "Now like {word}, then it was like that", categories: ["Demonstrative", "Manner"]},

    // Feelings and states
    {tamil: "Enaku {word} saapadu romba pudikum", english: "I really like {word} food", categories: ["Time/Food", "Taste"]},
    {tamil: "Naan {word} paathuten, romba <mark>azhaga</mark> irundhuchu", english: "I saw {word}, it was very <mark>beautiful</mark>", categories: ["People", "Family"]},

    // Want/Like/Know from stories
    {tamil: "Enaku {word}, ungaluku pudikuma?", english: "I {word}, do you like it?", categories: ["Verb"], exclude: ["I was", "I am", "I will be", "You were", "You are", "You will be", "He was", "He is", "He will be", "She/They were", "She/They are", "She/They will be", "We were", "We are", "We will be", "It was", "It is", "It will be", "Was I?", "Were you?", "Was he?", "Were she/they?", "Were we?", "Was it?", "Am I?", "Are you?", "Is he?", "Are she/they?", "Are we?", "Is it?", "Will I be?", "Will you be?", "Will he be?", "Will she/they be?", "Will we be?", "Will it be?", "Didn't like", "Don't you like?", "Didn't you like?", "Didn't know", "Don't you know?", "Didn't you know?", "Didn't understand", "Don't you understand?", "Didn't you understand?", "Do you like?", "Knew", "Do you know?", "Understood", "Do you understand?", "Don't want", "Don't you want?", "Do you want?", "Understand (general)", "Know (general)"]},
    {tamil: "Enaku {word}, please konjam thaanga", english: "I {word}, please give me a little", categories: ["Verb"], exclude: ["I was", "I am", "I will be", "You were", "You are", "You will be", "He was", "He is", "He will be", "She/They were", "She/They are", "She/They will be", "We were", "We are", "We will be", "It was", "It is", "It will be", "Was I?", "Were you?", "Was he?", "Were she/they?", "Were we?", "Was it?", "Am I?", "Are you?", "Is he?", "Are she/they?", "Are we?", "Is it?", "Will I be?", "Will you be?", "Will he be?", "Will she/they be?", "Will we be?", "Will it be?", "Didn't like", "Don't you like?", "Didn't you like?", "Didn't know", "Don't you know?", "Didn't you know?", "Didn't understand", "Don't you understand?", "Didn't you understand?", "Liked", "Do you like?", "Knew", "Do you know?", "Understood", "Do you understand?", "Don't you want?", "Do you want?", "Like (general)", "Understand (general)", "Know (general)"]},
    {tamil: "Ungaluku {word}? Enaku theriyum", english: "Do you {word}? I know", categories: ["Verb"], exclude: ["I was", "I am", "I will be", "You were", "You are", "You will be", "He was", "He is", "He will be", "She/They were", "She/They are", "She/They will be", "We were", "We are", "We will be", "It was", "It is", "It will be", "Was I?", "Were you?", "Was he?", "Were she/they?", "Were we?", "Was it?", "Am I?", "Are you?", "Is he?", "Are she/they?", "Are we?", "Is it?", "Will I be?", "Will you be?", "Will he be?", "Will she/they be?", "Will we be?", "Will it be?", "Didn't like", "Don't you like?", "Didn't you like?", "Didn't know", "Don't you know?", "Didn't you know?", "Didn't understand", "Don't you understand?", "Didn't you understand?", "Liked", "Do you like?", "Knew", "Understood", "Don't want", "Don't you want?", "Want", "Do you want?", "Like (general)", "Understand (general)"]},

    // Possessive pronouns in narratives
    {tamil: "{word} veedu romba periya, enoda veedu chinna", english: "{word} house is very big, my house is small", categories: ["Possessive"]},
    {tamil: "Idhu {word} saapadu, adhu en saapadu", english: "This is {word} food, that is my food", categories: ["Possessive"]},

    // Yes/No and conjunctions
    {tamil: "{word}, naan vandhutten", english: "{word}, I came", categories: ["Affirmation/Negation"]},
    {tamil: "Naan poganum, {word} time illa", english: "I must go, {word} no time", categories: ["Conjunction"]},
    {tamil: "Idhu nalladhu {word} kettadhu?", english: "Is this good {word} bad?", categories: ["Affirmation/Negation"]},

    // Demonstratives in children's phrases
    {tamil: "{word} en paiyan, adhu ungaloda ponnu", english: "{word} is my son, that is your daughter", categories: ["Demonstrative", "People"]},
    {tamil: "Naan {word} mathiri pannuven", english: "I will do like {word}", categories: ["Demonstrative", "Manner"]},

    // Time-related narratives
    {tamil: "{word} amma koovittaanga", english: "{word} mother called", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Now", "Then/while/during", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "This week", "Next week", "2 weeks before", "2 months after"]},
    {tamil: "Naan {word} veetuku poren", english: "I am going home {word}", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Now", "Then/while/during", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "Yesterday", "This week", "Next week", "2 weeks before", "2 months after", "Last week"]},

    // Simple conclusions from stories
    {tamil: "Adhukkaaga {word} <mark>kashtappattom</mark>", english: "For that we {word} <mark>struggled/worked hard</mark>", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Yesterday", "Today", "Tomorrow", "Day before yesterday", "Day after tomorrow", "Now", "Then/while/during", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "2 weeks before", "2 months after", "Last week", "This week", "Next week"]},
    {tamil: "{word} veetla irundhaanga, ippo veliya poittaanga", english: "They were at home {word}, now they went outside", categories: ["Time"], exclude: ["Morning", "Afternoon", "Evening", "Night", "Now", "Then/while/during", "Today", "Tomorrow", "Day after tomorrow", "Week", "Month", "Year", "Hour", "Minute", "Second", "Clock", "Day", "Good Morning", "Good Afternoon", "Good Evening", "Good night", "Breakfast", "Lunch", "Dinner", "2 weeks before", "2 months after", "This week", "Next week"]},

    // Dative pronouns
    {tamil: "{word} romba <mark>pasikkuthu</mark>", english: "I am very <mark>hungry</mark> (to {word})", categories: ["Personal Pronoun-Dative", "Non Personal Pronoun"]},
    {tamil: "{word} puriyuthu, avangaluku puriyala", english: "I understand (to {word}), they don't understand", categories: ["Personal Pronoun-Dative"]},

    // Postpositions
    {tamil: "Naan appa {word} vandhen", english: "I came {word} father", categories: ["Postposition"], exclude: ["In/at", "To - Inside", "To - Nearby", "On", "Under", "From"]},
    {tamil: "Paiyan veedu {word} irukaan", english: "The boy is {word} the house", categories: ["Postposition"], exclude: ["To - Inside", "To - Nearby", "From"]},

    // Abstract concepts
    {tamil: "Idhu {word}, poi sollakoodadhu", english: "This is {word}, must not tell lies", categories: ["Abstract"]},
    {tamil: "Adhu {word}, naan sariyana answer solluren", english: "That is {word}, I will tell the correct answer", categories: ["Abstract"]},

    // Quantity phrases
    {tamil: "Konjam {word} kudunga", english: "Give a little {word}", categories: ["Quantity", "Adjective"]},
    {tamil: "{word} saapadu podhum, adhigam vendam", english: "{word} food is enough, don't want more", categories: ["Quantity"]}
];
