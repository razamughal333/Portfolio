/*
  script.js — Raza Ahmed Portfolio
  ----------------------------------
  - Theme toggle (dark / light)
  - Side nav (3-dot menu)
  - Language switcher (en, ur, fr, de, es)
  - Typing effect (hero section)
  - Scroll reveal animation
  - Back to top button
  - Like / heart button
  - Contact form (EmailJS)
  - AI Chatbot (Google Gemini)
  - GitHub repos loader (projects.html)
*/

/* ==============================================
   CHATBOT CONFIG
   - API key is domain-restricted via Google Cloud Console
     (only works on razamughal333.github.io)
   - Rate limited: 3 second cooldown per message
================================================ */

/*
  AI Portfolio Chatbot
  --------------------
  - Built using Google Gemini 1.5 Flash API
  - API key restricted to this domain only (razamughal333.github.io)
    via Google Cloud Console HTTP referrer restrictions
  - Rate limited to prevent spam (3 second cooldown per message)
  - Custom system prompt trained to answer questions about Raza Ahmed
*/

var GEMINI_KEY = "AIzaSyDqB1KuYZKLEvFIFxdVDThSeP99uRbBdhc";
var GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
  GEMINI_KEY;

// This tells the AI who Raza is and how to respond
var BOT_PROMPT =
  "You are an AI assistant on Raza Ahmed's personal portfolio website. Answer questions from recruiters and visitors about Raza in a friendly, professional, and concise way.\n\nAbout Raza:\n- Full name: Raza Ahmed\n- Computer Science graduate (BSc) from Institute of Space Technology, Islamabad — graduated 2024\n- Based in Rawalpindi / Islamabad, Pakistan\n- Available for both remote and on-site work\n- Skills: HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git, GitHub, Figma\n- Independent Commodity Trader for 18+ months\n- IELTS Academic band score: 6.5 (British Council, September 2024)\n- Soft Skills Training — 23-hour certified program (OEC & ICMPD, December 2025)\n- Languages: Urdu (native), English (professional proficiency)\n\nProjects:\n- Personal Portfolio: razamughal333.github.io/Portfolio\n- Rang Mahal (2024): Full-stack event booking platform — Next.js, Tailwind, MongoDB\n- Business Landing Page: razamughalandco.netlify.app\n- Gaming Store: razagamingstore.netlify.app\n\nContact:\n- Email: razahmedmughal@gmail.com\n- Phone: +92 336 2236669\n- GitHub: github.com/razamughal333\n- LinkedIn: linkedin.com/in/raza-ahmed333\n\nHow to respond:\n- Keep answers short (2-4 sentences max)\n- Be warm, confident, and professional\n- If you don't know something, say 'You can reach Raza directly via LinkedIn or email!'\n- Never make up skills or experience Raza doesn't have\n- If asked off-topic questions, redirect: 'I'm here to answer questions about Raza!'";

/* ==============================================
   TRANSLATIONS
   Add a new key-value pair to translate any text
   Keys match data-i18n attributes in the HTML
================================================ */

