
function change_jocks(){

  const jocks = ["मधुमक्खियाँ क्यों गुनगुनाती हैं? उन्हें गीत के बोल याद नहीं रहते!",
    "मेरे पास एक कुत्ता है जो मुझे बिना शर्त प्यार देता है, लेकिन मेरे पास एक बिल्ली भी है जो मुझे याद दिलाती है कि मैं इसके लायक नहीं हूँ। यह सब संतुलन के बारे में है।",
    "जब कुत्ते सोने जाते हैं, तो वे सोने से पहले काटने से संबंधित कहानियाँ पढ़ते हैं।",
    "किस उम्र में मेरे कुत्ते को यह बताना उचित होगा कि वह गोद लिया गया है?",
    "कुत्तों को गाड़ी चलाना पसंद नहीं है, क्योंकि उन्हें भौंकने के लिए जगह नहीं मिलती।",
    "पशुओं पर परीक्षण एक भयानक विचार है क्योंकि वे घबरा जाते हैं और गलत उत्तर दे देते हैं।",
    "क्या नूह ने जहाज़ पर दीमकें भी शामिल की थीं?",
    "जब मेंढक की कार खराब हो जाती है तो उसका क्या होता है? वह मेंढक की कार से दूर चली जाती है।",
    "सोते हुए डायनासोर को आप क्या कहते हैं? डायनोसोर।",
    "मुझे यकीन नहीं हो रहा कि मुझे कैलेंडर फैक्ट्री से निकाल दिया गया। मैंने बस एक दिन की छुट्टी ली थी!",
    "पैसा बोलता है। मेरा हमेशा अलविदा कहता है।",
    "अधिकांश लोग यह जानकर हैरान हो जाते हैं कि मैं एक इलेक्ट्रीशियन के रूप में कितना बुरा हूं।",
    "मेरा बॉस सबसे खराब व्यवहार वाले कर्मचारी को नौकरी से निकालने वाला है। मुझे लगता है कि यह काम शायद मैं ही कर सकता हूँ।",
    "मैंने कुछ भी नहीं लेकर शुरुआत की थी और अभी भी मेरे पास इसका अधिकांश हिस्सा है।",
    "मेरी पहली नौकरी संतरे के जूस की फैक्ट्री में काम करने की थी, लेकिन मुझे नौकरी से निकाल दिया गया। मैं ध्यान केंद्रित नहीं कर पा रहा था।",
    "यदि पैसा पेड़ों पर नहीं उगता तो बैंकों की शाखाएं कैसे होती हैं?",
    "जब मेरे बॉस ने मुझसे पूछा कि मूर्ख कौन है, मैं या वह, तो मैंने उनसे कहा कि वे मूर्ख लोगों को नौकरी पर नहीं रखते।",
    "एक दिन मैंने बैंककर्मी से अपना बैलेंस चेक करने को कहा तो उसने मुझे धक्का दे दिया।",
    "मैंने गलती से अपनी पत्नी को चैपस्टिक की जगह ग्लू स्टिक थमा दी। वह अब भी मुझसे बात नहीं कर रही है।",
    "मेरी पत्नी को अभी-अभी पता चला कि मैंने हमारे बिस्तर की जगह ट्रैम्पोलिन रख दिया है। वह बहुत गुस्से में है।",
    "महिलाओं को 35 वर्ष के बाद बच्चे पैदा नहीं करने चाहिए, लेकिन 35 बच्चे पर्याप्त हैं!",
    "मेरा कोई बॉयफ्रेंड नहीं है, लेकिन मैं एक ऐसे लड़के को जानती हूं जो यह सुनकर बहुत गुस्सा होगा।",
    "हिप्पी की पत्नी को आप क्या कहते हैं? मिसिसिपी।",
    "मेरी पत्नी ने मुझसे कहा कि मैं राजहंस का नाटक करना बंद कर दूँ। मुझे अपना पैर पीछे खींचना पड़ा।",
    "हर शादीशुदा व्यक्ति को अपनी गलतियाँ भूल जानी चाहिए। दो लोगों को एक ही बात याद रखने से कोई फ़ायदा नहीं है।",
    "मैंने अपनी दादी को स्पीड डायल पर रखा है। मैं इसे इंस्टाग्राम कहता हूँ।",
    "मैं अपनी अल्पकालिक स्मृति समस्याओं के बारे में डॉक्टर से मिलने गया - सबसे पहले उन्होंने मुझसे अग्रिम भुगतान करवा लिया।",
    "मुझे अभी पता चला है कि मैं रंग-अंधा हूँ। निदान पूरी तरह से बैंगनी रंग से आया।",
    "आपके दिमाग के दो हिस्से हैं, बायां और दायां बाईं तरफ कुछ भी दायां नहीं है और दाईं तरफ कुछ भी बायां नहीं है।",
    "क्या आपने उस आदमी के बारे में सुना है जिसका पूरा बायाँ हिस्सा काट दिया गया था? अब वह बिल्कुल ठीक है।",
    "मुझे ऐसे किसी भी व्यक्ति पर संदेह है जो मुझसे कहता है कि वह हर दिन योग करता है। यह थोड़ा बढ़ा-चढ़ाकर कहा गया दावा है।",
    "मैं शुरू में मस्तिष्क प्रत्यारोपण नहीं कराना चाहता था, लेकिन फिर मैंने अपना विचार बदल दिया।",
    "मैं पहले सोचता था कि मैं अनिर्णायक हूं, लेकिन अब मैं निश्चित नहीं हूं।",
    "मैं पागलपन से ग्रस्त नहीं हूं - मैं इसके हर पल का आनंद लेता हूं।",
    "मुझे नजरिये की समस्या नहीं है। आपको धारणा की समस्या है।",
    "एक पूर्णतावादी व्यक्ति एक बार में गया - जाहिर है, बार पर्याप्त ऊंचा नहीं रखा गया था।",
    "लोग मुझसे कहते हैं कि मैं लोगों को नीचा दिखाता हूँ। ( बहुत करीब झुकता है ) इसका मतलब है कि मैं लोगों से नीची भाषा में बात करता हूँ।",
    "मेरे चिकित्सक का कहना है कि मैं बदला लेने के बारे में सोचता रहता हूँ। हम इस बारे में देखेंगे।",
    "प्रकाश ध्वनि की तुलना में अधिक तेजी से चलता है, यही कारण है कि कुछ लोग मुंह खोलने से पहले ही चमकीले दिखाई देते हैं।",
    "मैं आलसी नहीं हूं, मैं तो बस ऊर्जा बचाने की कोशिश में हूं।",
    "आज एक आदमी ने मेरे दरवाजे पर दस्तक दी और स्थानीय स्विमिंग पूल के लिए एक छोटा सा दान मांगा। मैंने उसे एक गिलास पानी दिया।",
    "RIP उबला हुआ पानी। तुम धुंध बन जाओगे।",
    "शराब एक आदर्श विलायक है: यह विवाह, परिवार और करियर को ख़त्म कर देती है।",
    "क्या आपने उस आदमी के बारे में सुना है जिसके सिर पर सोडा का कैन मारा गया था? उसे चोट नहीं लगी क्योंकि वह सॉफ्ट ड्रिंक था।",
    "धूम्रपान आपको मार देगा... बेकन आपको मार देगा... और फिर भी, बेकन को धूम्रपान करने से यह ठीक हो जाएगा।",
    "RIP उबला हुआ पानी। तुम धुंध बन जाओगे।",
    "शराब एक आदर्श विलायक है: यह विवाह, परिवार और करियर को ख़त्म कर देती है।",
    "क्या आपने उस आदमी के बारे में सुना है जिसके सिर पर सोडा का कैन मारा गया था? उसे चोट नहीं लगी क्योंकि वह सॉफ्ट ड्रिंक था।",
"यह दुखद है कि एक परिवार जंगली कुत्तों जैसी छोटी सी बात से टूट सकता है।- जैक हैंडी",
"दिल का दौरा पड़ने का सबसे बुरा समय चार्ड्स के खेल के दौरान होता है। - डेमेट्री मार्टिन",
"मैं ऐसे क्लब का हिस्सा नहीं बनना चाहता जिसका सदस्य मैं हो। - ग्रूचो मार्क्स",
"क्या मेरी पत्नी सोचती है कि मैं नियंत्रण करने वाला व्यक्ति हूँ? मैंने अभी तक फैसला नहीं किया है  - स्टीवर्ट फ्रांसिस",
"मुझे अभी बहुत कुछ सीखना है। मुझे दूसरे दिन अपने किले के अंदर इसका एहसास हुआ। - ज़ैक गैलिफ़ियानाकिस",
"ईमानदारी सबसे अच्छी नीति हो सकती है, लेकिन यह याद रखना महत्वपूर्ण है कि जाहिर तौर पर, निष्कासन के बाद, बेईमानी दूसरी सबसे अच्छी नीति है। - जॉर्ज कार्लिन",
"मैंने अपने परिवार के वंशवृक्ष को देखा और पाया कि मैं मूर्ख हूँ  — रॉडनी डेंजरफील्ड",
"मैं अपने दोस्त के साथ शतरंज खेल रहा था और उसने कहा, ‘चलो इसे दिलचस्प बनाते हैं’। इसलिए हमने शतरंज खेलना बंद कर दिया।” — मैट किर्शेन",
"बहुमंजिला कार पार्कों में अपराध। यह कई अलग-अलग स्तरों पर गलत है।” — टिम वाइन",
"एक शब्दकोश बहुत बढ़िया है। इसके लिए कोई दूसरा शब्द नहीं है।” — रॉस स्मिथ",
"एक टैंक में दो मछलियाँ। एक कहती है, ‘आप इस चीज़ को कैसे चलाते हैं?’” — पीटर के",
"मैंने एक डॉक्यूमेंट्री देखी कि कैसे जहाजों को एक साथ रखा जाता है। दिलचस्प!” — स्टीवर्ट फ्रांसिस",
"जो लोग ट्रान्स संगीत पसंद करते हैं वे बहुत दृढ़ होते हैं। वे जवाब के लिए टेक्नो नहीं करते।” — जोएल डोमेट",
"क्या ट्रांसफॉर्मर को कार या जीवन बीमा मिलता है?” — रसेल हॉवर्ड",
"मेरे पिता ने इतनी शराब पी ली कि जब उन्होंने जन्मदिन के केक पर फूंक मारी तो उन्होंने मोमबत्तियाँ जला दीं।” — लेस डावसन",
"ठीक है दोस्तों, एक बड़ी मक्खी पुलिस स्टेशन पर हमला कर रही है। मैंने SWAT टीम को बुलाया है! — ग्रेग डेविस",
"मैं आमतौर पर अपनी गर्लफ्रेंड से 12:59 बजे मिलता हूँ क्योंकि मुझे वह आमने-सामने की मुलाकात पसंद है। — टॉम वार्ड",
"मुझे ऐसी महिला पसंद है जिसके कंधे पर सिर हो। मुझे गर्दन से नफरत है।— स्टीव मार्टिन",
"जब तक कोई व्यक्ति अपने कदमों पर ध्यान देने लायक समझदार होता है, तब तक वह कहीं जाने के लिए बहुत बूढ़ा हो चुका होता है। — बिली क्रिस्टल",
"इस बात का सबूत कि हम मौत को नहीं समझते हैं, यह है कि हम मरे हुए लोगों को तकिया देते हैं। — जेरी सीनफील्ड",
"मुझसे वैलेंटाइन डे के बारे में बात मत करो। मेरी उम्र में, दिल का मामला बाईपास है। — जोन रिवर्स",
"छोटी उम्र में बच्चों को नापसंद करना सीखना बाद में जीवन में बहुत सारे खर्च और परेशानी से बचाता है। — एड बर्न",
"ओह, जब मैं शो बिजनेस में एक बच्चा था, मैं गरीब था। मैं अंगूर खाने के लिए पार्टी में जाता था।” — रॉडनी डेंजरफील्ड",
"जिस स्कूल में मैं गया था, उन्होंने एक बच्चे से गुरुत्वाकर्षण के नियम को साबित करने के लिए कहा और उसने शिक्षक को खिड़की से बाहर फेंक दिया।” — रॉडनी डेंजरफील्ड",
"मैंने अपने परिवार के पेड़ को देखा और पाया कि तीन कुत्ते इसका इस्तेमाल कर रहे थे।” — रॉडनी डेंजरफील्ड",
"एक बार मेरा पूरा परिवार लुका-छिपी खेल रहा था। उन्होंने पिट्सबर्ग में मेरी माँ को पाया!” — रॉडनी डेंजरफील्ड",
"मैं सर्जन जनरल से मिला। उन्होंने मुझे सिगरेट ऑफर की।” — रॉडनी डेंजरफील्ड",
"महीने का कर्मचारी एक अच्छा उदाहरण है कि कैसे कोई व्यक्ति एक ही समय में विजेता और हारने वाला दोनों हो सकता है।” — डेमेट्री मार्टिन",
"जब मैं एक लड़का था, तो मैं अपने जुड़वां आकार के बिस्तर पर लेटा रहता था और सोचता था कि मेरा भाई कहाँ है।” — मिच हेडबर्ग",
"मेरा ड्रग टेस्ट नेगेटिव आया। मेरे डीलर को निश्चित रूप से कुछ स्पष्टीकरण देना होगा।” — अज्ञात",
"जब मैं पहली बार अपनी पत्नी से मिला, तो मुझे पता था कि वह एक अच्छी खिलाड़ी है। उसने बड़े-बड़े दस्ताने पहने हुए थे। अलुन कोचरन",
"मेरे चिकित्सक का कहना है कि मुझे बदला लेने की आदत है। हम इस बारे में देखेंगे। - स्टीवर्ट फ्रांसिस",
"भाग को उल्टा न लिखें। यह एक जाल है।",
"मुझे यह विडंबनापूर्ण लगता है कि लाल, सफेद और नीला रंग स्वतंत्रता का प्रतीक हैं, जब तक कि वे आपके पीछे चमकते नहीं हैं।",
"क्या आपका निचला हिस्सा आपके मुंह से निकलने वाली बकवास की मात्रा से ईर्ष्या करता है?",
"कर्मा नामक एक नया रेस्तरां है। कोई मेनू नहीं है। आपको वह मिलता है जिसके आप हकदार हैं।",
"मुझे कई शब्द समझाने के लिए धन्यवाद, इसका बहुत मतलब है।",
"आखिरी चीज जो मैं करना चाहता हूं वह आपको चोट पहुंचाना है, लेकिन यह अभी भी सूची में है।",
"क्या आपने सुना है कि उन्होंने शैतान को गिरफ्तार कर लिया है? हाँ, उन्होंने उसे कब्जे में ले लिया है।",
"मुझे आज दस्ताने की एक नई जोड़ी मिली है, लेकिन वे दोनों बाएं हाथ के हैं, जो एक तरफ तो बढ़िया है, लेकिन दूसरी तरफ, यह बिल्कुल भी सही नहीं है।",

  ]
    
    const randonjock = Math.floor(Math.random() * 50);
    // console.log(jocks[randonjock]);
    
    document.querySelector("#jocks-mod").innerText = ` 🤩🤣 ${jocks[randonjock]} 😭😭 `
    // console.log(jocks.randonjock);
    
    
}


// change_jocks()


const arr = [1,2,3,4,5,6,7,8,9]
console.log(arr[2]);

