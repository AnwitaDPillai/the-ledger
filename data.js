// ═══════════════════════════════════════════════════════════════
//  THE LEDGER — Anwita D Pillai
//  Update this file. Everything else renders from it.
// ═══════════════════════════════════════════════════════════════

const LEDGER = {

  meta: {
    name: "Anwita D Pillai",
    origin: "Kochi, Kerala, India",
    lastUpdated: "2026-09-12"
  },

  // status values:
  //   "win"      — accepted, awarded, published
  //   "pending"  — TBD, awaiting result
  //   "loss"     — rejected
  //   "ghost"    — no response, no info
  //   "older"    — pre-2024 work

  // tier: 1 = major international, 2 = national/selective, 3 = other

  entries: [

    // ─── OLDER WORK (School & National Olympiads, 2017–2024) ────
    { id:"sof_nso_2017", title:"SOF NSO 2017", org:"Science Olympiad Foundation",
      date:"2017-11", status:"win", tier:3, reward:null,
      remark:"School Rank 2",
      lesson:null, milestone:false, tags:["science","olympiad"] },

    { id:"sof_nso_2018", title:"SOF NSO 2018", org:"Science Olympiad Foundation",
      date:"2018-11", status:"win", tier:3, reward:null,
      remark:"School Rank 6",
      lesson:null, milestone:false, tags:["science","olympiad"] },

    { id:"sof_imo_2018", title:"SOF IMO 2018", org:"Science Olympiad Foundation",
      date:"2018-11", status:"win", tier:3, reward:null,
      remark:"School Rank 2",
      lesson:null, milestone:false, tags:["mathematics","olympiad"] },

    { id:"sof_ieo_2018", title:"SOF IEO 2018", org:"Science Olympiad Foundation",
      date:"2018-11", status:"win", tier:3, reward:null,
      remark:"School Rank 4",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"sof_ieo_2019", title:"SOF IEO 2019", org:"Science Olympiad Foundation",
      date:"2019-11", status:"win", tier:3, reward:null,
      remark:"School Rank 3",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"sof_igko_2020", title:"SOF IGKO 2020", org:"Science Olympiad Foundation",
      date:"2020-11", status:"win", tier:3, reward:null,
      remark:"School Rank 3",
      lesson:null, milestone:false, tags:["general knowledge","olympiad"] },

    { id:"sof_nso_2021", title:"SOF NSO 2021", org:"Science Olympiad Foundation",
      date:"2021-11", status:"win", tier:3, reward:null,
      remark:"School Rank 3",
      lesson:null, milestone:false, tags:["science","olympiad"] },

    { id:"sof_ieo_2022", title:"SOF IEO 2022", org:"Science Olympiad Foundation",
      date:"2022-11", status:"win", tier:3, reward:null,
      remark:"School Rank 1",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"sof_ieo_2022_l2", title:"SOF IEO 2022, Second Level", org:"Science Olympiad Foundation",
      date:"2022-12", status:"win", tier:3, reward:null,
      remark:"Zonal Rank 12",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"sof_nso_2022", title:"SOF NSO 2022", org:"Science Olympiad Foundation",
      date:"2022-11", status:"win", tier:3, reward:null,
      remark:"School Rank 8",
      lesson:null, milestone:false, tags:["science","olympiad"] },

    { id:"sof_igko_2022", title:"SOF IGKO 2022", org:"Science Olympiad Foundation",
      date:"2022-11", status:"win", tier:3, reward:null,
      remark:"School Rank 3",
      lesson:null, milestone:false, tags:["general knowledge","olympiad"] },

    { id:"sof_ieo_2023", title:"SOF IEO 2023", org:"Science Olympiad Foundation",
      date:"2023-11", status:"win", tier:3, reward:null,
      remark:"School Rank 1",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"sof_isso_2023", title:"SOF ISSO 2023", org:"Science Olympiad Foundation",
      date:"2023-11", status:"win", tier:3, reward:null,
      remark:"School Rank 1",
      lesson:null, milestone:false, tags:["social studies","olympiad"] },

    { id:"sof_igko_2023", title:"SOF IGKO 2023", org:"Science Olympiad Foundation",
      date:"2023-11", status:"win", tier:3, reward:null,
      remark:"School Rank 3",
      lesson:null, milestone:false, tags:["general knowledge","olympiad"] },

    { id:"sof_ieo_2023_l2", title:"SOF IEO 2023, Second Level", org:"Science Olympiad Foundation",
      date:"2023-12", status:"win", tier:3, reward:null,
      remark:"Zonal Rank 15",
      lesson:null, milestone:false, tags:["english","olympiad"] },

    { id:"intach", title:"INTACH City Heritage Quiz", org:"INTACH",
      date:"2024-10", status:"win", tier:3, reward:null,
      remark:"3rd Place",
      lesson:null, milestone:false, tags:["heritage","quiz"] },

    // ─── 2024 ───────────────────────────────────────────────
    { id:"met", title:"MET Olympiad (150th Anniversary)", org:"India Meteorological Dept",
      date:"2024-11", status:"win", tier:2, reward:"₹2,000",
      remark:"State Rank 2. Official State Representative for Kerala.",
      lesson:null, milestone:false, tags:["science"] },

    { id:"icai", title:"ICAI Commerce Olympiad", org:"Institute of Chartered Accountants",
      date:"2024-12", status:"win", tier:2, reward:"₹1,000",
      remark:"National Rank 13",
      lesson:null, milestone:false, tags:["commerce"] },

    { id:"vvm", title:"VVM 2024", org:"Vidyarthi Vigyan Manthan",
      date:"2024-12", status:"win", tier:3, reward:null,
      remark:"State Level Camp",
      lesson:null, milestone:false, tags:["science"] },

    // ─── 2025 ───────────────────────────────────────────────
    { id:"veerbaal", title:"Veer Baal Diwas Poetry", org:"MyGov",
      date:"2025-01", status:"win", tier:3, reward:"₹1,000",
      remark:"National Rank 13",
      lesson:null, milestone:false, tags:["poetry"] },

    { id:"sapno", title:"Moonfall", org:"Sapno Ki Udaan, Ministry of Education",
      date:"2025-01", status:"win", tier:3, reward:null,
      remark:"Published, 1st Edition",
      lesson:null, milestone:false, tags:["essay","publication"] },

    { id:"icarcift", title:"ICAR-CIFT Essay Contest", org:"ICAR-CIFT",
      date:"2025-02", status:"win", tier:3, reward:null,
      remark:"1st Place, 68th Foundation Day",
      lesson:null, milestone:false, tags:["science","essay"] },

    { id:"financial", title:"Financial Literacy Essay", org:"Mutual Funds Sahi Hai",
      date:"2025-02", status:"win", tier:3, reward:null,
      remark:"Consolation",
      lesson:null, milestone:false, tags:["essay","finance"] },

    { id:"marine", title:"Marine Plastic Mitigation Proposal", org:"Ocean Society of India",
      date:"2025-03", status:"win", tier:3, reward:"₹2,000",
      remark:"3rd Place. Presented at CSIR-CUSAT.",
      lesson:null, milestone:false, tags:["environment"] },

    { id:"heartful", title:"Heartfulness Essay Contest", org:"Heartfulness",
      date:"2025-03", status:"win", tier:3, reward:null,
      remark:"Honourable Mention",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"minds", title:"Minds Underground Politics Essay", org:"Minds Underground",
      date:"2025-03", status:"loss", tier:2, reward:null,
      remark:"'The Alpine Zone' — too stylistically ambitious.",
      lesson:"Revised it. It was later shortlisted for John Locke.",
      milestone:true, tags:["politics","essay"] },

    { id:"ejca", title:"EJCA Haiku Competition", org:"English Japanese Communication Assoc.",
      date:"2025-04", status:"win", tier:3, reward:"$30",
      remark:"First Place",
      lesson:null, milestone:false, tags:["poetry","haiku"] },

    { id:"fountain", title:"The Fountain Magazine Essay Competition", org:"Fountain",
      date:"2025-04", status:"win", tier:3, reward:null,
      remark:"Top Ten",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"worldhist", title:"World Historian Student Essay", org:"World History Association",
      date:"2025-04", status:"loss", tier:2, reward:null,
      remark:"Rejected 2025 & 2026.",
      lesson:"This rejection birthed my book manuscript.",
      milestone:true, tags:["history","essay"] },

    { id:"jasna", title:"JASNA Essay Contest 2025", org:"JASNA",
      date:"2025-05", status:"loss", tier:3, reward:null,
      remark:"Fit issue — too niche.",
      lesson:null, milestone:false, tags:["essay","literature"] },

    { id:"waterman", title:"Waterman Fund Essay Contest", org:"Waterman Fund",
      date:"2025-05", status:"win", tier:3, reward:null,
      remark:"Shortlisted Finalist, Emerging Writers",
      lesson:null, milestone:false, tags:["essay","environment"] },

    { id:"nyt", title:"Growing Up With AI", org:"The New York Times",
      date:"2025-06", status:"win", tier:1, reward:null,
      remark:"1 of 35 winners from 3,000+ entries",
      lesson:null, milestone:true, tags:["essay","AI"] },

    { id:"perse", title:"Perse School Aristotelian Award", org:"Perse School Cambridge",
      date:"2025-06", status:"win", tier:3, reward:"£20",
      remark:"Highly Commended",
      lesson:null, milestone:false, tags:["essay","philosophy"] },

    { id:"yogaday", title:"International Day of Yoga", org:"MyGov",
      date:"2025-06", status:"loss", tier:3, reward:null,
      remark:"Bias?",
      lesson:"Not every loss is about merit.",
      milestone:false, tags:["essay"] },

    { id:"korea", title:"Korea Centre Essay Contest", org:"Korea Centre",
      date:"2025-07", status:"win", tier:1, reward:"₹15,000",
      remark:"National Rank 1, High School Division",
      lesson:null, milestone:true, tags:["essay","geopolitics"] },

    { id:"oxford", title:"Oxford Scholastica Essay", org:"Oxford Scholastica",
      date:"2025-07", status:"win", tier:3, reward:null,
      remark:"Shortlisted",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"berkeley", title:"Berkeley Economic Review Essay Contest", org:"UC Berkeley",
      date:"2025-07", status:"loss", tier:2, reward:null,
      remark:"Almost won.",
      lesson:"Almost is a real category. It means you were close.",
      milestone:true, tags:["economics","essay"] },

    { id:"queens", title:"Queen's Commonwealth Essay Competition", org:"RCS",
      date:"2025-08", status:"win", tier:2, reward:null,
      remark:"Silver Award, 2025. 2026 result pending.",
      lesson:null, milestone:false, tags:["essay","international"] },

    { id:"jli_2025", title:"John Locke Global Essay Prize", org:"John Locke Institute",
      date:"2025-09", status:"win", tier:1, reward:null,
      remark:"High Commendation",
      lesson:"Clarity over stylistic ambition. The judges read dozens of essays.",
      milestone:true, tags:["essay","philosophy"] },

    { id:"jli", title:"John Locke Global Essay Prize", org:"John Locke Institute",
      date:"2026-09", status:"pending", tier:1, reward:null,
      remark:"Top echelon of 100,000+ entries, likely First/Second/Third or VHC.",
      lesson:null,
      milestone:true, tags:["essay","philosophy"] },

    { id:"miq", title:"MIQ Quiz", org:"MIQ",
      date:"2025-09", status:"win", tier:3, reward:null,
      remark:"Zonal Round",
      lesson:null, milestone:false, tags:["quiz"] },

    { id:"kusamakura", title:"30th International Kusamakura Haiku", org:"Kusamakura",
      date:"2025-09", status:"ghost", tier:3, reward:null,
      remark:"No updates received.",
      lesson:null, milestone:false, tags:["poetry","haiku"] },

    { id:"foyle", title:"Foyle Young Poets of the Year", org:"The Poetry Society",
      date:"2025-10", status:"win", tier:1, reward:null,
      remark:"Top 85 of 15,000+ entries. Commended.",
      lesson:null, milestone:true, tags:["poetry"] },

    { id:"coconut", title:"Coconut Board", org:"Coconut Development Board",
      date:"2025-10", status:"ghost", tier:3, reward:null,
      remark:"No updates received.",
      lesson:null, milestone:false, tags:["science"] },

    { id:"sbi", title:"SBI Contest", org:"State Bank of India",
      date:"2025-11", status:"win", tier:3, reward:null,
      remark:"Shortlisted + invited to Bank Day",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"lucus", title:"JLI Lucus Luminum Program", org:"John Locke Institute",
      date:"2025-11", status:"win", tier:2, reward:null,
      remark:"Invited. Could not attend due to cost.",
      lesson:null, milestone:false, tags:["program"] },

    // ─── 2026 ───────────────────────────────────────────────
    { id:"suburban", title:"False Positive", org:"The Suburban Review",
      date:"2026-03", status:"win", tier:1, reward:"$450",
      remark:"First print publication. Issue #40.",
      lesson:null, milestone:true, tags:["fiction","publication"] },

    { id:"stanvent", title:"Stanford Venture Fellowship", org:"Stanford",
      date:"2026-03", status:"ghost", tier:2, reward:null,
      remark:"No response.",
      lesson:null, milestone:false, tags:["fellowship"] },

    { id:"campridge", title:"Cambridge Re:think Essay", org:"Cambridge Re:think",
      date:"2026-04", status:"loss", tier:3, reward:null,
      remark:"Bad organisation (them).",
      lesson:"Some rejections are not yours to carry.",
      milestone:false, tags:["essay"] },

    { id:"leaf", title:"Leaf Summer Course", org:"Leaf",
      date:"2026-04", status:"loss", tier:3, reward:null,
      remark:"Rejected due to surprise math test.",
      lesson:null, milestone:false, tags:["course"] },

    { id:"girlswhocode", title:"Girls Who Code", org:"Girls Who Code",
      date:"2026-04", status:"win", tier:3, reward:null,
      remark:"Accepted on second application.",
      lesson:"Reapplying is not failure.",
      milestone:false, tags:["code"] },

    { id:"kode", title:"Kode with Klossy", org:"Kode with Klossy",
      date:"2026-05", status:"win", tier:3, reward:null,
      remark:"Web development camp. HTML, CSS, JS.",
      lesson:null, milestone:false, tags:["code"] },

    { id:"harvardsri", title:"Harvard SRI", org:"Harvard",
      date:"2026-05", status:"loss", tier:1, reward:null,
      remark:"Waitlisted.",
      lesson:null, milestone:false, tags:["research"] },

    { id:"yelstudent", title:"YEL Student Scholars Contest", org:"Youth Economy Lab",
      date:"2026-05", status:"loss", tier:3, reward:null,
      remark:"Didn't advance to finals.",
      lesson:null, milestone:false, tags:["economics"] },

    { id:"craft", title:"C.R.A.F.T. Research Scholar", org:"Art MEDified, UCLA-affiliated",
      date:"2026-06", status:"win", tier:2, reward:null,
      remark:"Content Analysis Track. 83.4% inter-coder reliability.",
      lesson:null, milestone:false, tags:["research"] },

    { id:"molecular", title:"Mini-Fellowship on Molecular Imaging", org:"Stanford Radiology",
      date:"2026-06", status:"win", tier:1, reward:null,
      remark:"Selected as 1 of ~35 presenters from ~200.",
      lesson:null, milestone:false, tags:["research","Stanford"] },

    { id:"scimi", title:"sci-MI Neuroscience", org:"sci-MI",
      date:"2026-06", status:"win", tier:3, reward:null,
      remark:"Student Researcher, Neuroscience Division.",
      lesson:null, milestone:false, tags:["neuroscience"] },

    { id:"ifa", title:"IFA Arts Research Internship", org:"India Foundation for the Arts",
      date:"2026-06", status:"loss", tier:3, reward:null,
      remark:"Poor fit.",
      lesson:null, milestone:false, tags:["arts","internship"] },

    { id:"trip", title:"TRIP Think Essay 2026", org:"TRIP",
      date:"2026-06", status:"loss", tier:3, reward:null,
      remark:"Rejected 2025, 2026. Fit issue.",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"spinwip", title:"SPINWIP 2026", org:"Stanford Physics",
      date:"2026-06", status:"loss", tier:2, reward:null,
      remark:"Fit issue.",
      lesson:null, milestone:false, tags:["physics"] },

    { id:"pcmag", title:"PCMag Editorial Internship", org:"Ziff Davis",
      date:"2026-06", status:"loss", tier:2, reward:null,
      remark:"Low experience.",
      lesson:null, milestone:false, tags:["journalism"] },

    { id:"igem", title:"iGEM Bioengineering Research Scholar", org:"Stanford SiBRP",
      date:"2026-07", status:"win", tier:1, reward:null,
      remark:"Waitlisted, then accepted. 4.5% acceptance rate.",
      lesson:"The waitlist is not a verdict.",
      milestone:true, tags:["research","Stanford","bio"] },

    { id:"girlsimpact", title:"Girls With Impact", org:"Girls With Impact",
      date:"2026-07", status:"win", tier:3, reward:null,
      remark:"Entrepreneurship & Business Leadership Scholar.",
      lesson:null, milestone:false, tags:["leadership"] },

    { id:"paradigm", title:"Paradigm Fellowship 2026", org:"Paradigm",
      date:"2026-07", status:"loss", tier:1, reward:null,
      remark:"Major fellowship.",
      lesson:"Some doors close to teach you where the hinges are.",
      milestone:false, tags:["fellowship"] },

    { id:"nyclimate", title:"Climate Tech Fellowship", org:"The New York Climate Exchange",
      date:"2026-07", status:"loss", tier:2, reward:null,
      remark:"Not relevant to NYC proposal.",
      lesson:null, milestone:false, tags:["climate"] },

    { id:"csrx", title:"CSR-x", org:"CSR-x",
      date:"2026-07", status:"loss", tier:3, reward:null,
      remark:"Poor fit.",
      lesson:null, milestone:false, tags:["program"] },

    { id:"srcc", title:"SRCC Finance Research Fellowship", org:"Shri Ram College of Commerce",
      date:"2026-08", status:"win", tier:1, reward:null,
      remark:"Selected from 1,700+ applicants (8.2%).",
      lesson:"Translate complexity on the spot. They want to see you think.",
      milestone:true, tags:["research","finance"] },

    { id:"nyas", title:"The Junior Academy", org:"New York Academy of Sciences",
      date:"2026-08", status:"win", tier:1, reward:null,
      remark:"<10% acceptance. Global STEM leaders.",
      lesson:null, milestone:true, tags:["STEM"] },

    { id:"neurojclub", title:"Neuroscience Journal Club Scholar", org:"Stanford",
      date:"2026-08", status:"win", tier:2, reward:null,
      remark:"Yearlong monthly seminar with Stanford faculty.",
      lesson:null, milestone:false, tags:["research","Stanford"] },

    { id:"smithsonian", title:"Smithsonian CFCH Internship", org:"Smithsonian Institution",
      date:"2026-08", status:"pending", tier:1, reward:null,
      remark:"Rolling application. No positions open yet.",
      lesson:null, milestone:false, tags:["internship","heritage"] },

    { id:"cht", title:"Emerging Voices in AI and Society", org:"Center for Humane Technology",
      date:"2026-08", status:"pending", tier:1, reward:"$30,000",
      remark:"$30K stipend + public platform.",
      lesson:null, milestone:false, tags:["AI","fellowship"] },

    { id:"harvardmicro", title:"Junior Fellow", org:"Harvard Undergraduate Microbiology Society",
      date:"2026-08", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["research"] },

    { id:"hgwells", title:"HG Wells Short Story Competition", org:"HG Wells",
      date:"2026-08", status:"pending", tier:3, reward:null,
      remark:"Story submitted.",
      lesson:null, milestone:false, tags:["fiction"] },

    { id:"aialign", title:"AI Alignment Foundation Grants", org:"AI Alignment Foundation",
      date:"2026-08", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["AI"] },

    { id:"openai", title:"OpenAI Economic Research Exchange", org:"OpenAI",
      date:"2026-08", status:"loss", tier:1, reward:"$25,000",
      remark:"Competed with PhD-level applicants.",
      lesson:"You can do PhD-level work. You just need the room.",
      milestone:true, tags:["research","AI"] },

    { id:"yale", title:"Yale Review of International Studies", org:"Yale",
      date:"2026-08", status:"loss", tier:2, reward:null,
      remark:"Poor fit.",
      lesson:null, milestone:false, tags:["essay","IR"] },

    { id:"columbiapol", title:"Columbia Political Review HS Essay", org:"Columbia",
      date:"2026-08", status:"loss", tier:2, reward:null,
      remark:"Fit issue — now a research paper.",
      lesson:null, milestone:false, tags:["essay","politics"] },

    { id:"columbialaw", title:"Columbia Undergraduate Law Review", org:"Columbia",
      date:"2026-08", status:"loss", tier:2, reward:null,
      remark:"Fit issue.",
      lesson:null, milestone:false, tags:["essay","law"] },

    { id:"aws", title:"AWS She Builds Mentorship", org:"Amazon Web Services",
      date:"2026-08", status:"loss", tier:2, reward:null,
      remark:"Rejected 21 August.",
      lesson:null, milestone:false, tags:["mentorship"] },

    { id:"moonshot", title:"Moonshot Awards", org:"Moonshot",
      date:"2026-08", status:"loss", tier:1, reward:null,
      remark:"Jargonaut pitch. Slide deck + 2-min video.",
      lesson:"The pitch was real. The room wasn't ready yet.",
      milestone:true, tags:["pitch","AI"] },

    { id:"bmj", title:"Staircase to Healing", org:"BMJ Medical Humanities",
      date:"2026-08", status:"loss", tier:1, reward:null,
      remark:"Manuscript medhum-2026-014286. Fit issue.",
      lesson:"It will find another home.",
      milestone:false, tags:["medical humanities"] },

    { id:"lough", title:"Museums and AI Cultural Heritage", org:"Loughborough University",
      date:"2026-08", status:"loss", tier:2, reward:null,
      remark:"Competing with PhDs.",
      lesson:null, milestone:false, tags:["heritage","AI"] },

    { id:"wergle", title:"Wergle Flomp Humour Poetry", org:"Winning Writers",
      date:"2026-08", status:"loss", tier:3, reward:null,
      remark:"Not good enough.",
      lesson:null, milestone:false, tags:["poetry","humour"] },

    { id:"decolonial", title:"Decolonial Thoughts", org:"Decolonial Thoughts",
      date:"2026-08", status:"loss", tier:3, reward:null,
      remark:"Poor fit.",
      lesson:null, milestone:false, tags:["essay"] },

    { id:"viksit", title:"Role of AI in Viksit Bharat", org:"Government of India",
      date:"2026-08", status:"loss", tier:3, reward:null,
      remark:"Poor fit.",
      lesson:null, milestone:false, tags:["essay","AI"] },

    { id:"yelext", title:"YEL External Relations", org:"Youth Economy Lab",
      date:"2026-08", status:"loss", tier:3, reward:null,
      remark:"Low experience.",
      lesson:null, milestone:false, tags:["role"] },

    { id:"foyleanth", title:"Foyle Young Poets Anthology", org:"The Poetry Society",
      date:"2026-09", status:"win", tier:2, reward:null,
      remark:"Poem 'Marginalia' published in anthology.",
      lesson:null, milestone:false, tags:["poetry","publication"] },

    { id:"rashtriya", title:"Rashtriya Bal Puraskar", org:"Government of India",
      date:"2026-09", status:"pending", tier:1, reward:null,
      remark:"National award.",
      lesson:null, milestone:false, tags:["award"] },

    { id:"marshall", title:"Marshall Essay Competition 2026", org:"Marshall Society",
      date:"2026-09", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["essay","economics"] },

    { id:"kelley", title:"Kelley Women's Leadership Institute", org:"Indiana University",
      date:"2026-09", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["leadership"] },

    { id:"fxb", title:"FXB Climate Advocates Program", org:"FXB",
      date:"2026-09", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["climate"] },

    { id:"arcadia", title:"Impact AI Governance Taskforce", org:"Arcadia",
      date:"2026-09", status:"pending", tier:2, reward:null,
      remark:"TBD.",
      lesson:null, milestone:false, tags:["AI","governance"] },

    { id:"igemta", title:"iGEM SiBRP TA Application 2027", org:"Stanford",
      date:"2026-09", status:"pending", tier:1, reward:null,
      remark:"Teaching assistant application.",
      lesson:null, milestone:false, tags:["Stanford","teaching"] },

    { id:"pbs", title:"PBS News Student Reporting Labs", org:"PBS",
      date:"2026-09", status:"pending", tier:2, reward:"$100",
      remark:"Likely U.S.-only. Applied anyway.",
      lesson:null, milestone:false, tags:["journalism"] },

    { id:"chillsubs", title:"Chill Subs Lit Mag Incubator", org:"Chill Subs & CLMP",
      date:"2026-09", status:"pending", tier:2, reward:"$1,000",
      remark:"For Aksharam.",
      lesson:null, milestone:false, tags:["litmag","Aksharam"] },

    { id:"yeljournal", title:"YEL Journal Intern", org:"Youth Economy Lab",
      date:"2026-09", status:"pending", tier:3, reward:null,
      remark:"Correspondent.",
      lesson:null, milestone:false, tags:["journalism","economics"] },

    { id:"bowseat", title:"True Blue Fellowship", org:"Bow Seat",
      date:"2026-11", status:"pending", tier:3, reward:null,
      remark:"Due early November.",
      lesson:null, milestone:false, tags:["climate","arts"] },

    { id:"iyna", title:"Youth Neuroscience Summer Course", org:"IYNA",
      date:"2026-06", status:"win", tier:3, reward:null,
      remark:"Participant Track.",
      lesson:null, milestone:false, tags:["neuroscience"] }

  ]
};