var translations = {
  en: {
    /* Navigation */
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_svc: "Services",
    nav_contact: "Contact",

    /* Hero */
    hero_chip: "Available for Work",
    hero_tag: "CS Graduate \u2022 Web Developer \u2022 Commodity Trader",
    btn_hire: "Hire Me",
    btn_dl: "Download CV",
    btn_view: "View CV",
    scroll_down: "Scroll",

    /* About (main page) */
    about_title: "About Me",
    about_p1:
      "Computer Science graduate, Frontend Developer with experience in full-stack web applications with the MERN stack. I've spent 18+ months as an independent commodity trader, sharpening my analytical thinking and discipline.",
    about_p2:
      "My mix of software development, trading, and business exposure makes me a great fit for fintech or proptech roles. I'm passionate about clean code and great user experience.",
    about_more: "Know More",
    stat_projects: "Live Projects",
    stat_months_trade: "Months Trading",
    stat_grad: "BSc Graduate",
    stat_tech: "Modern Tech Skills",

    /* Skills */
    skills_title: "Skills & Tools",

    /* Experience */
    exp_title: "Experience",
    exp1_title: "Independent Commodity Trader",
    exp1_org: "Self-Directed",
    exp1_li1:
      "Managing a personal trading account for 18+ months with consistent technical analysis",
    exp1_li2: "Manage portfolios for select clients",
    exp1_li3:
      "Deep expertise in market psychology, global market dynamics & risk-reward strategies",

    /* Projects */
    proj_title: "Projects",
    proj1_title: "Personal Portfolio",
    proj1_desc:
      "Responsive portfolio with AI chatbot, multilingual support & GitHub API integration.",
    proj2_title: "Rang Mahal",
    proj2_desc:
      "Full-stack event booking & management platform. Led frontend, responsive design & MongoDB architecture.",
    proj3_title: "Business Landing Page",
    proj3_desc:
      "Modern business landing page with clean animations, call-to-action sections & responsive layout.",
    proj4_title: "Gaming Store",
    proj4_desc:
      "Gaming store landing page with product showcase, responsive grid layout, and interactive UI elements.",
    proj_soon: "More Coming Soon",
    proj_soon_p: "Next project is in the works. Watch this space!",
    btn_all_proj: "View All Projects",
    link_live: "Live",
    link_code: "Code",

    /* Services */
    svc_title: "Services",
    svc1_title: "Web Development",
    svc1_desc:
      "End-to-end development using the MERN stack. From concept to deployment — fast, functional & scalable.",
    svc2_title: "Frontend Development",
    svc2_desc:
      "Pixel-perfect interfaces with HTML, Tailwind CSS, JS & React. Clean code, great performance, smooth UX.",
    svc3_title: "Responsive UI/UX",
    svc3_desc:
      "Designs that shine on every device — mobile, tablet, desktop. Built with accessibility in mind.",

    /* Contact */
    contact_title: "Contact Me",
    contact_intro:
      "Available for remote & on-site work. Let's build something great together.",
    fl_name: "Your Name",
    fl_email: "Your Email",
    fl_msg: "Message",
    btn_send: "Send Message",

    /* Like section */
    like_text: "Enjoyed my portfolio? Leave a like!",

    /* Footer */
    footer_rights: "All Rights Reserved",

    /* Chatbot */
    chat_name: "Raza's Assistant",
    chat_hi:
      "Hi! I'm Raza's AI assistant. Ask me anything about his skills, projects, or background!",
    chat_ph: "Ask about Raza...",
    chat_note: "\uD83D\uDD12 Powered by Google Gemini AI & domain-secured.",

    /* About page specific */
    back_home: "Back to Home",
    about_page_name: "Raza",
    about_page_sub: "Background, education, and everything in between.",
    af_profile: "Profile",
    af_profile_p1:
      "Computer Science graduate with hands-on experience in frontend web development. Skilled in building responsive web applications using HTML, Tailwind CSS, JavaScript, and React.",
    af_profile_p2:
      "Disciplined, with a strong understanding of market psychology. A dedicated and fast learner eager to contribute to a results-driven team and grow within the tech industry.",
    af_based: "Based in",
    af_avail: "Available for both",
    af_and: "and",
    af_opps: "opportunities.",
    af_skills: "Technical Skills",
    af_edu: "Education",
    edu1_title: "Bachelor of Science in Computer Science",
    edu1_sub:
      "Institute of Space Technology, Islamabad \u2022 2020 \u2013 2024",
    edu2_title: "Intermediate \u2014 Pre-Engineering (FSc)",
    edu2_sub:
      "Milestone College and Academy, Rawalpindi \u2022 2018 \u2013 2020",
    edu3_title: "Matriculation \u2014 Pre-Medical (SSC)",
    edu3_sub: "Saint Mary's Academy, Rawalpindi \u2022 2016 \u2013 2018",
    af_certs: "Certifications",
    cert1_title: "IELTS \u2014 Academic",
    cert1_sub:
      "Overall Band Score: 6.5 \u2022 British Council \u2022 September 2024",
    cert2_title: "Soft Skills Training \u2014 23-Hour Certified Program",
    cert2_sub:
      "OEC & ICMPD (International Centre for Migration Policy Development) \u2022 December 2025",
    af_langs: "Languages",
    lang_urdu: "Urdu",
    lang_urdu_level: "Native",
    lang_eng: "English",
    lang_eng_level: "Professional Proficiency (IELTS 6.5)",
    af_interests: "Interests",
    int1: "Web development & open-source contribution",
    int2: "Global financial markets & commodity trading",
    int3: "UI/UX design & creative coding",
    int4: "Tech industry trends — fintech, proptech, AI",

    /* Projects page specific */
    proj_page_title: "All",
    proj_page_word: "Projects",
    proj_page_sub:
      "Featured work + all public GitHub repositories — auto-updated via GitHub API.",
    proj_handpicked: "Handpicked",
    proj_featured: "Featured Projects",
    proj_gh_label: "GitHub Repos",
    proj_gh_title: "All Public Repositories",
    proj_gh_sub: "Auto-fetched from the GitHub API — always up to date.",
    proj_loading: "Loading repositories from GitHub...",
  },

  /* ---- URDU (RTL) ---- */
  ur: {
    nav_home: "\u06C1\u0648\u0645",
    nav_about: "\u062A\u0639\u0627\u0631\u0641",
    nav_skills: "\u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA",
    nav_exp: "\u062A\u062C\u0631\u0628\u06C1",
    nav_svc: "\u062E\u062F\u0645\u0627\u062A",
    nav_contact: "\u0631\u0627\u0628\u0637\u06C1",
    hero_chip:
      "\u06A9\u0627\u0645 \u06A9\u06D2 \u0644\u06CC\u06D2 \u062F\u0633\u062A\u06CC\u0627\u0628",
    hero_tag:
      "\u0633\u06CC \u0627\u06CC \u0627\u06CC\u0633 \u06AF\u0631\u06CC\u062C\u0648\u06CC\u0679 \u2022 \u0648\u06CC\u0628 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0631 \u2022 \u0679\u0631\u06CC\u0688\u0631",
    btn_hire: "\u0645\u0644\u0627\u0632\u0645\u062A \u062F\u06CC\u06BA",
    btn_dl:
      "\u0633\u06CC \u0648\u06CC \u0688\u0627\u0624\u0646\u0644\u0648\u0688",
    btn_view: "\u0633\u06CC \u0648\u06CC \u062F\u06CC\u06A9\u06BE\u06CC\u06BA",
    scroll_down: "\u0646\u06CC\u0686\u06D2",
    about_title: "\u062A\u0639\u0627\u0631\u0641",
    about_p1:
      "\u0645\u06CC\u06BA IST \u0627\u0633\u0644\u0627\u0645 \u0622\u0628\u0627\u062F \u0633\u06D2 \u06A9\u0645\u067E\u06CC\u0648\u0679\u0631 \u0633\u0627\u0626\u0646\u0633 \u06AF\u0631\u06CC\u062C\u0648\u06CC\u0679 \u06C1\u0648\u06BA\u060C MERN \u0627\u0633\u0679\u06CC\u06A9 \u067E\u0631 \u0641\u0644 \u0627\u0633\u0679\u06CC\u06A9 \u0648\u06CC\u0628 \u0627\u06CC\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0628\u0646\u0627 \u0631\u06C1\u0627 \u06C1\u0648\u06BA\u06D4",
    about_p2:
      "\u0645\u06CC\u0631\u0627 \u062A\u062C\u0631\u0628\u06C1 \u0633\u0627\u0641\u0679\u0648\u06CC\u0626\u0631 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679\u060C \u0679\u0631\u06CC\u0688\u0646\u06AF \u0627\u0648\u0631 \u06A9\u0627\u0631\u0648\u0628\u0627\u0631 \u0645\u06CC\u06BA \u06C1\u06D2\u06D4",
    about_more: "\u0645\u0632\u06CC\u062F \u062C\u0627\u0646\u06CC\u06BA",
    stat_projects:
      "\u0644\u0627\u0626\u06CC\u0648 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633",
    stat_months_trade:
      "\u0645\u0627\u06C1 \u0679\u0631\u06CC\u0688\u0646\u06AF",
    stat_grad: "\u0628\u06CC \u0627\u06CC\u0633 \u0633\u06CC",
    stat_tech:
      "\u062C\u062F\u06CC\u062F \u062A\u06A9\u0646\u06CC\u06A9\u06CC \u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA",
    skills_title:
      "\u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA \u0627\u0648\u0631 \u0679\u0648\u0644\u0632",
    exp_title: "\u062A\u062C\u0631\u0628\u06C1",
    exp1_title:
      "\u0622\u0632\u0627\u062F \u06A9\u0645\u0648\u0688\u06CC\u0679\u06CC \u0679\u0631\u06CC\u0688\u0631",
    exp1_org: "\u0630\u0627\u062A\u06CC \u0637\u0648\u0631 \u067E\u0631",
    exp1_li1:
      "\u06F1\u06F8+ \u0645\u0627\u06C1 \u0633\u06D2 \u0630\u0627\u062A\u06CC \u0679\u0631\u06CC\u0688\u0646\u06AF \u0627\u06A9\u0627\u0624\u0646\u0679 \u06A9\u0627 \u0627\u0646\u062A\u0638\u0627\u0645",
    exp1_li2:
      "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0644\u0627\u0626\u0646\u0679\u0633 \u06A9\u06D2 \u067E\u0648\u0631\u0679\u0641\u0648\u0644\u06CC\u0648 \u0645\u0646\u0638\u0645",
    exp1_li3:
      "\u0645\u0627\u0631\u06A9\u06CC\u0679 \u0633\u0627\u0626\u06A9\u0648\u0644\u0648\u062C\u06CC\u060C \u06AF\u0644\u0648\u0628\u0644 \u0645\u0627\u0631\u06A9\u06CC\u0679 \u0688\u0627\u0626\u0646\u0627\u0645\u06A9\u0633 \u0645\u06CC\u06BA \u0645\u06C1\u0627\u0631\u062A",
    proj_title: "\u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633",
    proj1_title:
      "\u0630\u0627\u062A\u06CC \u067E\u0648\u0631\u0679\u0641\u0648\u0644\u06CC\u0648",
    proj1_desc:
      "AI \u0686\u06CC\u0679 \u0628\u0648\u0679\u060C \u06A9\u062B\u06CC\u0631 \u0644\u0633\u0627\u0646\u06CC \u0633\u0627\u0641\u0679 \u0648\u06CC\u0626\u0631 \u0627\u0648\u0631 GitHub API \u0627\u0646\u062A\u06CC\u06AF\u0631\u06CC\u0634\u0646 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u0631\u06CC\u0633\u067E\u0648\u0646\u0633\u0648 \u067E\u0648\u0631\u0679\u0641\u0648\u0644\u06CC\u0648\u06D4",
    proj2_title: "\u0631\u0646\u06AF \u0645\u062D\u0644",
    proj2_desc:
      "\u0641\u0644 \u0627\u0633\u0679\u06CC\u06A9 \u0627\u06CC\u0648\u0646\u0679 \u0628\u06A9\u0646\u06AF \u067E\u0644\u06CC\u0679 \u0641\u0627\u0631\u0645\u06D4",
    proj3_title:
      "\u0628\u0632\u0646\u0633 \u0644\u06CC\u0646\u0688\u0646\u06AF \u067E\u06CC\u062C",
    proj3_desc:
      "\u0635\u0627\u0641 \u0627\u06CC\u0646\u06CC\u0645\u06CC\u0634\u0646 \u0627\u0648\u0631 CTA \u0633\u06CC\u06A9\u0634\u0646\u0632 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u062C\u062F\u06CC\u062F \u0628\u0632\u0646\u0633 \u0644\u06CC\u0646\u0688\u0646\u06AF \u067E\u06CC\u062C\u06D4",
    proj4_title:
      "\u06AF\u06CC\u0645\u0646\u06AF \u0627\u0633\u0679\u0648\u0631",
    proj4_desc:
      "\u067E\u0631\u0648\u068C\u06CC\u06A9\u0679 \u0634\u0648\u06A9\u06CC\u0633 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u06AF\u06CC\u0645\u0646\u06AF \u0627\u0633\u0679\u0648\u0631 \u0644\u06CC\u0646\u0688\u0646\u06AF \u067E\u06CC\u062C\u06D4",
    proj_soon:
      "\u0645\u0632\u06CC\u062F \u062C\u0644\u062F \u0622\u0626\u06CC\u06BA \u06AF\u06D2",
    proj_soon_p:
      "\u0627\u06AF\u0644\u0627 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679 \u0632\u06CC\u0631 \u062A\u0639\u0645\u06CC\u0631 \u06C1\u06D2!",
    btn_all_proj:
      "\u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633 \u062F\u06CC\u06A9\u06BE\u06CC\u06BA",
    link_live: "\u0644\u0627\u0626\u06CC\u0648",
    link_code: "\u06A9\u0648\u0688",
    svc_title: "\u062E\u062F\u0645\u0627\u062A",
    svc1_title:
      "\u0648\u06CC\u0628 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679",
    svc1_desc:
      "MERN \u0627\u0633\u0679\u06CC\u06A9 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u0645\u06A9\u0645\u0644 \u0648\u06CC\u0628 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679\u06D4",
    svc2_title:
      "\u0641\u0631\u0646\u0679 \u0627\u06CC\u0646\u0688 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679",
    svc2_desc:
      "HTML\u060C Tailwind CSS\u060C JS \u0627\u0648\u0631 React \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u0628\u06C1\u062A\u0631\u06CC\u0646 \u0627\u0646\u0679\u0631\u0641\u06CC\u0633\u06D4",
    svc3_title: "\u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u0648 UI/UX",
    svc3_desc:
      "\u06C1\u0631 \u0688\u06CC\u0648\u0627\u0626\u0633 \u067E\u0631 \u0628\u06C1\u062A\u0631\u06CC\u0646 \u0688\u06CC\u0632\u0627\u0626\u0646\u06D4",
    contact_title: "\u0631\u0627\u0628\u0637\u06C1",
    contact_intro:
      "\u0631\u06CC\u0645\u0648\u0679 \u0627\u0648\u0631 \u0622\u0646 \u0633\u0627\u0626\u0679 \u06A9\u0627\u0645 \u06A9\u06D2 \u0644\u06CC\u06D2 \u062F\u0633\u062A\u06CC\u0627\u0628\u06D4",
    fl_name: "\u0622\u067E \u06A9\u0627 \u0646\u0627\u0645",
    fl_email: "\u0622\u067E \u06A9\u06CC \u0627\u06CC \u0645\u06CC\u0644",
    fl_msg: "\u067E\u06CC\u063A\u0627\u0645",
    btn_send:
      "\u067E\u06CC\u063A\u0627\u0645 \u0628\u06BE\u06CC\u062C\u06CC\u06BA",
    like_text:
      "\u067E\u0633\u0646\u062F \u0622\u06CC\u0627\u061F \u0644\u0627\u0626\u06A9 \u06A9\u0631\u06CC\u06BA!",
    footer_rights:
      "\u062A\u0645\u0627\u0645 \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u06C1\u06CC\u06BA",
    chat_name:
      "\u0631\u0636\u0627 \u06A9\u0627 \u0627\u0633\u0633\u0679\u0646\u0679",
    chat_hi:
      "\u06C1\u06CC\u0644\u0648! \u0645\u06CC\u06BA \u0631\u0636\u0627 \u06A9\u0627 AI \u0627\u0633\u0633\u0679\u0646\u0679 \u06C1\u0648\u06BA\u06D4 \u0631\u0636\u0627 \u06A9\u06D2 \u0628\u0627\u0631\u06D2 \u0645\u06CC\u06BA \u067E\u0648\u0686\u06BE\u06CC\u06BA!",
    chat_ph:
      "\u0631\u0636\u0627 \u06A9\u06D2 \u0628\u0627\u0631\u06D2 \u0645\u06CC\u06BA \u067E\u0648\u0686\u06BE\u06CC\u06BA...",
    chat_note:
      "\uD83D\uDD12 \u06AF\u0648\u06AF\u0644 Gemini AI \u0633\u06D2 \u0645\u062D\u0641\u0648\u0638\u06D4",
    back_home: "\u0648\u0627\u067E\u0633 \u06C1\u0648\u0645",
    about_page_name: "\u0631\u0636\u0627",
    about_page_sub:
      "\u067E\u0633 \u0645\u0646\u0638\u0631\u060C \u062A\u0639\u0644\u06CC\u0645 \u0627\u0648\u0631 \u0633\u0628 \u06A9\u0686\u06BE\u06D4",
    af_profile: "\u067E\u0631\u0648\u0641\u0627\u0626\u0644",
    af_profile_p1:
      "\u0641\u0631\u0646\u0679 \u0627\u06CC\u0646\u0688 \u0648\u06CC\u0628 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679 \u0645\u06CC\u06BA \u062A\u062C\u0631\u0628\u06C1 \u06A9\u06D2 \u0633\u0627\u062A\u06BE \u06A9\u0645\u067E\u06CC\u0648\u0679\u0631 \u0633\u0627\u0626\u0646\u0633 \u06AF\u0631\u06CC\u062C\u0648\u06CC\u0679\u06D4",
    af_profile_p2:
      "\u0645\u0646\u0636\u0628\u0637\u060C \u0645\u0627\u0631\u06A9\u06CC\u0679 \u0633\u0627\u0626\u06A9\u0648\u0644\u0648\u062C\u06CC \u06A9\u06CC \u0645\u0636\u0628\u0648\u0637 \u0633\u0645\u062C\u06BE \u06A9\u06D2 \u0633\u0627\u062A\u06BE\u06D4",
    af_based: "\u0645\u0642\u0627\u0645",
    af_avail: "\u062F\u0633\u062A\u06CC\u0627\u0628",
    af_and: "\u0627\u0648\u0631",
    af_opps: "\u0645\u0648\u0627\u0642\u0639\u06D4",
    af_skills:
      "\u062A\u06A9\u0646\u06CC\u06A9\u06CC \u0645\u06C1\u0627\u0631\u062A\u06CC\u06BA",
    af_edu: "\u062A\u0639\u0644\u06CC\u0645",
    edu1_title:
      "\u0628\u06CC\u0686\u0644\u0631 \u0622\u0641 \u0633\u0627\u0626\u0646\u0633 \u0627\u0646 \u06A9\u0645\u067E\u06CC\u0648\u0679\u0631 \u0633\u0627\u0626\u0646\u0633",
    edu1_sub:
      "\u0627\u0646\u0633\u0679\u06CC\u0679\u06CC\u0648\u0679 \u0622\u0641 \u0633\u067E\u06CC\u0633 \u0679\u06CC\u06A9\u0646\u0627\u0644\u0648\u062C\u06CC \u2022 2020-2024",
    edu2_title:
      "\u0627\u0646\u0679\u0631\u0645\u06CC\u0688\u06CC\u0626\u0679 \u2014 \u067E\u0631\u06CC \u0627\u0646\u062C\u06CC\u0646\u06CC\u0626\u0631\u0646\u06AF",
    edu2_sub:
      "\u0645\u0627\u0626\u0644\u0633\u0679\u0648\u0646 \u06A9\u0627\u0644\u062C \u2022 2018-2020",
    edu3_title:
      "\u0645\u06CC\u0679\u0631\u06CC\u06A9 \u2014 \u067E\u0631\u06CC \u0645\u06CC\u0688\u06CC\u06A9\u0644",
    edu3_sub:
      "\u0633\u06CC\u0646\u0679 \u0645\u06CC\u0631\u06CC\u0632 \u0627\u06CC\u06A9\u06CC\u0688\u0645\u06CC \u2022 2016-2018",
    af_certs: "\u0633\u0631\u0679\u06CC\u0641\u06CC\u06A9\u06CC\u0679\u0633",
    cert1_title: "IELTS \u2014 \u0627\u06CC\u06A9\u06CC\u0688\u0645\u06A9",
    cert1_sub:
      "\u0628\u06CC\u0646\u0688 \u0633\u06A9\u0648\u0631: 6.5 \u2022 \u0628\u0631\u0679\u0634 \u06A9\u0627\u0624\u0646\u0633\u0644 \u2022 2024",
    cert2_title:
      "\u0633\u0627\u0641\u0679 \u0633\u06A9\u0644\u0632 \u0679\u0631\u06CC\u0646\u0646\u06AF",
    cert2_sub: "OEC & ICMPD \u2022 \u062F\u0633\u0645\u0628\u0631 2025",
    af_langs: "\u0632\u0628\u0627\u0646\u06CC\u06BA",
    lang_urdu: "\u0627\u0631\u062F\u0648",
    lang_urdu_level: "\u0645\u0627\u062F\u0631\u06CC \u0632\u0628\u0627\u0646",
    lang_eng: "\u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC",
    lang_eng_level:
      "\u067E\u0631\u0648\u0641\u06CC\u0634\u0646\u0644 \u067E\u0631\u0648\u0641\u06CC\u0634\u0646\u0633\u06CC",
    af_interests: "\u062F\u0644\u0686\u0633\u067E\u06CC\u0627\u06BA",
    int1: "\u0648\u06CC\u0628 \u0688\u06CC\u0648\u06CC\u0644\u067E\u0645\u0646\u0679 \u0627\u0648\u0631 \u0648\u067E\u0646 \u0633\u0648\u0631\u0633",
    int2: "\u06AF\u0644\u0648\u0628\u0644 \u0641\u0646\u0627\u0646\u0634\u0644 \u0645\u0627\u0631\u06A9\u06CC\u0679\u0633",
    int3: "UI/UX \u0688\u06CC\u0632\u0627\u0626\u0646",
    int4: "\u0641\u0646 \u0679\u06CC\u06A9 \u0627\u0648\u0631 AI \u0679\u0631\u06CC\u0646\u0688\u0632",
    proj_page_title: "\u062A\u0645\u0627\u0645",
    proj_page_word: "\u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633",
    proj_page_sub:
      "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0627\u0645 + GitHub \u0631\u06CC\u067E\u0648\u0632\u06CC\u0679\u0631\u06CC\u0632 \u2014 GitHub API \u0633\u06D2 \u0627\u067E\u0688\u06CC\u0679\u06D4",
    proj_handpicked: "\u0645\u0646\u062A\u062E\u0628",
    proj_featured:
      "\u0646\u0645\u0627\u06CC\u0627\u06BA \u067E\u0631\u0648\u062C\u06CC\u06A9\u0679\u0633",
    proj_gh_label: "GitHub \u0631\u06CC\u067E\u0648\u0632",
    proj_gh_title:
      "\u062A\u0645\u0627\u0645 \u067E\u0628\u0644\u06A9 \u0631\u06CC\u067E\u0648\u0632\u06CC\u0679\u0631\u06CC\u0632",
    proj_gh_sub:
      "GitHub API \u0633\u06D2 \u0627\u0679\u0648 \u0641\u06CC\u0686\u0688 \u2014 \u06C1\u0645\u06CC\u0634\u06C1 \u0627\u067E \u0679\u0648 \u0688\u06CC\u0679\u06D4",
    proj_loading:
      "GitHub \u0633\u06D2 \u0631\u06CC\u067E\u0648\u0632\u06CC\u0679\u0631\u06CC\u0632 \u0644\u0648\u0688 \u06C1\u0648 \u0631\u06C1\u06CC \u06C1\u06CC\u06BA...",
  },

  /* ---- FRENCH ---- */
  fr: {
    nav_home: "Accueil",
    nav_about: "\u00C0 propos",
    nav_skills: "Comp\u00E9tences",
    nav_exp: "Exp\u00E9rience",
    nav_svc: "Services",
    nav_contact: "Contact",
    hero_chip: "Disponible pour travailler",
    hero_tag: "Dipl\u00F4m\u00E9 CS \u2022 D\u00E9veloppeur Web \u2022 Trader",
    btn_hire: "Embauchez-moi",
    btn_dl: "T\u00E9l\u00E9charger CV",
    btn_view: "Voir CV",
    scroll_down: "D\u00E9filer",
    about_title: "\u00C0 Propos",
    about_p1:
      "Dipl\u00F4m\u00E9 en informatique d'IST Islamabad, je construis des applications web full-stack avec la pile MERN et j'ai 18+ mois d'exp\u00E9rience en trading.",
    about_p2:
      "Mon mix de d\u00E9veloppement, trading et business me rend id\u00E9al pour des r\u00F4les fintech ou proptech.",
    about_more: "En savoir plus",
    stat_projects: "Projets Live",
    stat_months_trade: "Mois de Trading",
    stat_grad: "Dipl\u00F4me CS",
    stat_tech: "Comp\u00E9tences Techniques",
    skills_title: "Comp\u00E9tences et Outils",
    exp_title: "Exp\u00E9rience",
    exp1_title: "Trader Ind\u00E9pendant",
    exp1_org: "Auto-dirig\u00E9",
    exp1_li1: "Gestion d'un compte trading personnel pendant 18+ mois",
    exp1_li2: "Gestion de portefeuilles pour certains clients",
    exp1_li3:
      "Expertise en psychologie des march\u00E9s et gestion des risques",
    proj_title: "Projets",
    proj1_title: "Portfolio Personnel",
    proj1_desc:
      "Portfolio r\u00E9actif avec chatbot AI, support multilingue et int\u00E9gration GitHub API.",
    proj2_title: "Rang Mahal",
    proj2_desc:
      "Plateforme full-stack de r\u00E9servation d'\u00E9v\u00E9nements.",
    proj3_title: "Page d'Atterrissage Business",
    proj3_desc: "Page d'atterrissage moderne avec animations et sections CTA.",
    proj4_title: "Boutique Gaming",
    proj4_desc:
      "Page de boutique gaming avec vitrine produits et mise en page responsive.",
    proj_soon: "Bient\u00F4t disponible",
    proj_soon_p: "Le prochain projet est en cours !",
    btn_all_proj: "Voir tous les projets",
    link_live: "Live",
    link_code: "Code",
    svc_title: "Services",
    svc1_title: "D\u00E9veloppement Web",
    svc1_desc: "D\u00E9veloppement de bout en bout avec la pile MERN.",
    svc2_title: "D\u00E9veloppement Frontend",
    svc2_desc: "Interfaces pixel-perfect avec HTML, CSS, JS et React.",
    svc3_title: "UI/UX Responsive",
    svc3_desc: "Designs superbes sur chaque appareil.",
    contact_title: "Prendre Contact",
    contact_intro: "Disponible pour le travail \u00E0 distance et sur site.",
    fl_name: "Votre nom",
    fl_email: "Votre email",
    fl_msg: "Message",
    btn_send: "Envoyer",
    like_text: "Vous avez aim\u00E9 mon portfolio ? Laissez un like !",
    footer_rights: "Tous droits r\u00E9serv\u00E9s",
    chat_name: "Assistant de Raza",
    chat_hi:
      "Bonjour ! Je suis l'assistant AI de Raza. Posez-moi des questions !",
    chat_ph: "Posez une question sur Raza...",
    chat_note: "\uD83D\uDD12 Propuls\u00E9 par Google Gemini AI.",
    back_home: "Retour \u00E0 l'accueil",
    about_page_name: "Raza",
    about_page_sub: "Parcours, \u00E9ducation et plus.",
    af_profile: "Profil",
    af_profile_p1:
      "Dipl\u00F4m\u00E9 en CS sp\u00E9cialis\u00E9 en d\u00E9veloppement web.",
    af_profile_p2:
      "D\u00E9di\u00E9, disciplin\u00E9 et en qu\u00EAte d'opportunit\u00E9s.",
    af_based: "Bas\u00E9 \u00E0",
    af_avail: "Disponible pour",
    af_and: "et",
    af_opps: "opportunit\u00E9s.",
    af_skills: "Comp\u00E9tences Techniques",
    af_edu: "\u00C9ducation",
    edu1_title: "Licence en Informatique",
    edu1_sub: "IST Islamabad \u2022 2020\u20132024",
    edu2_title: "Interm\u00E9diaire \u2014 Pr\u00E9-ing\u00E9nierie",
    edu2_sub: "Milestone College \u2022 2018\u20132020",
    edu3_title: "Baccalaur\u00E9at \u2014 Pr\u00E9-m\u00E9decine",
    edu3_sub: "Saint Mary's Academy \u2022 2016\u20132018",
    af_certs: "Certifications",
    cert1_title: "IELTS \u2014 Acad\u00E9mique",
    cert1_sub: "Score: 6.5 \u2022 British Council \u2022 Septembre 2024",
    cert2_title: "Formation Soft Skills \u2014 23h Certifi\u00E9",
    cert2_sub: "OEC & ICMPD \u2022 D\u00E9cembre 2025",
    af_langs: "Langues",
    lang_urdu: "Ourdou",
    lang_urdu_level: "Langue maternelle",
    lang_eng: "Anglais",
    lang_eng_level: "Niveau professionnel (IELTS 6.5)",
    af_interests: "Int\u00E9r\u00EAts",
    int1: "D\u00E9veloppement web & open-source",
    int2: "March\u00E9s financiers & trading",
    int3: "UI/UX design",
    int4: "Tendances tech \u2014 fintech, proptech, AI",
    proj_page_title: "Tous les",
    proj_page_word: "Projets",
    proj_page_sub:
      "Travaux s\u00E9lectionn\u00E9s + tous les r\u00E9pertoires GitHub publics.",
    proj_handpicked: "S\u00E9lectionn\u00E9s",
    proj_featured: "Projets En Vedette",
    proj_gh_label: "D\u00E9p\u00F4ts GitHub",
    proj_gh_title: "Tous les D\u00E9p\u00F4ts Publics",
    proj_gh_sub: "Auto-r\u00E9cup\u00E9r\u00E9 depuis l'API GitHub.",
    proj_loading: "Chargement des d\u00E9p\u00F4ts...",
  },

  /* ---- GERMAN ---- */
  de: {
    nav_home: "Start",
    nav_about: "\u00DCber mich",
    nav_skills: "F\u00E4higkeiten",
    nav_exp: "Erfahrung",
    nav_svc: "Leistungen",
    nav_contact: "Kontakt",
    hero_chip: "Verf\u00FCgbar f\u00FCr Arbeit",
    hero_tag: "CS-Absolvent \u2022 Web-Entwickler \u2022 Trader",
    btn_hire: "Anstellen",
    btn_dl: "CV herunterladen",
    btn_view: "CV ansehen",
    scroll_down: "Scrollen",
    about_title: "\u00DCber Mich",
    about_p1:
      "CS-Absolvent des IST Islamabad, entwickle Full-Stack-Webanwendungen mit dem MERN-Stack und habe 18+ Monate Erfahrung als Trader.",
    about_p2:
      "Meine Kombination aus Softwareentwicklung und Trading macht mich ideal f\u00FCr Fintech- oder Proptech-Rollen.",
    about_more: "Mehr erfahren",
    stat_projects: "Live-Projekte",
    stat_months_trade: "Monate Trading",
    stat_grad: "CS-Abschluss",
    stat_tech: "Technische F\u00E4higkeiten",
    skills_title: "F\u00E4higkeiten & Tools",
    exp_title: "Erfahrung",
    exp1_title: "Unabh\u00E4ngiger Commodity-Trader",
    exp1_org: "Selbst\u00E4ndig",
    exp1_li1:
      "Verwaltung eines pers\u00F6nlichen Trading-Kontos f\u00FCr 18+ Monate",
    exp1_li2: "Portfolioverwaltung f\u00FCr ausgew\u00E4hlte Kunden",
    exp1_li3: "Expertise in Marktpsychologie und Risikomanagement",
    proj_title: "Projekte",
    proj1_title: "Pers\u00F6nliches Portfolio",
    proj1_desc:
      "Responsives Portfolio mit AI-Chatbot, Mehrsprachigkeit & GitHub API.",
    proj2_title: "Rang Mahal",
    proj2_desc: "Full-Stack-Eventbuchungsplattform.",
    proj3_title: "Business-Landingpage",
    proj3_desc: "Moderne Landingpage mit Animationen und CTA-Bereichen.",
    proj4_title: "Gaming-Shop",
    proj4_desc: "Gaming-Shop-Landingpage mit Produktpr\u00E4sentation.",
    proj_soon: "Mehr kommt bald",
    proj_soon_p: "Das n\u00E4chste Projekt ist in Arbeit!",
    btn_all_proj: "Alle Projekte ansehen",
    link_live: "Live",
    link_code: "Code",
    svc_title: "Leistungen",
    svc1_title: "Web-Entwicklung",
    svc1_desc: "Ende-zu-Ende-Entwicklung mit dem MERN-Stack.",
    svc2_title: "Frontend-Entwicklung",
    svc2_desc: "Pixelgenaue Oberfl\u00E4chen mit HTML, CSS, JS und React.",
    svc3_title: "Responsives UI/UX",
    svc3_desc: "Designs f\u00FCr jedes Ger\u00E4t.",
    contact_title: "Kontakt",
    contact_intro: "Verf\u00FCgbar f\u00FCr Remote- und Vor-Ort-Arbeit.",
    fl_name: "Ihr Name",
    fl_email: "Ihre E-Mail",
    fl_msg: "Nachricht",
    btn_send: "Nachricht senden",
    like_text: "Portfolio gef\u00E4llt Ihnen? Geben Sie ein Like!",
    footer_rights: "Alle Rechte vorbehalten",
    chat_name: "Razas Assistent",
    chat_hi: "Hallo! Ich bin Razas AI-Assistent. Stellen Sie mir Fragen!",
    chat_ph: "Fragen Sie \u00FCber Raza...",
    chat_note: "\uD83D\uDD12 Betrieben von Google Gemini AI.",
    back_home: "Zur\u00FCck zur Startseite",
    about_page_name: "Raza",
    about_page_sub: "Hintergrund, Bildung und mehr.",
    af_profile: "Profil",
    af_profile_p1: "CS-Absolvent mit Erfahrung in der Frontend-Webentwicklung.",
    af_profile_p2: "Diszipliniert und lernbereit.",
    af_based: "Wohnort:",
    af_avail: "Verf\u00FCgbar f\u00FCr",
    af_and: "und",
    af_opps: "Stellen.",
    af_skills: "Technische F\u00E4higkeiten",
    af_edu: "Bildung",
    edu1_title: "Bachelor of Science Informatik",
    edu1_sub: "IST Islamabad \u2022 2020\u20132024",
    edu2_title: "Abitur \u2014 Vor-Ingenieurwesen",
    edu2_sub: "Milestone College \u2022 2018\u20132020",
    edu3_title: "Mittlere Reife",
    edu3_sub: "Saint Mary's Academy \u2022 2016\u20132018",
    af_certs: "Zertifikate",
    cert1_title: "IELTS \u2014 Akademisch",
    cert1_sub: "Gesamtnote: 6.5 \u2022 British Council \u2022 September 2024",
    cert2_title: "Soft Skills Training \u2014 23 Stunden Zertifiziert",
    cert2_sub: "OEC & ICMPD \u2022 Dezember 2025",
    af_langs: "Sprachen",
    lang_urdu: "Urdu",
    lang_urdu_level: "Muttersprache",
    lang_eng: "Englisch",
    lang_eng_level: "Berufliche Kompetenz (IELTS 6.5)",
    af_interests: "Interessen",
    int1: "Webentwicklung & Open-Source",
    int2: "Finanzm\u00E4rkte & Trading",
    int3: "UI/UX Design",
    int4: "Tech-Trends \u2014 Fintech, Proptech, AI",
    proj_page_title: "Alle",
    proj_page_word: "Projekte",
    proj_page_sub:
      "Ausgew\u00E4hlte Arbeiten + alle \u00F6ffentlichen GitHub-Repositories.",
    proj_handpicked: "Ausgew\u00E4hlt",
    proj_featured: "Ausgew\u00E4hlte Projekte",
    proj_gh_label: "GitHub Repos",
    proj_gh_title: "Alle \u00F6ffentlichen Repositories",
    proj_gh_sub: "Automatisch von der GitHub API abgerufen.",
    proj_loading: "Repositories werden geladen...",
  },

  /* ---- SPANISH ---- */
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre m\u00ED",
    nav_skills: "Habilidades",
    nav_exp: "Experiencia",
    nav_svc: "Servicios",
    nav_contact: "Contacto",
    hero_chip: "Disponible para trabajar",
    hero_tag: "Graduado CS \u2022 Desarrollador Web \u2022 Trader",
    btn_hire: "Contr\u00E1tame",
    btn_dl: "Descargar CV",
    btn_view: "Ver CV",
    scroll_down: "Desplazar",
    about_title: "Sobre M\u00ED",
    about_p1:
      "Graduado en Ciencias de la Computaci\u00F3n del IST Islamabad, construyo aplicaciones web full-stack con el stack MERN y tengo 18+ meses como trader independiente.",
    about_p2:
      "Mi combinaci\u00F3n de desarrollo, trading y negocios me hace ideal para roles fintech o proptech.",
    about_more: "Saber m\u00E1s",
    stat_projects: "Proyectos Live",
    stat_months_trade: "Meses Trader",
    stat_grad: "Grado CS",
    stat_tech: "Habilidades T\u00E9cnicas",
    skills_title: "Habilidades y Herramientas",
    exp_title: "Experiencia",
    exp1_title: "Trader Independiente de Materias Primas",
    exp1_org: "Autodirigido",
    exp1_li1: "Gesti\u00F3n de cuenta de trading personal durante 18+ meses",
    exp1_li2: "Gesti\u00F3n de carteras para clientes seleccionados",
    exp1_li3:
      "Experiencia en psicolog\u00EDa del mercado y gesti\u00F3n de riesgos",
    proj_title: "Proyectos",
    proj1_title: "Portfolio Personal",
    proj1_desc:
      "Portfolio responsivo con chatbot AI, soporte multiling\u00FCe e integraci\u00F3n GitHub API.",
    proj2_title: "Rang Mahal",
    proj2_desc: "Plataforma full-stack de reserva de eventos.",
    proj3_title: "P\u00E1gina de Aterrizaje Empresarial",
    proj3_desc:
      "P\u00E1gina de aterrizaje moderna con animaciones y secciones CTA.",
    proj4_title: "Tienda Gaming",
    proj4_desc: "P\u00E1gina de tienda gaming con vitrina de productos.",
    proj_soon: "M\u00E1s pr\u00F3ximamente",
    proj_soon_p: "\u00A1El pr\u00F3ximo proyecto est\u00E1 en marcha!",
    btn_all_proj: "Ver todos los proyectos",
    link_live: "Live",
    link_code: "C\u00F3digo",
    svc_title: "Servicios",
    svc1_title: "Desarrollo Web",
    svc1_desc: "Desarrollo completo con el stack MERN.",
    svc2_title: "Desarrollo Frontend",
    svc2_desc: "Interfaces perfectas con HTML, CSS, JS y React.",
    svc3_title: "UI/UX Responsive",
    svc3_desc: "Dise\u00F1os para cada dispositivo.",
    contact_title: "Ponte en Contacto",
    contact_intro: "Disponible para trabajo remoto y presencial.",
    fl_name: "Tu nombre",
    fl_email: "Tu email",
    fl_msg: "Mensaje",
    btn_send: "Enviar mensaje",
    like_text: "\u00BFTe gust\u00F3 mi portfolio? \u00A1Dale un like!",
    footer_rights: "Todos los derechos reservados",
    chat_name: "Asistente de Raza",
    chat_hi:
      "\u00A1Hola! Soy el asistente AI de Raza. \u00A1Preg\u00FAntame lo que quieras!",
    chat_ph: "Pregunta sobre Raza...",
    chat_note: "\uD83D\uDD12 Impulsado por Google Gemini AI.",
    back_home: "Volver al inicio",
    about_page_name: "Raza",
    about_page_sub: "Trayectoria, educaci\u00F3n y todo lo dem\u00E1s.",
    af_profile: "Perfil",
    af_profile_p1: "Graduado en CS con experiencia en desarrollo web frontend.",
    af_profile_p2: "Disciplinado y con ganas de aprender.",
    af_based: "Ubicado en",
    af_avail: "Disponible para",
    af_and: "y",
    af_opps: "oportunidades.",
    af_skills: "Habilidades T\u00E9cnicas",
    af_edu: "Educaci\u00F3n",
    edu1_title: "Licenciatura en Ciencias de la Computaci\u00F3n",
    edu1_sub: "IST Islamabad \u2022 2020\u20132024",
    edu2_title: "Bachillerato \u2014 Pre-Ingenier\u00EDa",
    edu2_sub: "Milestone College \u2022 2018\u20132020",
    edu3_title: "Secundaria \u2014 Pre-M\u00E9dica",
    edu3_sub: "Saint Mary's Academy \u2022 2016\u20132018",
    af_certs: "Certificaciones",
    cert1_title: "IELTS \u2014 Acad\u00E9mico",
    cert1_sub:
      "Puntuaci\u00F3n: 6.5 \u2022 British Council \u2022 Septiembre 2024",
    cert2_title: "Formaci\u00F3n Soft Skills \u2014 23 Horas Certificado",
    cert2_sub: "OEC & ICMPD \u2022 Diciembre 2025",
    af_langs: "Idiomas",
    lang_urdu: "Urdu",
    lang_urdu_level: "Lengua materna",
    lang_eng: "Ingl\u00E9s",
    lang_eng_level: "Competencia profesional (IELTS 6.5)",
    af_interests: "Intereses",
    int1: "Desarrollo web & open-source",
    int2: "Mercados financieros & trading",
    int3: "Dise\u00F1o UI/UX",
    int4: "Tendencias tech \u2014 fintech, proptech, AI",
    proj_page_title: "Todos los",
    proj_page_word: "Proyectos",
    proj_page_sub:
      "Trabajos destacados + todos los repositorios p\u00FAblicos de GitHub.",
    proj_handpicked: "Seleccionados",
    proj_featured: "Proyectos Destacados",
    proj_gh_label: "Repos de GitHub",
    proj_gh_title: "Todos los Repositorios P\u00FAblicos",
    proj_gh_sub: "Obtenidos autom\u00E1ticamente desde la API de GitHub.",
    proj_loading: "Cargando repositorios...",
  },
};

