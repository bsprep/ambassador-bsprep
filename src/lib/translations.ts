export type Language = "en" | "hi" | "ta";

export const TRANSLATIONS: Record<Language, Record<string, any>> = {
  en: {
    // Hero
    "hero.stats.impacted": "ACTIVE\nSTUDENTS",
    "hero.stats.mentors": "EXPERT\nMENTORS",
    "hero.stats.rewards": "PREMIUM\nREWARDS",
    "hero.textA": "Empowering Next-Gen Tech Leaders",
    "hero.applyNow": "Apply Now",
    "hero.applicationsOpen": "Applications Open Now",
    "hero.textB": "Unlock Exclusive Rewards & Opportunities",
    "hero.headingWords": ["Student", "Ambassador", "Program"],

    // About
    "about.pill": "ABOUT US",
    "about.title1": "BY STUDENTS,",
    "about.title2": "FOR STUDENTS.",
    "about.desc": "We started BSPrep to solve a simple problem: the BS degree is hard, and doing it solo is even harder. We are entirely student-run, independent, and focused on one thing—giving you the notes, tools, and late-night study groups we wish we had when we started.",
    "about.btn": "EXPLORE PLATFORM",

    // Marquee
    "marquee.words": ["STUDENT AMBASSADOR", "CAMPUS LEADER", "BSPREP 2026", "TECH COMMUNITY", "EXCLUSIVE REWARDS", "CAREER GROWTH"],

    // Sponsors
    "sponsors.title": "Our Sponsors",
    "sponsors.subtitle": "Backed by industry leaders",
    "sponsors.cta": "CHECK OUT OUR SPONSORS",

    // HowItWorks
    "process.label": "THE PROCESS",
    "process.title": "HOW IT WORKS",
    "process.step1": "Apply on Unstop",
    "process.step2": "Get Selected",
    "process.step3": "Complete Bounties",
    "process.step4": "Climb Leaderboard",
    "process.step5": "Claim Rewards",

    // Timeline
    "timeline.title1": "AMBASSADOR",
    "timeline.title2": "JOURNEY",
    "timeline.subtitle": "Your path from applicant to elite tech leader",
    "timeline.date1": "July 15",
    "timeline.step1.title": "APPLICATIONS OPEN",
    "timeline.step1.desc": "Submit your application on Unstop. Limited slots available for the first cohort.",
    "timeline.date2": "August",
    "timeline.step2.title": "SHORTLISTING PHASE",
    "timeline.step2.desc": "Candidates are selected based strictly on eagerness, drive, and merit to form the core team.",
    "timeline.date3": "Sept 10",
    "timeline.step3.title": "ONBOARDING",
    "timeline.step3.desc": "Officially join the BSPrep Student Ambassador community. Get your unique invite link and dashboard access.",
    "timeline.date4": "Sept - Oct",
    "timeline.step4.title": "THE BOUNTY BOARD",
    "timeline.step4.desc": "Earn points by completing verified tasks: from technical blogging to hosting exclusive campus sessions and generating referrals.",
    "timeline.date5": "Oct 30",
    "timeline.step5.title": "ELITE PERKS UNLOCKED",
    "timeline.step5.desc": "Redeem your points for zero-cost career perks like AI mock interviews, premium developer swag, and custom XYZ domains.",

    // Features
    "features.title1": "CORE",
    "features.title2": "RESPONSIBILITIES",
    "features.desc": "As a Student Ambassador, your primary mission is to expand the BSPrep community within your campus. You are the bridge between us and the next generation of tech leaders.",
    "features.cta": "DOWNLOAD PDF GUIDELINES",
    "features.item1.title": "Referral Engine",
    "features.item1.desc": "Get your unique invite link. Invite your peers and track every signup seamlessly on your dashboard.",
    "features.item2.title": "Bounty Tasks",
    "features.item2.desc": "Earn points by completing verified tasks: from technical blogging to hosting exclusive campus sessions.",
    "features.item3.title": "Premium Rewards",
    "features.item3.desc": "Redeem your points for zero-cost career perks like 1-on-1 resume roasts and mock interviews.",

    // Elite Perks
    "perks.label": "WHAT YOU'LL GET",
    "perks.title": "ELITE AMBASSADOR PERKS",
    "perks.desc": "Since this is the inaugural BSPrep Student Ambassador Program, we've partnered with industry leaders to bring you unprecedented, zero-cost career advantages.",
    "perks.sponsored": "SPONSORED BY",
    "perks.item1.title": "AI Mock Interview Credits",
    "perks.item1.desc": "High-value AI Mock Interview credits for winners and 90% discount vouchers for runners-up to level up your interview game.",
    "perks.item1.pill": "AI Interview Mastery",
    "perks.item2.title": "Digital Credentials & AI Tools",
    "perks.item2.desc": "Blockchain-powered digital certificates, credential sponsorship worth ₹15L+, and exclusive access to the TruScholar AI Career Coach.",
    "perks.item2.pill": "Verified Credentials",
    "perks.item3.title": "Premium Digital Identity",
    "perks.item3.desc": "Top 10 ambassadors receive 1-Year free custom XYZ domains to build their premium digital portfolio and stand out.",
    "perks.item3.pill": "Digital Identity",
    "perks.item4.title": "Exclusive Swag Kit",
    "perks.item4.desc": "Unlock premium Unstop goodies including official t-shirts, exclusive stickers, bookmarks, and premium notes.",
    "perks.item4.pill": "Premium Swag",
    "perks.item5.title": "Developer Sticker Packs",
    "perks.item5.desc": "Exclusive premium developer sticker packs specifically curated for our top tech ambassadors.",
    "perks.item5.pill": "Tech Lifestyle",

    // Benefits
    "benefits.label": "SCORING & REWARDS",
    "benefits.title": "LEADERBOARD\n& REWARDS",
    "benefits.desc": "Every referral counts. The leaderboard tracks your progress in real-time. Earn points, climb ranks, and get recognized at the end of the program with exclusive rewards reserved only for the top performers.",

    // Testimonials
    "testimonials.title1": "TRUSTED BY",
    "testimonials.title2": "THE COMMUNITY",
    "testimonials.subtitle": "Hear from students and mentors who have experienced the impact of BSPrep firsthand.",
    "testimonials.list": [
      {
        name: "Aarav Sharma",
        role: "IITM BS Data Science Student",
        quote: "BSPrep completely changed how I approach my assignments. The peer mentorship and structured resources are a lifesaver when concepts get tough.",
        avatar: "A"
      },
      {
        name: "Priya Patel",
        role: "BSPrep Mentor",
        quote: "Being a mentor on this platform allows me to guide juniors through the exact challenges I faced. It's incredibly fulfilling to give back to this community.",
        avatar: "P"
      },
      {
        name: "Siddharth Verma",
        role: "IITM BS Diploma Student",
        quote: "The mock interviews and study materials provided by BSPrep gave me the exact edge I needed to ace my qualifier exams. Highly recommended!",
        avatar: "S"
      },
      {
        name: "Kavya Iyer",
        role: "IITM BS Degree Student",
        quote: "I used to feel isolated studying online, but BSPrep's community made me feel connected. The collaborative learning environment is unmatched.",
        avatar: "K"
      },
      {
        name: "Rohan Gupta",
        role: "IITM BS Foundation Student",
        quote: "The structured roadmaps helped me navigate my first semester with confidence. It's the best companion for the IITM BS journey.",
        avatar: "R"
      }
    ],

    // FAQ
    "faq.title1": "COMMON",
    "faq.title2": "QUESTIONS",
    "faq.subtitle": "Everything you need to know",
    "faq.q1": "Where can I apply for the program?",
    "faq.q2": "What are the rewards?",
    "faq.a2": "Every selected ambassador who completes the program will receive an official Offer Letter and Certificates from our sponsors. Top performers will additionally unlock premium swag, exclusive badges, free XYZ domains, InterviewBuddy vouchers, and TruScholar AI exclusives.",
    "faq.q3": "What are the deadlines?",
    "faq.a3": "Applications are currently open on Unstop. Please check the official Unstop page for the exact application deadline. Once you are selected, specific deadlines for your bounty tasks will be clearly outlined on your dashboard.",
    "faq.q4": "Who is eligible to apply?",
    "faq.a4": "Any student with a passion for technology, networking, and community building. No prior technical experience is required—just eagerness and drive.",
    "faq.q5": "How are candidates shortlisted?",
    "faq.a5": "Shortlisting is based strictly on your application. We look for enthusiasm, clear communication, and a genuine desire to grow your skills and community.",

    // CTA
    "cta.title1": "READY TO MAKE AN ",
    "cta.title2": "IMPACT?",
    "cta.desc": "Join the BSPrep Student Ambassador Program and unlock exclusive rewards, networking opportunities, and career growth.",
    "cta.btn": "Apply Now",
    "cta.sub": "Via Unstop Platform",
  },
  hi: {
    // Hero
    "hero.stats.impacted": "सक्रिय\nछात्र",
    "hero.stats.mentors": "विशेषज्ञ\nमेंटर",
    "hero.stats.rewards": "प्रीमियम\nइनाम",
    "hero.textA": "अगली पीढ़ी के टेक लीडर्स को सशक्त बनाना",
    "hero.applyNow": "अभी आवेदन करें",
    "hero.applicationsOpen": "आवेदन अब खुले हैं",
    "hero.textB": "विशेष पुरस्कार और अवसर अनलॉक करें",
    "hero.headingWords": ["छात्र", "एंबेसडर", "कार्यक्रम"],

    // About
    "about.pill": "हमारे बारे में",
    "about.title1": "छात्रों द्वारा,",
    "about.title2": "छात्रों के लिए।",
    "about.desc": "हमने एक साधारण समस्या को हल करने के लिए BSPrep शुरू किया: BS डिग्री कठिन है, और इसे अकेले करना और भी कठिन है। हम पूरी तरह से छात्र-संचालित, स्वतंत्र और एक ही चीज़ पर केंद्रित हैं—आपको वे नोट्स, टूल और देर रात के अध्ययन समूह देना जिनकी हमें शुरुआत करते समय कमी खली थी।",
    "about.btn": "प्लेटफ़ॉर्म एक्सप्लोर करें",

    // Marquee
    "marquee.words": ["छात्र एंबेसडर", "कैंपस लीडर", "BSPREP 2026", "टेक समुदाय", "विशेष इनाम", "करियर ग्रोथ"],

    // Sponsors
    "sponsors.title": "हमारे प्रायोजक",
    "sponsors.subtitle": "उद्योग के लीडर्स द्वारा समर्थित",
    "sponsors.cta": "हमारे प्रायोजकों को देखें",

    // HowItWorks
    "process.label": "प्रक्रिया",
    "process.title": "यह कैसे काम करता है",
    "process.step1": "Unstop पर आवेदन करें",
    "process.step2": "चयनित हों",
    "process.step3": "Bounties पूरी करें",
    "process.step4": "लीडरबोर्ड पर चढ़ें",
    "process.step5": "इनाम प्राप्त करें",

    // Timeline
    "timeline.title1": "एंबेसडर",
    "timeline.title2": "यात्रा",
    "timeline.subtitle": "आवेदक से एलीट टेक लीडर तक का आपका रास्ता",
    "timeline.date1": "15 जुलाई",
    "timeline.step1.title": "आवेदन खुले हैं",
    "timeline.step1.desc": "Unstop पर अपना आवेदन जमा करें। पहले समूह के लिए सीमित स्लॉट उपलब्ध हैं।",
    "timeline.date2": "अगस्त",
    "timeline.step2.title": "शॉर्टलिस्टिंग चरण",
    "timeline.step2.desc": "उम्मीदवारों का चयन केवल उत्साह, लगन और योग्यता के आधार पर कोर टीम बनाने के लिए किया जाता है।",
    "timeline.date3": "10 सितंबर",
    "timeline.step3.title": "ऑनबोर्डिंग",
    "timeline.step3.desc": "आधिकारिक तौर पर BSPrep छात्र एंबेसडर समुदाय में शामिल हों। अपना अनूठा आमंत्रण लिंक और डैशबोर्ड एक्सेस प्राप्त करें।",
    "timeline.date4": "सितंबर - अक्टूबर",
    "timeline.step4.title": "Bounty बोर्ड",
    "timeline.step4.desc": "सत्यापित कार्य पूरे करके अंक अर्जित करें: तकनीकी ब्लॉगिंग से लेकर विशेष कैंपस सत्र आयोजित करने और रेफरल उत्पन्न करने तक।",
    "timeline.date5": "30 अक्टूबर",
    "timeline.step5.title": "एलीट पर्क अनलॉक",
    "timeline.step5.desc": "InterviewBuddy AI मॉक इंटरव्यू, प्रीमियम डेवलपर स्वैग और कस्टम XYZ डोमेन जैसे शून्य-लागत करियर लाभों के लिए अपने अंकों को रिडीम करें।",

    // Features
    "features.title1": "मुख्य",
    "features.title2": "जिम्मेदारियां",
    "features.desc": "छात्र एंबेसडर के रूप में, आपका प्राथमिक मिशन अपने कैंपस में BSPrep समुदाय का विस्तार करना है। आप हमारे और अगली पीढ़ी के टेक लीडर्स के बीच की कड़ी हैं।",
    "features.cta": "पीडीएफ दिशानिर्देश डाउनलोड करें",
    "features.item1.title": "रेफरल इंजन",
    "features.item1.desc": "अपना अनूठा आमंत्रण लिंक प्राप्त करें। अपने साथियों को आमंत्रित करें और अपने डैशबोर्ड पर हर साइनअप को ट्रैक करें।",
    "features.item2.title": "Bounty कार्य",
    "features.item2.desc": "सत्यापित कार्य पूरे करके अंक अर्जित करें: तकनीकी ब्लॉगिंग से लेकर विशेष कैंपस सत्र आयोजित करने तक।",
    "features.item3.title": "प्रीमियम इनाम",
    "features.item3.desc": "1-ऑन-1 रिज्यूमे समीक्षा और मॉक इंटरव्यू जैसे शून्य-लागत करियर लाभों के लिए अपने अंकों को रिडीम करें।",

    // Elite Perks
    "perks.label": "आपको क्या मिलेगा",
    "perks.title": "एलीट एंबेसडर पर्क",
    "perks.desc": "चूंकि यह उद्घाटन BSPrep छात्र एंबेसडर कार्यक्रम है, इसलिए हमने आपको अभूतपूर्व, शून्य-लागत करियर लाभ प्रदान करने के लिए उद्योग के लीडर्स के साथ भागीदारी की है।",
    "perks.sponsored": "प्रायोजक:",
    "perks.item1.title": "AI मॉक इंटरव्यू क्रेडिट",
    "perks.item1.desc": "विजेताओं के लिए उच्च-मूल्य वाले AI मॉक इंटरव्यू क्रेडिट और उपविजेताओं के लिए 90% छूट वाउचर ताकि वे अपने इंटरव्यू गेम को बेहतर कर सकें।",
    "perks.item1.pill": "AI इंटरव्यू महारत",
    "perks.item2.title": "डिजिटल क्रेडेंशियल्स और AI टूल्स",
    "perks.item2.desc": "ब्लॉकचेन-संचालित डिजिटल प्रमाणपत्र, ₹15L+ मूल्य की क्रेडेंशियल प्रायोजन, और TruScholar AI करियर कोच तक विशेष पहुंच।",
    "perks.item2.pill": "सत्यापित क्रेडेंशियल्स",
    "perks.item3.title": "प्रीमियम डिजिटल पहचान",
    "perks.item3.desc": "शीर्ष 10 एंबेसडर्स को अपना प्रीमियम डिजिटल पोर्टफोलियो बनाने और सबसे अलग दिखने के लिए 1 साल का मुफ्त कस्टम XYZ डोमेन मिलता है।",
    "perks.item3.pill": "डिजिटल पहचान",
    "perks.item4.title": "विशेष स्वैग किट",
    "perks.item4.desc": "आधिकारिक टी-शर्ट, विशेष स्टिकर, बुकमार्क और प्रीमियम नोट्स सहित प्रीमियम Unstop उपहार अनलॉक करें।",
    "perks.item4.pill": "प्रीमियम स्वैग",
    "perks.item5.title": "डेवलपर स्टिकर पैक",
    "perks.item5.desc": "हमारे शीर्ष टेक एंबेसडर्स के लिए विशेष रूप से तैयार किए गए प्रीमियम डेवलपर स्टिकर पैक।",
    "perks.item5.pill": "टेक जीवनशैली",

    // Benefits
    "benefits.label": "स्कोरिंग और इनाम",
    "benefits.title": "लीडरबोर्ड\nऔर इनाम",
    "benefits.desc": "हर रेफरल मायने रखता है। लीडरबोर्ड वास्तविक समय में आपकी प्रगति को ट्रैक करता है। अंक अर्जित करें, रैंक पर चढ़ें, और कार्यक्रम के अंत में विशेष पुरस्कारों के साथ पहचाने जाएं।",

    // Testimonials
    "testimonials.title1": "समुदाय का",
    "testimonials.title2": "भरोसा",
    "testimonials.subtitle": "उन छात्रों और मेंटर्स से सुनें जिन्होंने BSPrep के प्रभाव का प्रत्यक्ष अनुभव किया है।",
    "testimonials.list": [
      {
        name: "Aarav Sharma",
        role: "IITM BS Data Science Student",
        quote: "BSPrep ने मेरे असाइनमेंट करने के तरीके को पूरी तरह से बदल दिया। जब विषय कठिन होते हैं तो साथियों का मार्गदर्शन और व्यवस्थित अध्ययन सामग्री जीवन रक्षक होते हैं।",
        avatar: "A"
      },
      {
        name: "Priya Patel",
        role: "BSPrep Mentor",
        quote: "इस प्लेटफॉर्म पर मेंटर बनने से मुझे जूनियर्स को उन चुनौतियों से पार पाने में मदद मिलती है जिनका मैंने सामना किया था। इस समुदाय को वापस देना अविश्वसनीय रूप से संतोषजनक है।",
        avatar: "P"
      },
      {
        name: "Siddharth Verma",
        role: "IITM BS Diploma Student",
        quote: "BSPrep द्वारा प्रदान किए गए मॉक इंटरव्यू और अध्ययन सामग्री ने मुझे अपनी क्वालिफायर परीक्षा में उत्कृष्ट प्रदर्शन करने के लिए आवश्यक बढ़त दी। अत्यधिक अनुशंसित!",
        avatar: "S"
      },
      {
        name: "Kavya Iyer",
        role: "IITM BS Degree Student",
        quote: "मैं ऑनलाइन पढ़ते समय अकेलापन महसूस करती थी, लेकिन BSPrep के समुदाय ने मुझे जुड़ा हुआ महसूस कराया। सहयोगात्मक सीखने का माहौल बेजोड़ है।",
        avatar: "K"
      },
      {
        name: "Rohan Gupta",
        role: "IITM BS Foundation Student",
        quote: "व्यवस्थित रोडमैप ने मुझे अपने पहले सेमेस्टर को आत्मविश्वास के साथ पार करने में मदद की। यह IITM BS यात्रा के लिए सबसे अच्छा साथी है।",
        avatar: "R"
      }
    ],

    // FAQ
    "faq.title1": "सामान्य",
    "faq.title2": "प्रश्न",
    "faq.subtitle": "वह सब कुछ जो आपको जानना आवश्यक है",
    "faq.q1": "मैं कार्यक्रम के लिए कहां आवेदन कर सकता हूं?",
    "faq.q2": "पुरस्कार क्या हैं?",
    "faq.a2": "कार्यक्रम पूरा करने वाले प्रत्येक चयनित एंबेसडर को हमारे प्रायोजकों से एक आधिकारिक प्रस्ताव पत्र और प्रमाण पत्र प्राप्त होंगे। शीर्ष प्रदर्शन करने वाले अतिरिक्त रूप से प्रीमियम स्वैग, विशेष बैज, मुफ्त XYZ डोमेन, InterviewBuddy वाउचर और TruScholar AI एक्सक्लूसिव अनलॉक करेंगे।",
    "faq.q3": "समय सीमा क्या है?",
    "faq.a3": "आवेदन वर्तमान में Unstop पर खुले हैं। सटीक आवेदन समय सीमा के लिए कृपया आधिकारिक Unstop पृष्ठ देखें। एक बार जब आप चुने जाते हैं, तो आपके Bounty कार्यों के लिए विशिष्ट समय सीमा आपके डैशबोर्ड पर स्पष्ट रूप से बताई जाएगी।",
    "faq.q4": "आवेदन करने के लिए कौन पात्र है?",
    "faq.a4": "प्रौद्योगिकी, नेटवर्किंग और सामुदायिक निर्माण के जुनून वाला कोई भी छात्र। किसी पूर्व तकनीकी अनुभव की आवश्यकता नहीं है—बस उत्साह और लगन होनी चाहिए।",
    "faq.q5": "उम्मीदवारों को कैसे शॉर्टलिस्ट किया जाता है?",
    "faq.a5": "शॉर्टलिस्टिंग पूरी तरह से आपके आवेदन पर आधारित है। हम आपके कौशल और समुदाय को बढ़ाने के लिए उत्साह, स्पष्ट संचार और वास्तविक इच्छा की तलाश करते हैं।",

    // CTA
    "cta.title1": "प्रभाव डालने के लिए ",
    "cta.title2": "तैयार हैं?",
    "cta.desc": "BSPrep छात्र एंबेसडर कार्यक्रम में शामिल हों और विशेष पुरस्कार, नेटवर्किंग के अवसर और करियर विकास को अनलॉक करें।",
    "cta.btn": "अभी आवेदन करें",
    "cta.sub": "Unstop प्लेटफॉर्म के माध्यम से",
  },
  ta: {
    // Hero
    "hero.stats.impacted": "செயலில் உள்ள\nமாணவர்கள்",
    "hero.stats.mentors": "நிபுணத்துவ\nவழிகாட்டிகள்",
    "hero.stats.rewards": "பிரீமியம்\nவெகுமதிகள்",
    "hero.textA": "அடுத்த தலைமுறை தொழில்நுட்ப தலைவர்களை உருவாக்குதல்",
    "hero.applyNow": "விண்ணப்பிக்கவும்",
    "hero.applicationsOpen": "விண்ணப்பங்கள் திறக்கப்பட்டுள்ளன",
    "hero.textB": "பிரத்யேக வெகுமதிகள் மற்றும் வாய்ப்புகளைத் திறக்கவும்",
    "hero.headingWords": ["மாணவர்", "தூதர்", "திட்டம்"],

    // About
    "about.pill": "எங்களைப் பற்றி",
    "about.title1": "மாணவர்களால்,",
    "about.title2": "மாணவர்களுக்காக.",
    "about.desc": "ஒரு எளிய சிக்கலைத் தீர்க்க நாங்கள் BSPrep ஐத் தொடங்கினோம்: BS பட்டம் கடினமானது, அதை தனியாக செய்வது இன்னும் கடினம். நாங்கள் முழுக்க முழுக்க மாணவர்களால் நடத்தப்படும், சுதந்திரமான மற்றும் ஒரு விஷயத்தில் கவனம் செலுத்துகிறோம் - நாங்கள் தொடங்கியபோது நாங்கள் விரும்பிய குறிப்புகள், கருவிகள் மற்றும் இரவு நேர ஆய்வுக் குழுக்களை உங்களுக்கு வழங்குவது.",
    "about.btn": "தளத்தை ஆராயுங்கள்",

    // Marquee
    "marquee.words": ["மாணவர் தூதர்", "வளாக தலைவர்", "BSPREP 2026", "தொழில்நுட்ப சமூகம்", "பிரத்யேக வெகுமதிகள்", "தொழில் வளர்ச்சி"],

    // Sponsors
    "sponsors.title": "எங்கள் ஸ்பான்சர்கள்",
    "sponsors.subtitle": "தொழில்துறை தலைவர்களின் ஆதரவுடன்",
    "sponsors.cta": "எங்கள் ஸ்பான்சர்களைப் பார்க்கவும்",

    // HowItWorks
    "process.label": "செயல்முறை",
    "process.title": "இது எப்படி வேலை செய்கிறது",
    "process.step1": "Unstop-ல் விண்ணப்பிக்கவும்",
    "process.step2": "தேர்ந்தெடுக்கப்படுங்கள்",
    "process.step3": "Bounties முடிக்கவும்",
    "process.step4": "லீடர்போர்டில் முன்னிலை பெறுங்கள்",
    "process.step5": "வெகுமதிகளைப் பெறுங்கள்",

    // Timeline
    "timeline.title1": "தூதர்",
    "timeline.title2": "பயணம்",
    "timeline.subtitle": "விண்ணப்பதாரரிலிருந்து எலைட் தொழில்நுட்ப தலைவருக்கான உங்கள் பாதை",
    "timeline.date1": "ஜூலை 15",
    "timeline.step1.title": "விண்ணப்பங்கள் வரவேற்பு",
    "timeline.step1.desc": "Unstop இல் உங்கள் விண்ணப்பத்தை சமர்ப்பிக்கவும். முதல் குழுவிற்கு குறைந்த இடங்களே உள்ளன.",
    "timeline.date2": "ஆகஸ்ட்",
    "timeline.step2.title": "ஷார்ட்லிஸ்டிங் கட்டம்",
    "timeline.step2.desc": "முக்கிய குழுவை உருவாக்க ஆர்வம், உந்துதல் மற்றும் தகுதியின் அடிப்படையில் வேட்பாளர்கள் தேர்ந்தெடுக்கப்படுகிறார்கள்.",
    "timeline.date3": "செப்டம்பர் 10",
    "timeline.step3.title": "ஆன்போர்டிங்",
    "timeline.step3.desc": "அதிகாரப்பூர்வமாக BSPrep மாணவர் தூதர் சமூகத்தில் சேரவும். உங்கள் தனிப்பட்ட அழைப்பு இணைப்பு மற்றும் டாஷ்போர்டு அணுகலைப் பெறுங்கள்.",
    "timeline.date4": "செப்டம்பர் - அக்டோபர்",
    "timeline.step4.title": "Bounty போர்டு",
    "timeline.step4.desc": "சரிபார்க்கப்பட்ட பணிகளை முடிப்பதன் மூலம் புள்ளிகளைப் பெறுங்கள்: தொழில்நுட்ப பிளாக்கிங் முதல் வளாக அமர்வுகளை நடத்துவது வரை.",
    "timeline.date5": "அக்டோபர் 30",
    "timeline.step5.title": "எலைட் சலுகைகள் திறக்கப்பட்டன",
    "timeline.step5.desc": "InterviewBuddy AI மாக் இன்டர்வியூ, பிரீமியம் டெவலப்பர் ஸ்வாக் மற்றும் XYZ டொமைன்கள் போன்ற தொழில் சலுகைகளுக்கு உங்கள் புள்ளிகளைப் பயன்படுத்தவும்.",

    // Features
    "features.title1": "முக்கிய",
    "features.title2": "பொறுப்புகள்",
    "features.desc": "ஒரு மாணவர் தூதராக, உங்கள் முதன்மை நோக்கம் உங்கள் வளாகத்தில் BSPrep சமூகத்தை விரிவுபடுத்துவதாகும். எங்களுக்கும் அடுத்த தலைமுறை தொழில்நுட்பத் தலைவர்களுக்கும் இடையே நீங்கள் ஒரு பாலம்.",
    "features.cta": "வழிகாட்டுதல்களைப் பதிவிறக்கவும்",
    "features.item1.title": "பரிந்துரை இயந்திரம்",
    "features.item1.desc": "உங்கள் தனிப்பட்ட அழைப்பிதழ் இணைப்பைப் பெறுங்கள். உங்கள் நண்பர்களை அழைத்து ஒவ்வொரு பதிவையும் உங்கள் டாஷ்போர்டில் கண்காணிக்கவும்.",
    "features.item2.title": "Bounty பணிகள்",
    "features.item2.desc": "சரிபார்க்கப்பட்ட பணிகளை முடிப்பதன் மூலம் புள்ளிகளைப் பெறுங்கள்: தொழில்நுட்ப பிளாக்கிங் முதல் பிரத்யேக வளாக அமர்வுகளை நடத்துவது வரை.",
    "features.item3.title": "பிரீமியம் வெகுமதிகள்",
    "features.item3.desc": "ரெஸ்யூம் மதிப்புரைகள் மற்றும் மாதிரி நேர்காணல்கள் போன்ற தொழில் சலுகைகளுக்கு உங்கள் புள்ளிகளைப் பயன்படுத்தவும்.",

    // Elite Perks
    "perks.label": "உங்களுக்கு என்ன கிடைக்கும்",
    "perks.title": "எலைட் தூதர் சலுகைகள்",
    "perks.desc": "இது முதல் BSPrep மாணவர் தூதர் திட்டம் என்பதால், முன்னோடியில்லாத தொழில் நன்மைகளை உங்களுக்கு வழங்க தொழில்துறை தலைவர்களுடன் கூட்டு சேர்ந்துள்ளோம்.",
    "perks.sponsored": "ஸ்பான்சர் செய்தவர்கள்:",
    "perks.item1.title": "AI மாக் இன்டர்வியூ",
    "perks.item1.desc": "வெற்றியாளர்களுக்கு அதிக மதிப்புள்ள AI மாக் இன்டர்வியூ கிரெடிட்கள் மற்றும் இரண்டாம் இடத்தைப் பிடித்தவர்களுக்கு 90% தள்ளுபடி வவுச்சர்கள்.",
    "perks.item1.pill": "AI நேர்காணல் தேர்ச்சி",
    "perks.item2.title": "டிஜிட்டல் சான்றுகள் & AI கருவிகள்",
    "perks.item2.desc": "பிளாக்செயின் டிஜிட்டல் சான்றிதழ்கள், ₹15L+ மதிப்புள்ள ஸ்பான்சர்ஷிப் மற்றும் TruScholar AI தொழில் வழிகாட்டி அணுகல்.",
    "perks.item2.pill": "சரிபார்க்கப்பட்ட சான்றுகள்",
    "perks.item3.title": "பிரீமியம் டிஜிட்டல் அடையாளம்",
    "perks.item3.desc": "முதல் 10 தூதர்களுக்கு 1 ஆண்டு இலவச தனிப்பயன் XYZ டொமைன்கள் வழங்கப்படுகின்றன.",
    "perks.item3.pill": "டிஜிட்டல் அடையாளம்",
    "perks.item4.title": "பிரத்யேக ஸ்வாக் கிட்",
    "perks.item4.desc": "டி-ஷர்ட்கள், பிரத்யேக ஸ்டிக்கர்கள் மற்றும் பிரீமியம் குறிப்புகள் உள்ளிட்ட Unstop பரிசுகளைத் திறக்கவும்.",
    "perks.item4.pill": "பிரீமியம் ஸ்வாக்",
    "perks.item5.title": "டெவலப்பர் ஸ்டிக்கர் பேக்குகள்",
    "perks.item5.desc": "எங்கள் சிறந்த தொழில்நுட்ப தூதர்களுக்காக பிரத்யேகமாக உருவாக்கப்பட்ட பிரீமியம் டெவலப்பர் ஸ்டிக்கர்கள்.",
    "perks.item5.pill": "தொழில்நுட்ப வாழ்க்கை முறை",

    // Benefits
    "benefits.label": "மதிப்பெண் மற்றும் வெகுமதிகள்",
    "benefits.title": "லீடர்போர்டு\nமற்றும் வெகுமதிகள்",
    "benefits.desc": "ஒவ்வொரு பரிந்துரையும் கணக்கிடப்படும். லீடர்போர்டு உங்கள் முன்னேற்றத்தை கண்காணிக்கிறது. புள்ளிகளைப் பெறுங்கள், சிறந்த செயல்திறன் கொண்டவர்களுக்கு மட்டுமே ஒதுக்கப்பட்ட சிறப்பு வெகுமதிகளுடன் அங்கீகரிக்கப்படுங்கள்.",

    // Testimonials
    "testimonials.title1": "சமூகத்தின்",
    "testimonials.title2": "நம்பிக்கை",
    "testimonials.subtitle": "BSPrep இன் தாக்கத்தை நேரடியாக அனுபவித்த மாணவர்கள் மற்றும் வழிகாட்டிகளிடமிருந்து கேளுங்கள்.",
    "testimonials.list": [
      {
        name: "Aarav Sharma",
        role: "IITM BS Data Science Student",
        quote: "நான் எனது அசைன்மென்ட்களை அணுகும் முறையை BSPrep முற்றிலும் மாற்றியது. கருத்துக்கள் கடினமாக இருக்கும்போது சக மாணவர்களின் வழிகாட்டுதல் மற்றும் முறையான வளங்கள் பெரிதும் உதவுகின்றன.",
        avatar: "A"
      },
      {
        name: "Priya Patel",
        role: "BSPrep Mentor",
        quote: "இந்த தளத்தில் ஒரு வழிகாட்டியாக இருப்பது, நான் எதிர்கொண்ட சவால்களைத் தாண்டி ஜூனியர்களை வழிநடத்த எனக்கு உதவுகிறது. இந்த சமூகத்திற்கு திருப்பித் தருவது நம்பமுடியாத அளவிற்கு திருப்தி அளிக்கிறது.",
        avatar: "P"
      },
      {
        name: "Siddharth Verma",
        role: "IITM BS Diploma Student",
        quote: "BSPrep வழங்கிய மாதிரி நேர்காணல்கள் மற்றும் ஆய்வுப் பொருட்கள் எனது தகுதித் தேர்வுகளில் சிறந்து விளங்க எனக்குத் தேவையான சரியான விளிம்பைக் கொடுத்தன. மிகவும் பரிந்துரைக்கிறேன்!",
        avatar: "S"
      },
      {
        name: "Kavya Iyer",
        role: "IITM BS Degree Student",
        quote: "ஆன்லைனில் படிக்கும்போது நான் தனிமைப்படுத்தப்பட்டதாக உணர்ந்தேன், ஆனால் BSPrep இன் சமூகம் என்னை இணைக்கப்பட்டதாக உணர வைத்தது. கூட்டு கற்றல் சூழல் இணையற்றது.",
        avatar: "K"
      },
      {
        name: "Rohan Gupta",
        role: "IITM BS Foundation Student",
        quote: "முறையான வழிகாட்டிகள் எனது முதல் செமஸ்டரை நம்பிக்கையுடன் கடக்க உதவியது. IITM BS பயணத்திற்கான சிறந்த துணை இது.",
        avatar: "R"
      }
    ],

    // FAQ
    "faq.title1": "பொதுவான",
    "faq.title2": "கேள்விகள்",
    "faq.subtitle": "நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்",
    "faq.q1": "திட்டத்திற்கு எங்கே விண்ணப்பிக்கலாம்?",
    "faq.q2": "வெகுமதிகள் என்ன?",
    "faq.a2": "திட்டத்தை முடிக்கும் தேர்ந்தெடுக்கப்பட்ட ஒவ்வொரு தூதருக்கும் எங்கள் ஸ்பான்சர்களிடமிருந்து அதிகாரப்பூர்வ கடிதம் மற்றும் சான்றிதழ்கள் வழங்கப்படும். சிறந்த செயல்படுபவர்களுக்கு பிரீமியம் ஸ்வாக், பிரத்யேக பேட்ஜ்கள், இலவச XYZ டொமைன்கள் மற்றும் InterviewBuddy வவுச்சர்கள் கிடைக்கும்.",
    "faq.q3": "கடைசி தேதிகள் என்ன?",
    "faq.a3": "விண்ணப்பங்கள் தற்போது Unstop-ல் திறக்கப்பட்டுள்ளன. விண்ணப்ப காலக்கெடுவுக்கு Unstop பக்கத்தைப் பார்க்கவும். நீங்கள் தேர்ந்தெடுக்கப்பட்டதும், உங்கள் பணிகளுக்கான குறிப்பிட்ட காலக்கெடு உங்கள் டாஷ்போர்டில் தெளிவாகக் கோடிட்டுக் காட்டப்படும்.",
    "faq.q4": "யார் விண்ணப்பிக்க தகுதியானவர்கள்?",
    "faq.a4": "தொழில்நுட்பம் மற்றும் சமூகத்தை வளர்ப்பதில் ஆர்வமுள்ள எந்த மாணவரும் விண்ணப்பிக்கலாம். முன் தொழில்நுட்ப அனுபவம் தேவையில்லை-ஆர்வம் மற்றும் ஊக்கம் மட்டுமே வேண்டும்.",
    "faq.q5": "வேட்பாளர்கள் எவ்வாறு தேர்ந்தெடுக்கப்படுகிறார்கள்?",
    "faq.a5": "உங்கள் விண்ணப்பத்தின் அடிப்படையில் மட்டுமே தேர்வு செய்யப்படுகிறது. உங்கள் திறன்களையும் சமூகத்தையும் வளர்ப்பதற்கான ஆர்வம், தெளிவான தொடர்பு மற்றும் உண்மையான விருப்பத்தை நாங்கள் தேடுகிறோம்.",

    // CTA
    "cta.title1": "தாக்கத்தை ஏற்படுத்த ",
    "cta.title2": "தயாரா?",
    "cta.desc": "BSPrep மாணவர் தூதர் திட்டத்தில் சேர்ந்து, பிரத்யேக வெகுமதிகள், நெட்வொர்க்கிங் வாய்ப்புகள் மற்றும் தொழில் வளர்ச்சியைத் திறக்கவும்.",
    "cta.btn": "இப்போதே விண்ணப்பிக்கவும்",
    "cta.sub": "Unstop தளம் வழியாக",
  },
};
