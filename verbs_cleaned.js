// CLEANED TAMIL VERB DATA
// Based on linguistic research - see VERB_CLEANUP.md for details
//
// Verb Types:
// - regular: Normal verbs with person conjugation (irukka)
// - dative-stative: Psychological state verbs (pudikka, theriya, puriya)
// - modal-auxiliary-dative-stative: Modal verbs with dative subjects (venum)
//
// Tense for Dative-Stative:
// - present-habitual: Uses -um ending (general/constant state)
// - present-momentary: Uses -iruku/-uthu ending (happening right now)
// - past: Completed action

const verbsData = [
    // ========================================
    // IRUKKA (To Be) - Regular Verb
    // ========================================

    // PAST TENSE
    {id:50, en:"I was", enClean:"I was", ta:"Irundhan", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"I"},
     relatedWords:[51,52,79,85,91]},

    {id:53, en:"You were", enClean:"You were", ta:"Irundheenga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"you"},
     relatedWords:[54,55,80,86,92]},

    {id:56, en:"He was", enClean:"He was", ta:"Irundharu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"he"},
     relatedWords:[57,58,81,87,93]},

    {id:59, en:"She/They were", enClean:"She/They were", ta:"Irundhanga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"they"},
     relatedWords:[60,61,82,88,94]},

    {id:62, en:"We were (Inc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-inc"},
     relatedWords:[63,64,83,89,95]},

    {id:65, en:"We were (Exc.)", enClean:"We were", ta:"Irundhom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"we-exc"},
     relatedWords:[66,67]},

    {id:68, en:"It was", enClean:"It was", ta:"Irundhuchu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"statement", person:"non-human"},
     relatedWords:[69,70,84,90,96]},

    // PRESENT TENSE
    {id:51, en:"I am", enClean:"I am", ta:"Irukan", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"I"},
     relatedWords:[50,52,79,85,91]},

    {id:54, en:"You are", enClean:"You are", ta:"Irukeenga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"you"},
     relatedWords:[53,55,80,86,92]},

    {id:57, en:"He is", enClean:"He is", ta:"Irukaru", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"he"},
     relatedWords:[56,58,81,87,93]},

    {id:60, en:"She/They are", enClean:"She/They are", ta:"Irukanga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"they"},
     relatedWords:[59,61,82,88,94]},

    {id:63, en:"We are (Inc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-inc"},
     relatedWords:[62,64,83,89,95]},

    {id:66, en:"We are (Exc.)", enClean:"We are", ta:"Irukom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"we-exc"},
     relatedWords:[65,67]},

    {id:69, en:"It is", enClean:"It is", ta:"Iruku", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"statement", person:"non-human"},
     relatedWords:[68,70,84,90,96]},

    // FUTURE TENSE
    {id:52, en:"I will be", enClean:"I will be", ta:"Irupan", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"I"},
     relatedWords:[50,51,79,85,91]},

    {id:55, en:"You will be", enClean:"You will be", ta:"Irupeenga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"you"},
     relatedWords:[53,54,80,86,92]},

    {id:58, en:"He will be", enClean:"He will be", ta:"Iruparu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"he"},
     relatedWords:[56,57,81,87,93]},

    {id:61, en:"She/They will be", enClean:"She/They will be", ta:"Irupanga", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"they"},
     relatedWords:[59,60,82,88,94]},

    {id:64, en:"We will be (Inc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-inc"},
     relatedWords:[62,63,83,89,95]},

    {id:67, en:"We will be (Exc.)", enClean:"We will be", ta:"Irupom", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"we-exc"},
     relatedWords:[65,66]},

    {id:70, en:"It will be", enClean:"It will be", ta:"Irukum", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"statement", person:"non-human"},
     relatedWords:[68,69,84,90,96]},

    // QUESTION FORMS - PAST
    {id:79, en:"Was I?", enClean:"Was I?", ta:"Irundhana?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"I"},
     relatedWords:[50,51,52,85,91]},

    {id:80, en:"Were you?", enClean:"Were you?", ta:"Irundheengala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"you"},
     relatedWords:[53,54,55,86,92]},

    {id:81, en:"Was he?", enClean:"Was he?", ta:"Irundhara?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"he"},
     relatedWords:[56,57,58,87,93]},

    {id:82, en:"Were she/they?", enClean:"Were she/they?", ta:"Irundhangala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"they"},
     relatedWords:[59,60,61,88,94]},

    {id:83, en:"Were we?", enClean:"Were we?", ta:"Irundhoma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"we"},
     relatedWords:[62,63,64,65,66,67,89,95]},

    {id:84, en:"Was it?", enClean:"Was it?", ta:"Irundhucha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"past", aspect:null, polarity:"positive", form:"question", person:"non-human"},
     relatedWords:[68,69,70,90,96]},

    // QUESTION FORMS - PRESENT
    {id:85, en:"Am I?", enClean:"Am I?", ta:"Irukana?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"I"},
     relatedWords:[50,51,52,79,91]},

    {id:86, en:"Are you?", enClean:"Are you?", ta:"Irukeengala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"you"},
     relatedWords:[53,54,55,80,92]},

    {id:87, en:"Is he?", enClean:"Is he?", ta:"Irukara?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"he"},
     relatedWords:[56,57,58,81,93]},

    {id:88, en:"Are she/they?", enClean:"Are she/they?", ta:"Irukangala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"they"},
     relatedWords:[59,60,61,82,94]},

    {id:89, en:"Are we?", enClean:"Are we?", ta:"Irukoma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"we"},
     relatedWords:[62,63,64,65,66,67,83,95]},

    {id:90, en:"Is it?", enClean:"Is it?", ta:"Iruka?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"present", aspect:"continuous", polarity:"positive", form:"question", person:"non-human"},
     relatedWords:[68,69,70,84,96]},

    // QUESTION FORMS - FUTURE
    {id:91, en:"Will I be?", enClean:"Will I be?", ta:"Irupana?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"I"},
     relatedWords:[50,51,52,79,85]},

    {id:92, en:"Will you be?", enClean:"Will you be?", ta:"Irupeengala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"you"},
     relatedWords:[53,54,55,80,86]},

    {id:93, en:"Will he be?", enClean:"Will he be?", ta:"Irupara?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"he"},
     relatedWords:[56,57,58,81,87]},

    {id:94, en:"Will she/they be?", enClean:"Will she/they be?", ta:"Irupangala?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"they"},
     relatedWords:[59,60,61,82,88]},

    {id:95, en:"Will we be?", enClean:"Will we be?", ta:"Irupoma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"we"},
     relatedWords:[62,63,64,65,66,67,83,89]},

    {id:96, en:"Will it be?", enClean:"Will it be?", ta:"Irukuma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Irukka", verbType:"regular", tense:"future", aspect:null, polarity:"positive", form:"question", person:"non-human"},
     relatedWords:[68,69,70,84,90]},

    // ========================================
    // VENUM (Want/Need) - Modal Auxiliary + Dative-Stative
    // ========================================

    {id:174, en:"Want/Need", enClean:"Want", ta:"Venum", pron:"Ve-nu-im", cat:"Verb", type:"conjugation",
     grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[175,176,177]},

    {id:175, en:"Don't want/need", enClean:"Don't want", ta:"Vendam", pron:"Ve-in-da-im", cat:"Verb", type:"conjugation",
     grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"statement", person:null},
     relatedWords:[174,176,177]},

    {id:176, en:"Do you want?", enClean:"Do you want?", ta:"Venuma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[174,175,177]},

    {id:177, en:"Don't you want?", enClean:"Don't you want?", ta:"Vendama?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Venum", verbType:"modal-auxiliary-dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[174,175,176]},

    // ========================================
    // PUDIKKA (Like) - Dative-Stative
    // ========================================

    // PAST
    {id:216, en:"Liked", enClean:"Liked", ta:"Pudichithu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[217,194,197,218,219,220,221,173]},

    {id:217, en:"Did you like?", enClean:"Did you like?", ta:"Pudichitha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[216,194,197,218,219,220,221,173]},

    {id:194, en:"Didn't like", enClean:"Didn't like", ta:"Pudikala", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null},
     relatedWords:[216,217,197,218,219,220,221,173]},

    {id:197, en:"Didn't you like?", enClean:"Didn't you like?", ta:"Pudikalaiya?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[216,217,194,218,219,220,221,173]},

    // PRESENT - MOMENTARY
    {id:218, en:"Liking (now)", enClean:"Liking", ta:"Pudichiruku", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[216,217,194,197,219,220,221,173]},

    {id:219, en:"Are you liking (now)?", enClean:"Are you liking?", ta:"Pudichiruka?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[216,217,194,197,218,220,221,173]},

    // PRESENT - HABITUAL
    {id:220, en:"Like (general)", enClean:"Like", ta:"Pudikum", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[216,217,194,197,218,219,221,173]},

    {id:221, en:"Do you like?", enClean:"Do you like?", ta:"Pudikuma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[216,217,194,197,218,219,220,173]},

    // NOTE: id:172 is duplicate of 221 - REMOVED

    {id:173, en:"Don't you like?", enClean:"Don't you like?", ta:"Pudikatha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Pudikka", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[216,217,194,197,218,219,220,221]},

    // ========================================
    // THERIYA (Know) - Dative-Stative
    // ========================================

    // PAST
    {id:228, en:"Knew/Found out", enClean:"Knew", ta:"Therinjuthu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[229,195,198,230,231,232,233,185]},

    {id:229, en:"Did you know?", enClean:"Did you know?", ta:"Therinjutha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[228,195,198,230,231,232,233,185]},

    {id:195, en:"Didn't know", enClean:"Didn't know", ta:"Therila", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null},
     relatedWords:[228,229,198,230,231,232,233,185]},

    {id:198, en:"Didn't you know?", enClean:"Didn't you know?", ta:"Therilaiya?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[228,229,195,230,231,232,233,185]},

    // PRESENT - MOMENTARY
    {id:230, en:"Know (realizing now)", enClean:"Know", ta:"Theriyuthu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[228,229,195,198,231,232,233,185]},

    {id:231, en:"Do you know (now)?", enClean:"Do you know?", ta:"Theriyutha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[228,229,195,198,230,232,233,185]},

    // PRESENT - HABITUAL
    {id:232, en:"Know (general)", enClean:"Know", ta:"Theriyum", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[228,229,195,198,230,231,233,185]},

    {id:233, en:"Do you know?", enClean:"Do you know?", ta:"Theriyuma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[228,229,195,198,230,231,232,185]},

    // NOTE: id:184 is duplicate of 233 - REMOVED

    {id:185, en:"Don't you know?", enClean:"Don't you know?", ta:"Theriyatha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Theriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[228,229,195,198,230,231,232,233]},

    // ========================================
    // PURIYA (Understand) - Dative-Stative
    // ========================================

    // PAST
    {id:222, en:"Understood", enClean:"Understood", ta:"Purinjuthu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[223,196,199,224,225,226,227,181]},

    {id:223, en:"Did you understand?", enClean:"Did you understand?", ta:"Purinjutha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[222,196,199,224,225,226,227,181]},

    {id:196, en:"Didn't understand", enClean:"Didn't understand", ta:"Purila", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"statement", person:null},
     relatedWords:[222,223,199,224,225,226,227,181]},

    {id:199, en:"Didn't you understand?", enClean:"Didn't you understand?", ta:"Purilaiya?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"past", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[222,223,196,224,225,226,227,181]},

    // PRESENT - MOMENTARY
    {id:224, en:"Understand (now)", enClean:"Understand", ta:"Puriyuthu", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[222,223,196,199,225,226,227,181]},

    {id:225, en:"Do you understand (now)?", enClean:"Do you understand?", ta:"Puriyutha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-momentary", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[222,223,196,199,224,226,227,181]},

    // PRESENT - HABITUAL
    {id:226, en:"Understand (general)", enClean:"Understand", ta:"Puriyum", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"statement", person:null},
     relatedWords:[222,223,196,199,224,225,227,181]},

    {id:227, en:"Do you understand?", enClean:"Do you understand?", ta:"Puriyuma?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"positive", form:"question", person:null},
     relatedWords:[222,223,196,199,224,225,226,181]},

    {id:181, en:"Don't you understand?", enClean:"Don't you understand?", ta:"Puriyatha?", pron:"", cat:"Verb", type:"conjugation",
     grammar:{base:"Puriya", verbType:"dative-stative", tense:"present-habitual", aspect:null, polarity:"negative", form:"question", person:null},
     relatedWords:[222,223,196,199,224,225,226,227]}
];

// Removed duplicates: id:172 (duplicate of 221), id:184 (duplicate of 233)