/* keep track of selected language */
var currentLang = "en";

/* ==============================================
   LANGUAGE SWITCHER
   Reads all data-i18n elements and updates them
================================================ */

function setLang(lang) {
  currentLang = lang;

  var t = translations[lang] || translations.en;

  /* RTL layout for Urdu */
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  /* Update all text elements */
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute("data-i18n");
    if (t[key]) els[i].textContent = t[key];
  }

  /* Update input placeholders */
  var phs = document.querySelectorAll("[data-i18n-ph]");
  for (var j = 0; j < phs.length; j++) {
    var phKey = phs[j].getAttribute("data-i18n-ph");
    if (t[phKey]) phs[j].placeholder = t[phKey];
  }

  closeLang();
  showToast("Language changed!");
}

/* ==============================================
   THEME TOGGLE
   Saves preference to localStorage
================================================ */

function toggleTheme() {
  var body = document.body;
  var isDark = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme", !isDark);
  body.classList.toggle("light-theme", isDark);

  var icon = document.getElementById("theme-icon");
  var label = document.getElementById("theme-label");

  if (icon) icon.className = isDark ? "fa fa-moon" : "fa fa-sun";
  if (label) label.textContent = isDark ? "Dark Mode" : "Light Mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function initTheme() {
  /* Check saved theme preference */
  var saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.replace("dark-theme", "light-theme");
    var icon = document.getElementById("theme-icon");
    var label = document.getElementById("theme-label");
    if (icon) icon.className = "fa fa-sun";
    if (label) label.textContent = "Light Mode";
  }
}

