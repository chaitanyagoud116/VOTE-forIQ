/** Translated quiz content for major Indian languages */
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

type TranslatedQuiz = Record<string, QuizQuestion[]>;

export const TRANSLATED_QUIZ: TranslatedQuiz = {
  en: [
    {
      id: 1,
      question: "A politician promises to 'eradicate poverty in 6 months'. How should you evaluate this?",
      options: [
        "Vote for them immediately, poverty is a major issue.",
        "Ask for the specific budget allocation and historical precedent for such a rapid change.",
        "Assume they have a secret plan they can't share yet.",
        "Ignore it, all politicians lie anyway."
      ],
      correctAnswer: 1,
      explanation: "Massive systemic issues cannot be solved instantly. Concrete plans require specific budget lines, legislative timelines, and structural changes."
    },
    {
      id: 2,
      question: "When evaluating a candidate's past performance, what is the most reliable metric?",
      options: [
        "Their recent speeches and television appearances.",
        "The number of followers they have on social media.",
        "Their actual legislative voting record and implemented policies.",
        "How they perform in debates against opponents."
      ],
      correctAnswer: 2,
      explanation: "Rhetoric and popularity do not govern a country. A politician's actual voting record on bills and policies is the only concrete proof of their stance."
    },
    {
      id: 3,
      question: "A party's advertisement says 'Crime rate doubled under their rule!' What should you check first?",
      options: [
        "Share it on social media to warn others.",
        "The original data source and whether the baseline period is fair.",
        "Whether the advertisement looks professionally made.",
        "Nothing — ads are always truthful by law."
      ],
      correctAnswer: 1,
      explanation: "Statistics without context are meaningless. Always verify the data source, the time period chosen, and whether the comparison baseline is fair."
    },
    {
      id: 4,
      question: "What is NOTA and why does it matter in Indian elections?",
      options: [
        "A political party that contests in all states.",
        "None Of The Above — it lets voters reject all candidates officially.",
        "A voter ID verification system.",
        "A type of electronic voting machine."
      ],
      correctAnswer: 1,
      explanation: "NOTA (None Of The Above) was introduced by the Supreme Court in 2013. It empowers voters to formally express dissatisfaction with all candidates, strengthening democratic choice."
    }
  ],
  hi: [
    {
      id: 1,
      question: "एक राजनेता '6 महीने में गरीबी मिटाने' का वादा करता है। आपको इसका मूल्यांकन कैसे करना चाहिए?",
      options: [
        "तुरंत उन्हें वोट दें, गरीबी एक बड़ा मुद्दा है।",
        "विशिष्ट बजट आवंटन और इतनी तेज़ बदलाव के ऐतिहासिक उदाहरण पूछें।",
        "मान लें कि उनके पास एक गुप्त योजना है जो वे अभी साझा नहीं कर सकते।",
        "इसे अनदेखा करें, सभी राजनेता झूठ बोलते हैं।"
      ],
      correctAnswer: 1,
      explanation: "बड़ी व्यवस्थागत समस्याएँ तुरंत हल नहीं हो सकतीं। ठोस योजनाओं के लिए विशिष्ट बजट, विधायी समयसीमा और संरचनात्मक बदलाव आवश्यक हैं।"
    },
    {
      id: 2,
      question: "किसी उम्मीदवार के पिछले प्रदर्शन का मूल्यांकन करते समय, सबसे विश्वसनीय मानदंड क्या है?",
      options: [
        "उनके हाल के भाषण और टेलीविज़न पर प्रदर्शन।",
        "सोशल मीडिया पर उनके फॉलोअर्स की संख्या।",
        "उनका वास्तविक विधायी मतदान रिकॉर्ड और लागू की गई नीतियाँ।",
        "विरोधियों के खिलाफ बहस में उनका प्रदर्शन।"
      ],
      correctAnswer: 2,
      explanation: "भाषणबाजी और लोकप्रियता से देश नहीं चलता। किसी राजनेता का बिलों और नीतियों पर वास्तविक मतदान रिकॉर्ड ही उनके रुख का एकमात्र ठोस प्रमाण है।"
    },
    {
      id: 3,
      question: "एक पार्टी का विज्ञापन कहता है 'उनके शासन में अपराध दर दोगुनी हो गई!' आपको पहले क्या जांचना चाहिए?",
      options: [
        "दूसरों को चेतावनी देने के लिए इसे सोशल मीडिया पर साझा करें।",
        "मूल डेटा स्रोत और क्या आधार अवधि उचित है।",
        "क्या विज्ञापन पेशेवर रूप से बना है।",
        "कुछ नहीं — विज्ञापन कानून द्वारा हमेशा सत्य होते हैं।"
      ],
      correctAnswer: 1,
      explanation: "संदर्भ के बिना आंकड़े अर्थहीन हैं। हमेशा डेटा स्रोत, चुनी गई समय अवधि, और तुलना आधार की निष्पक्षता की जांच करें।"
    },
    {
      id: 4,
      question: "NOTA क्या है और भारतीय चुनावों में यह क्यों महत्वपूर्ण है?",
      options: [
        "एक राजनीतिक पार्टी जो सभी राज्यों में चुनाव लड़ती है।",
        "नन ऑफ द अबव — यह मतदाताओं को सभी उम्मीदवारों को आधिकारिक रूप से अस्वीकार करने देता है।",
        "एक वोटर आईडी सत्यापन प्रणाली।",
        "एक प्रकार की इलेक्ट्रॉनिक वोटिंग मशीन।"
      ],
      correctAnswer: 1,
      explanation: "NOTA (नन ऑफ द अबव) 2013 में सुप्रीम कोर्ट द्वारा पेश किया गया था। यह मतदाताओं को सभी उम्मीदवारों के प्रति असंतोष व्यक्त करने का अधिकार देता है।"
    }
  ],
  te: [
    {
      id: 1,
      question: "ఒక రాజకీయ నాయకుడు '6 నెలల్లో పేదరికాన్ని నిర్మూలిస్తాను' అని వాగ్దానం చేస్తాడు. మీరు దీన్ని ఎలా మూల్యాంకనం చేయాలి?",
      options: [
        "వెంటనే వారికి ఓటు వేయండి, పేదరికం పెద్ద సమస్య.",
        "నిర్దిష్ట బడ్జెట్ కేటాయింపు మరియు ఇంత వేగవంతమైన మార్పుకు చారిత్రక ఆధారాలు అడగండి.",
        "వారి దగ్గర ఇంకా పంచుకోలేని రహస్య ప్రణాళిక ఉందని భావించండి.",
        "దీన్ని పట్టించుకోవద్దు, అన్ని రాజకీయ నాయకులు అబద్ధాలు చెబుతారు."
      ],
      correctAnswer: 1,
      explanation: "భారీ వ్యవస్థాగత సమస్యలు తక్షణమే పరిష్కరించబడవు. నిర్దిష్ట బడ్జెట్ లైన్లు, చట్టపరమైన కాలపరిమితులు మరియు నిర్మాణాత్మక మార్పులు అవసరం."
    },
    {
      id: 2,
      question: "ఒక అభ్యర్థి గత పనితీరును మూల్యాంకనం చేసేటప్పుడు, అత్యంత నమ్మదగిన ప్రమాణం ఏమిటి?",
      options: [
        "వారి ఇటీవలి ప్రసంగాలు మరియు టెలివిజన్ కార్యక్రమాలు.",
        "సోషల్ మీడియాలో వారి ఫాలోవర్ల సంఖ్య.",
        "వారి వాస్తవ శాసన ఓటింగ్ రికార్డు మరియు అమలు చేసిన విధానాలు.",
        "ప్రత్యర్థులతో చర్చల్లో వారి పనితీరు."
      ],
      correctAnswer: 2,
      explanation: "వాగ్ధాటి మరియు జనాదరణ దేశాన్ని నడపవు. బిల్లులు మరియు విధానాలపై రాజకీయ నాయకుడి వాస్తవ ఓటింగ్ రికార్డు మాత్రమే వారి వైఖరికి ఏకైక నిర్ధారణ."
    },
    {
      id: 3,
      question: "ఒక పార్టీ ప్రకటన 'వారి పాలనలో నేర రేటు రెట్టింపు అయింది!' అని చెబుతుంది. మీరు మొదట ఏమి తనిఖీ చేయాలి?",
      options: [
        "ఇతరులను హెచ్చరించడానికి సోషల్ మీడియాలో షేర్ చేయండి.",
        "అసలు డేటా మూలం మరియు బేస్‌లైన్ కాలం న్యాయమైనదా అనేది.",
        "ప్రకటన వృత్తిపరంగా తయారు చేయబడిందా.",
        "ఏమీ లేదు — ప్రకటనలు చట్టం ప్రకారం ఎల్లప్పుడూ నిజం."
      ],
      correctAnswer: 1,
      explanation: "సందర్భం లేకుండా గణాంకాలు అర్థరహితం. ఎల్లప్పుడూ డేటా మూలం, ఎంచుకున్న సమయ వ్యవధి మరియు పోలిక బేస్‌లైన్ న్యాయంగా ఉందా అని ధృవీకరించండి."
    },
    {
      id: 4,
      question: "NOTA అంటే ఏమిటి మరియు భారత ఎన్నికలలో ఇది ఎందుకు ముఖ్యమైనది?",
      options: [
        "అన్ని రాష్ట్రాల్లో పోటీ చేసే రాజకీయ పార్టీ.",
        "నన్ ఆఫ్ ది అబవ్ — ఇది ఓటర్లు అన్ని అభ్యర్థులను అధికారికంగా తిరస్కరించడానికి అనుమతిస్తుంది.",
        "ఓటర్ ఐడి ధృవీకరణ వ్యవస్థ.",
        "ఒక రకమైన ఎలక్ట్రానిక్ ఓటింగ్ మెషీన్."
      ],
      correctAnswer: 1,
      explanation: "NOTA (నన్ ఆఫ్ ది అబవ్) 2013లో సుప్రీం కోర్ట్ ద్వారా ప్రవేశపెట్టబడింది. ఇది ఓటర్లకు అన్ని అభ్యర్థులపై అసంతృప్తి వ్యక్తం చేసే అధికారాన్ని ఇస్తుంది."
    }
  ],
  ta: [
    {
      id: 1,
      question: "ஒரு அரசியல்வாதி '6 மாதங்களில் வறுமையை ஒழிப்பேன்' என்று உறுதியளிக்கிறார். இதை நீங்கள் எப்படி மதிப்பீடு செய்ய வேண்டும்?",
      options: [
        "உடனடியாக அவர்களுக்கு வாக்களியுங்கள், வறுமை ஒரு முக்கிய பிரச்சினை.",
        "குறிப்பிட்ட பட்ஜெட் ஒதுக்கீடு மற்றும் இவ்வளவு விரைவான மாற்றத்திற்கான வரலாற்று முன்னுதாரணத்தைக் கேளுங்கள்.",
        "அவர்களிடம் பகிர்ந்து கொள்ள முடியாத ரகசிய திட்டம் உள்ளது என்று கருதுங்கள்.",
        "புறக்கணியுங்கள், எல்லா அரசியல்வாதிகளும் பொய் சொல்கிறார்கள்."
      ],
      correctAnswer: 1,
      explanation: "பெரிய அமைப்பு ரீதியான பிரச்சினைகள் உடனடியாக தீர்க்க முடியாது. உறுதியான திட்டங்களுக்கு குறிப்பிட்ட பட்ஜெட், சட்டமன்ற காலக்கெடுகள் மற்றும் கட்டமைப்பு மாற்றங்கள் தேவை."
    },
    {
      id: 2,
      question: "ஒரு வேட்பாளரின் கடந்தகால செயல்திறனை மதிப்பிடும்போது, மிகவும் நம்பகமான அளவுகோல் எது?",
      options: [
        "அவர்களின் சமீபத்திய உரைகள் மற்றும் தொலைக்காட்சி நிகழ்ச்சிகள்.",
        "சமூக ஊடகங்களில் அவர்களின் பின்தொடர்பவர்களின் எண்ணிக்கை.",
        "அவர்களின் உண்மையான சட்டமன்ற வாக்களிப்பு பதிவு மற்றும் செயல்படுத்தப்பட்ட கொள்கைகள்.",
        "எதிரணியினருக்கு எதிரான விவாதங்களில் அவர்களின் செயல்திறன்."
      ],
      correctAnswer: 2,
      explanation: "பேச்சாற்றல் மற்றும் புகழ் ஒரு நாட்டை ஆள்வதில்லை. மசோதாக்கள் மற்றும் கொள்கைகளில் ஒரு அரசியல்வாதியின் உண்மையான வாக்களிப்பு பதிவு மட்டுமே அவர்களின் நிலைப்பாட்டின் உறுதியான ஆதாரம்."
    }
  ],
  bn: [
    {
      id: 1,
      question: "একজন রাজনীতিবিদ '৬ মাসে দারিদ্র্য দূর করব' বলে প্রতিশ্রুতি দেন। আপনার এটি কীভাবে মূল্যায়ন করা উচিত?",
      options: [
        "এখনই তাকে ভোট দিন, দারিদ্র্য একটি বড় সমস্যা।",
        "নির্দিষ্ট বাজেট বরাদ্দ এবং এত দ্রুত পরিবর্তনের ঐতিহাসিক নজির জিজ্ঞাসা করুন।",
        "ধরে নিন তার একটি গোপন পরিকল্পনা আছে যা এখনও শেয়ার করতে পারছেন না।",
        "এড়িয়ে যান, সব রাজনীতিবিদ মিথ্যা বলেন।"
      ],
      correctAnswer: 1,
      explanation: "বিশাল কাঠামোগত সমস্যা তাৎক্ষণিকভাবে সমাধান করা যায় না। সুনির্দিষ্ট পরিকল্পনার জন্য নির্দিষ্ট বাজেট, আইনি সময়সীমা এবং কাঠামোগত পরিবর্তন প্রয়োজন।"
    }
  ],
  mr: [
    {
      id: 1,
      question: "एक राजकारणी '6 महिन्यांत गरिबी निर्मूलन करू' असे वचन देतो. तुम्ही याचे मूल्यांकन कसे करावे?",
      options: [
        "लगेच त्यांना मत द्या, गरिबी ही मोठी समस्या आहे.",
        "विशिष्ट अर्थसंकल्प वाटप आणि इतक्या जलद बदलाचे ऐतिहासिक उदाहरण विचारा.",
        "त्यांच्याकडे अजून सामायिक करता न येणारी गुप्त योजना आहे असे गृहीत धरा.",
        "दुर्लक्ष करा, सर्व राजकारणी खोटे बोलतात.",
      ],
      correctAnswer: 1,
      explanation: "मोठ्या प्रणालीगत समस्या तात्काळ सोडवता येत नाहीत. ठोस योजनांसाठी विशिष्ट अर्थसंकल्प, विधायी कालमर्यादा आणि संरचनात्मक बदल आवश्यक आहेत."
    }
  ]
};
