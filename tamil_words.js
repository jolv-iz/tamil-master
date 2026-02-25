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

// Complete sentence pairs for fill-in-the-blank exercises
// Inspired by Tamil children's books with natural, grammatically correct sentences
// All use romanized Tamil (no Tamil script)
const sentencePairs = [
    // EASY - Greetings & Daily Routines (10 sentences)
    {
        id: 1,
        english: "Good morning, how are you?",
        tamil: "Kaalai vanakkam, neenga eppadi irukeenga?",
        blanks: ["Kaalai vanakkam"],
        hint: "Kaa-lai va-nak-kam",
        difficulty: "easy"
    },
    {
        id: 2,
        english: "I woke up in the morning",
        tamil: "Naan kaalai-la elundhiruchen",
        blanks: ["kaalai-la"],
        hint: "morning + in (la suffix)",
        difficulty: "easy"
    },
    {
        id: 3,
        english: "Grandma cooked breakfast",
        tamil: "Paati kaalai saapadu samaichchanga",
        blanks: ["kaalai saapadu"],
        hint: "Kaa-lai saa-pa-du",
        difficulty: "easy"
    },
    {
        id: 4,
        english: "I drink milk in the morning",
        tamil: "Naan kaalai-la paal kudikuren",
        blanks: ["paal"],
        hint: "milk",
        difficulty: "easy"
    },
    {
        id: 5,
        english: "Good night, see you tomorrow",
        tamil: "Rathiri vanakkam, naalaiku paakalam",
        blanks: ["Rathiri vanakkam"],
        hint: "Raa-thri va-nak-kam",
        difficulty: "easy"
    },
    {
        id: 6,
        english: "Today is a good day",
        tamil: "Inaiku nalla naal",
        blanks: ["Inaiku"],
        hint: "today",
        difficulty: "easy"
    },
    {
        id: 7,
        english: "I am going home now",
        tamil: "Naan ippo veetuku poren",
        blanks: ["veetuku"],
        hint: "veetu + ku (to suffix)",
        difficulty: "easy"
    },
    {
        id: 8,
        english: "My name is good",
        tamil: "En peru nalladu",
        blanks: ["peru"],
        hint: "name/person",
        difficulty: "easy"
    },
    {
        id: 9,
        english: "Where is the house?",
        tamil: "Veedu yenga iruku?",
        blanks: ["yenga"],
        hint: "where",
        difficulty: "easy"
    },
    {
        id: 10,
        english: "Yes, I like it very much",
        tamil: "Aama, enaku romba pudikum",
        blanks: ["Aama"],
        hint: "yes",
        difficulty: "easy"
    },

    // EASY-MEDIUM - Family & Relationships (10 sentences)
    {
        id: 11,
        english: "My father is at home",
        tamil: "En appa veetla irukaru",
        blanks: ["appa"],
        hint: "father",
        difficulty: "easy"
    },
    {
        id: 12,
        english: "Mother is cooking food",
        tamil: "Amma saapadu samaikuranga",
        blanks: ["Amma"],
        hint: "mother",
        difficulty: "easy"
    },
    {
        id: 13,
        english: "Grandma tells me stories",
        tamil: "Paati enaku kadhai solluvaanga",
        blanks: ["Paati"],
        hint: "grandmother",
        difficulty: "easy"
    },
    {
        id: 14,
        english: "I play with my older brother",
        tamil: "Naan en anna kuda vilayaaduren",
        blanks: ["anna"],
        hint: "older brother",
        difficulty: "easy"
    },
    {
        id: 15,
        english: "My older sister is very beautiful",
        tamil: "En akka romba azhaga irukanga",
        blanks: ["akka"],
        hint: "older sister",
        difficulty: "easy"
    },
    {
        id: 16,
        english: "Younger brother came to the house",
        tamil: "Thumbi veetuku vandhaan",
        blanks: ["Thumbi"],
        hint: "younger brother",
        difficulty: "medium"
    },
    {
        id: 17,
        english: "Uncle is a good person",
        tamil: "Mama nalla per",
        blanks: ["Mama"],
        hint: "uncle",
        difficulty: "easy"
    },
    {
        id: 18,
        english: "My house is very big",
        tamil: "En veedu romba periya",
        blanks: ["En"],
        hint: "my",
        difficulty: "easy"
    },
    {
        id: 19,
        english: "Your house is here, my house is there",
        tamil: "Unga veedu inga, en veedu anga",
        blanks: ["Unga"],
        hint: "your",
        difficulty: "easy"
    },
    {
        id: 20,
        english: "Our family is happy",
        tamil: "Namma kudumbam sandhoshamaa iruku",
        blanks: ["Namma"],
        hint: "our (inclusive)",
        difficulty: "medium"
    },

    // MEDIUM - Locations & Directions (10 sentences)
    {
        id: 21,
        english: "The book is on the table",
        tamil: "Pusthagam meja maela iruku",
        blanks: ["maela"],
        hint: "on/above",
        difficulty: "medium"
    },
    {
        id: 22,
        english: "The cat is under the bed",
        tamil: "Poonai kattil keezha iruku",
        blanks: ["keezha"],
        hint: "under/below",
        difficulty: "medium"
    },
    {
        id: 23,
        english: "I am standing in front of the house",
        tamil: "Naan veedu munnadi ninnutruken",
        blanks: ["munnadi"],
        hint: "in front",
        difficulty: "medium"
    },
    {
        id: 24,
        english: "The garden is behind the house",
        tamil: "Thotham veedu pinnadi iruku",
        blanks: ["pinnadi"],
        hint: "behind",
        difficulty: "medium"
    },
    {
        id: 25,
        english: "Come here, don't go there",
        tamil: "Inga vaa, anga pogaadhe",
        blanks: ["inga"],
        hint: "here",
        difficulty: "medium"
    },
    {
        id: 26,
        english: "I am inside the house",
        tamil: "Naan veedu ulla iruken",
        blanks: ["ulla"],
        hint: "inside",
        difficulty: "medium"
    },
    {
        id: 27,
        english: "The children are playing outside",
        tamil: "Pasanga veliya vilayaadranga",
        blanks: ["veliya"],
        hint: "outside",
        difficulty: "medium"
    },
    {
        id: 28,
        english: "This is small, that is big",
        tamil: "Idhu chinna, adhu periya",
        blanks: ["chinna"],
        hint: "small",
        difficulty: "medium"
    },
    {
        id: 29,
        english: "I want a little food, not too much",
        tamil: "Enaku konjam saapadu venum, romba vendam",
        blanks: ["konjam"],
        hint: "a little",
        difficulty: "medium"
    },
    {
        id: 30,
        english: "There are many people here",
        tamil: "Inga neraiya per irukanga",
        blanks: ["neraiya"],
        hint: "many/a lot",
        difficulty: "medium"
    },

    // MEDIUM - Time & When (8 sentences)
    {
        id: 31,
        english: "I ate food yesterday",
        tamil: "Naan nethu saapadu saapten",
        blanks: ["nethu"],
        hint: "yesterday",
        difficulty: "medium"
    },
    {
        id: 32,
        english: "Tomorrow I will go to school",
        tamil: "Naalaiku naan schoolku poven",
        blanks: ["Naalaiku"],
        hint: "tomorrow",
        difficulty: "medium"
    },
    {
        id: 33,
        english: "I saw mother yesterday",
        tamil: "Naan nethu amma-va paarthen",
        blanks: ["nethu"],
        hint: "yesterday",
        difficulty: "medium"
    },
    {
        id: 34,
        english: "We worked hard last week",
        tamil: "Naanga ponna vaaram kashtappattom",
        blanks: ["ponna vaaram"],
        hint: "last week",
        difficulty: "medium"
    },
    {
        id: 35,
        english: "I will sleep at 9 o'clock",
        tamil: "Naan onbathu mani neramukku thoonguven",
        blanks: ["onbathu"],
        hint: "nine (9)",
        difficulty: "medium"
    },
    {
        id: 36,
        english: "In the month of January it's cold",
        tamil: "January maasam-la kuliraa irukum",
        blanks: ["maasam-la"],
        hint: "month + in (la suffix)",
        difficulty: "medium"
    },
    {
        id: 37,
        english: "One day, a bird came",
        tamil: "Oru naal, oru kuruvi vandhudhu",
        blanks: ["Oru naal"],
        hint: "one day",
        difficulty: "medium"
    },
    {
        id: 38,
        english: "Now I understand, before I didn't know",
        tamil: "Ippo enaku puriyuthu, munnaadi theriyala",
        blanks: ["Ippo"],
        hint: "now",
        difficulty: "medium"
    },

    // MEDIUM-HARD - Feelings & Descriptions (8 sentences)
    {
        id: 39,
        english: "This food is very sweet",
        tamil: "Indha saapadu romba inipu",
        blanks: ["inipu"],
        hint: "sweet",
        difficulty: "medium"
    },
    {
        id: 40,
        english: "The curry is very spicy",
        tamil: "Kuzhambu romba kaaram",
        blanks: ["kaaram"],
        hint: "spicy",
        difficulty: "medium"
    },
    {
        id: 41,
        english: "I like sour taste",
        tamil: "Enaku pulipu pudikum",
        blanks: ["pulipu"],
        hint: "sour",
        difficulty: "medium"
    },
    {
        id: 42,
        english: "This is old, that is new",
        tamil: "Idhu palaya, adhu pudhusu",
        blanks: ["palaya"],
        hint: "old",
        difficulty: "medium"
    },
    {
        id: 43,
        english: "That is correct, this is wrong",
        tamil: "Adhu sari, idhu thappu",
        blanks: ["sari"],
        hint: "correct/right",
        difficulty: "medium"
    },
    {
        id: 44,
        english: "Tell the truth, don't tell lies",
        tamil: "Unmai sollu, poi sollaaadhe",
        blanks: ["Unmai"],
        hint: "truth",
        difficulty: "hard"
    },
    {
        id: 45,
        english: "I am hungry, please give me food",
        tamil: "Enaku pasikkuthu, please saapadu kudunga",
        blanks: ["pasikkuthu"],
        hint: "hungry (to me)",
        difficulty: "hard"
    },
    {
        id: 46,
        english: "This is enough, I don't want more",
        tamil: "Idhu podhum, enaku adhigam vendam",
        blanks: ["podhum"],
        hint: "enough",
        difficulty: "hard"
    },

    // HARD - Questions & Complex Sentences (6 sentences)
    {
        id: 47,
        english: "Who is that person?",
        tamil: "Andha per yaaru?",
        blanks: ["yaaru"],
        hint: "who",
        difficulty: "hard"
    },
    {
        id: 48,
        english: "Why did this happen?",
        tamil: "Idhu yaen aayiduchu?",
        blanks: ["yaen"],
        hint: "why",
        difficulty: "hard"
    },
    {
        id: 49,
        english: "How do you do this?",
        tamil: "Neenga idha eppadi seiringa?",
        blanks: ["eppadi"],
        hint: "how",
        difficulty: "hard"
    },
    {
        id: 50,
        english: "Do you understand? Yes, I understand",
        tamil: "Ungaluku puriyutha? Aama, enaku puriyuthu",
        blanks: ["puriyuthu"],
        hint: "understand (to me)",
        difficulty: "hard"
    }
];