/* ==============================================
   SIDE NAV (3-dot menu)
================================================ */

function toggleNav() {
  var nav = document.getElementById("side-nav");
  var overlay = document.getElementById("nav-overlay");
  var isOpen = nav && nav.classList.contains("open");

  if (!isOpen) {
    if (nav) nav.classList.add("open");
    if (overlay) {
      overlay.style.display = "block";
      /* small delay so CSS transition kicks in */
      setTimeout(function () {
        overlay.classList.add("active");
      }, 10);
    }
  } else {
    closeNav();
  }
}

function closeNav() {
  var nav = document.getElementById("side-nav");
  var overlay = document.getElementById("nav-overlay");

  if (nav) nav.classList.remove("open");
  if (overlay) {
    overlay.classList.remove("active");
    setTimeout(function () {
      overlay.style.display = "none";
    }, 320);
  }
}

/* ==============================================
   LANGUAGE DROPDOWN
================================================ */

function toggleLang() {
  var drop = document.getElementById("lang-drop");
  if (drop) drop.classList.toggle("lang-hidden");
}

function closeLang() {
  var drop = document.getElementById("lang-drop");
  if (drop) drop.classList.add("lang-hidden");
}

/* ==============================================
   TYPING EFFECT (hero section)
   Types and deletes words in a loop
================================================ */

var typedWords = [
  "Web Developer",
  "Frontend Dev",
  "MERN Stack",
  "Problem Solver",
  "Open to Work",
];
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

function typeEffect() {
  var el = document.getElementById("typed-word");
  if (!el) return; /* only runs on pages with this element */

  var word = typedWords[wordIndex];

  if (isDeleting) {
    el.textContent = word.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = word.substring(0, charIndex + 1);
    charIndex++;
  }

  /* Finished typing the word — wait then start deleting */
  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  /* Finished deleting — move to next word */
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typedWords.length;
  }

  var speed = isDeleting ? 60 : 110;
  setTimeout(typeEffect, speed);
}

/* ==============================================
   SCROLL REVEAL
   Elements with class="reveal" fade in on scroll
================================================ */

function initReveal() {
  var els = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("visible");
          observer.unobserve(entries[i].target);
        }
      }
    },
    { threshold: 0.05 },
  );

  for (var j = 0; j < els.length; j++) {
    observer.observe(els[j]);
  }
}

/* ==============================================
   BACK TO TOP BUTTON
================================================ */

function initBackTop() {
  var btn = document.getElementById("back-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    /* show button after scrolling 400px */
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==============================================
   LIKE / HEART BUTTON
   Count is saved in localStorage
================================================ */

function handleLike() {
  var btn = document.getElementById("like-btn");
  var count = document.getElementById("like-count");
  if (!btn || !count) return;

  var likes = parseInt(localStorage.getItem("portfolio-likes") || "17");
  var liked = localStorage.getItem("portfolio-liked") === "true";

  if (!liked) {
    likes++;
    localStorage.setItem("portfolio-likes", likes);
    localStorage.setItem("portfolio-liked", "true");
    btn.classList.add("liked");
    showToast("Thank you for the like!");
  } else {
    /* Unlike — but never go below starting count of 17 */
    likes = Math.max(17, likes - 1);
    localStorage.setItem("portfolio-likes", likes);
    localStorage.setItem("portfolio-liked", "false");
    btn.classList.remove("liked");
  }

  count.textContent = likes;
}

function initLike() {
  var count = document.getElementById("like-count");
  var btn = document.getElementById("like-btn");
  if (!count) return;

  // Reset any old saved like data so it starts fresh
  localStorage.removeItem("portfolio-liked");
  localStorage.removeItem("portfolio-likes");

  count.textContent = "17";
}

/* ==============================================
   TOAST NOTIFICATION
   Shows a short message for 2.8 seconds
================================================ */

var toastTimer;

function showToast(msg) {
  var t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.remove("toast-hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    t.classList.add("toast-hidden");
  }, 2800);
}

/* ==============================================
   CONTACT FORM (EmailJS)
   Sends email without any backend
================================================ */

function handleForm(e) {
  e.preventDefault();

  var name = document.getElementById("f-name")
    ? document.getElementById("f-name").value.trim()
    : "";
  var email = document.getElementById("f-email")
    ? document.getElementById("f-email").value.trim()
    : "";
  var msg = document.getElementById("f-msg")
    ? document.getElementById("f-msg").value.trim()
    : "";

  if (!name || !email || !msg) {
    showToast("Please fill all fields.");
    return;
  }

  var btn = e.target.querySelector("button[type='submit']");
  if (btn) btn.disabled = true;

  emailjs
    .send("service_rqwe8so", "template_gnmohim", {
      name: name,
      email: email,
      message: msg,
    })
    .then(function () {
      showToast("Thanks " + name + "! Message sent successfully.");
      e.target.reset();
    })
    .catch(function () {
      showToast("Something went wrong. Please try again.");
    })
    .finally(function () {
      if (btn) btn.disabled = false;
    });
}

/* ==============================================
   AI CHATBOT
   Uses Google Gemini 1.5 Flash API
================================================ */

var chatOpen = false;
var lastMsgTime = 0;

function toggleChat() {
  chatOpen = !chatOpen;

  var panel = document.getElementById("chat-panel");
  var fabIcon = document.getElementById("fab-icon");

  if (panel) panel.classList.toggle("chat-hidden", !chatOpen);
  if (fabIcon) fabIcon.className = chatOpen ? "fas fa-xmark" : "fas fa-robot";
}

function addChatMsg(text, cssClass) {
  var msgs = document.getElementById("chat-msgs");
  if (!msgs) return;

  var div = document.createElement("div");
  div.className = cssClass;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendMsg() {
  var input = document.getElementById("chat-in");
  var sendBtn = document.getElementById("chat-send-btn");
  if (!input) return;

  var text = input.value.trim();
  if (!text) return;

  /* Rate limit: 3 seconds between messages */
  var now = Date.now();
  if (now - lastMsgTime < 3000) {
    showToast("Please wait a moment...");
    return;
  }
  lastMsgTime = now;

  addChatMsg(text, "cb-user");
  input.value = "";
  if (sendBtn) sendBtn.disabled = true;

  /* Typing indicator */
  var msgs = document.getElementById("chat-msgs");
  var typing = document.createElement("div");
  typing.className = "cb-typing";
  typing.textContent = "Raza's assistant is typing...";
  if (msgs) {
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* Call Gemini API */
  fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: BOT_PROMPT }] },
      contents: [{ parts: [{ text: text }] }],
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      typing.remove();
      if (data.error) {
        addChatMsg(
          "Sorry, rate limit reached. Please try again in a bit!",
          "cb-ai",
        );
      } else {
        var reply = data.candidates && data.candidates[0].content.parts[0].text;
        addChatMsg(reply || "I couldn't get a response. Try again!", "cb-ai");
      }
    })
    .catch(function () {
      typing.remove();
      addChatMsg("Couldn't connect. Please check your connection.", "cb-ai");
    })
    .finally(function () {
      if (sendBtn) sendBtn.disabled = false;
    });
}

function initChat() {
  var input = document.getElementById("chat-in");
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendMsg();
    });
  }
}

/* ==============================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
   Highlights the current section in the nav
================================================ */

function initActiveNav() {
  var sections = document.querySelectorAll("section[id]");
  var links = document.querySelectorAll(".nav-links a");

  window.addEventListener(
    "scroll",
    function () {
      var current = "";

      for (var i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 200) {
          current = sections[i].id;
        }
      }

      for (var j = 0; j < links.length; j++) {
        var href = links[j].getAttribute("href");
        links[j].style.color = href === "#" + current ? "var(--green)" : "";
      }
    },
    { passive: true },
  );
}

/* ==============================================
   CLOSE MENUS WHEN CLICKING OUTSIDE
================================================ */

document.addEventListener("click", function (e) {
  var langWrap = document.getElementById("lang-wrap");
  if (langWrap && !langWrap.contains(e.target)) {
    closeLang();
  }
});

/* ==============================================
   GITHUB REPOS LOADER (projects.html only)
   Fetches all public repos from GitHub API
================================================ */

function loadGitHubRepos() {
  var container = document.getElementById("github-repos");
  if (!container) return; /* only runs on projects.html */

  fetch(
    "https://api.github.com/users/razamughal333/repos?sort=updated&per_page=30",
  )
    .then(function (res) {
      return res.json().then(function (data) {
        return { ok: res.ok, data: data };
      });
    })
    .then(function (result) {
      if (!result.ok || !Array.isArray(result.data)) {
        var msg =
          result.data && result.data.message
            ? result.data.message
            : "GitHub API error";
        container.innerHTML =
          "<p class='loading-msg'>" +
          (msg.indexOf("rate limit") > -1
            ? "GitHub API rate limit reached. "
            : "Could not load repos. ") +
          "<a href='https://github.com/razamughal333' target='_blank' style='color:var(--green)'>View all repos on GitHub &rarr;</a></p>";
        return;
      }

      if (result.data.length === 0) {
        container.innerHTML =
          "<p class='loading-msg'>No public repositories found. <a href='https://github.com/razamughal333' target='_blank' style='color:var(--green)'>Visit GitHub &rarr;</a></p>";
        return;
      }

      var grid = document.createElement("div");
      grid.className = "github-grid";

      for (var i = 0; i < result.data.length; i++) {
        var repo = result.data[i];
        var card = document.createElement("div");
        card.className = "gh-card";

        /* Build card HTML — escaping values to avoid XSS */
        card.innerHTML =
          "<h3><i class='fab fa-github' style='color:var(--green);margin-right:0.4rem'></i>" +
          escHtml(repo.name) +
          "</h3>" +
          "<p>" +
          escHtml(repo.description || "No description provided.") +
          "</p>" +
          "<div class='gh-meta'>" +
          (repo.language
            ? "<span><i class='fas fa-circle' style='color:var(--teal)'></i> " +
              escHtml(repo.language) +
              "</span>"
            : "") +
          "<span><i class='fas fa-star'></i> " +
          repo.stargazers_count +
          "</span>" +
          "<span><i class='fas fa-code-fork'></i> " +
          repo.forks_count +
          "</span>" +
          "</div>" +
          "<a href='" +
          escHtml(repo.html_url) +
          "' target='_blank' class='link-gh'><i class='fab fa-github'></i> View on GitHub</a>" +
          (repo.homepage
            ? "<a href='" +
              escHtml(repo.homepage) +
              "' target='_blank' class='link-live' style='margin-top:0.3rem'><i class='fas fa-external-link-alt'></i> Live</a>"
            : "");

        grid.appendChild(card);
      }

      container.innerHTML = "";
      container.appendChild(grid);

      /* Animate cards one by one */
      var cards = grid.querySelectorAll(".gh-card");
      for (var k = 0; k < cards.length; k++) {
        (function (card, delay) {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(function () {
            card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, delay);
        })(cards[k], k * 60);
      }
    })
    .catch(function () {
      container.innerHTML =
        "<p class='loading-msg'>Couldn't load repositories. <a href='https://github.com/razamughal333' target='_blank' style='color:var(--green)'>View on GitHub directly &rarr;</a></p>";
    });
}

/* Simple HTML escape to prevent XSS when inserting repo data */
function escHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ==============================================
   INIT — runs when the page is ready
================================================ */

document.addEventListener("DOMContentLoaded", function () {
  initTheme(); /* restore saved theme */
  typeEffect(); /* start typing animation */
  initReveal(); /* scroll reveal */
  initBackTop(); /* back to top button */
  initLike(); /* restore like count */
  initChat(); /* chatbot enter-key listener */
  initActiveNav(); /* highlight active nav link */
  loadGitHubRepos(); /* load repos (only runs on projects.html) */
});
