/* ============================================
   RAZA AHMED PORTFOLIO — script.js
   - Dark/Light theme
   - Multilingual (EN, UR, FR, DE, ES)
   - Typing effect
   - Scroll reveal
   - Back-to-top button
   - Like / heart feature
   - Gemini AI Chatbot
   - Contact form
   - Toast notifications
============================================ */

/* ====== CHATBOT GEMINI API KEY ====== */
/*
  AI Portfolio Chatbot
  --------------------
  - Built using Google Gemini 2.5 Flash API
  - API key restricted to this domain only (razamughal333.github.io)
    via Google Cloud Console HTTP referrer restrictions
  - Rate limited to prevent spam (3 second cooldown per message)
  - Custom system prompt trained to answer questions about Raza Ahmed
*/
// const GEMINI_API_KEY = "AIzaSyCbb64itJn7CLrJW_zNuAzsbgkwmNuNCzQ";
const GEMINI_API_KEY = "AIzaSyDqB1KuYZKLEvFIFxdVDThSeP99uRbBdhc";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
// Find this line and change it to:
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
const SYSTEM_PROMPT = `You are an AI assistant on Raza Ahmed's personal portfolio website. Your job is to answer questions from recruiters, developers, and visitors about Raza in a friendly, professional, and concise way.

About Raza:
- Full name: Raza Ahmed
- Computer Science graduate (BSc) from Institute of Space Technology, Islamabad — graduated 2024
- Based in Rawalpindi / Islamabad, Pakistan
- Available for both remote and on-site work
- Currently building skills in MERN stack web development (MongoDB, Express, React, Node.js)
- Proficient in HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Git, GitHub, Figma
- Has built and deployed multiple live web projects
- Member of the Google Developer Program
- Independent Commodity Trader for 18+ months — technical analysis, risk management, trading psychology, global markets
- IELTS Academic band score: 6.5 (British Council, September 2024)
- Soft Skills Training — 23-hour certified program (OEC & ICMPD, December 2025)
- Languages: Urdu (native), English (professional proficiency)
- Background spans software development, commodity trading, and real estate — well-suited for fintech or proptech roles

Projects:
- Personal Portfolio: razamughal333.github.io/Portfolio — HTML/CSS/JS, AI chatbot, dark/light theme, multilingual
- Rang Mahal (2024): Full-stack event booking & management platform — Next.js, Tailwind, MongoDB, Figma — Final year team project, role: Frontend Developer
- Business Landing Page: razamughalandco.netlify.app — HTML/CSS/JS
- Gaming Store: razagamingstore.netlify.app

Contact:
- Email: razahmedmughal@gmail.com
- Phone: +92 336 2236669
- GitHub: github.com/razamughal333
- LinkedIn: linkedin.com/in/raza-ahmed333
- Instagram: instagram.com/raza_mughal_333
- Twitter/X: x.com/RazaMughal_333

How to respond:
- Keep answers short and to the point (2-4 sentences max)
- Be warm, confident, and professional — like speaking about Raza in third person
- If asked something you don't know about Raza, say "You can reach Raza directly via LinkedIn or email for more details!"
- Never make up skills or experience Raza doesn't have
- If asked off-topic questions, politely redirect: "I'm here to answer questions about Raza — feel free to ask about his skills, projects, or background!"`;

/* ====== TRANSLATIONS ====== */
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_svc: "Services",
    nav_contact: "Contact",
    hero_chip: "Available for Work",
    hero_tag: "CS Graduate • Web Developer • Commodity Trader",
    btn_hire: "Hire Me",
    btn_dl: "Download CV",
    btn_view: "View CV",
    scroll_down: "Scroll",
    about_label: "Get to Know Me",
    about_title: "About Me",
    about_p1:
      "I'm a Computer Science graduate from IST Islamabad, currently building full-stack web applications with the MERN stack. I've spent 18+ months as an independent commodity trader, sharpening my analytical thinking and discipline.",
    about_p2:
      "My mix of software development, trading, and business exposure makes me a great fit for fintech or proptech roles. I'm passionate about clean code and great user experience.",
    about_more: "Know More",
    stat_trading: "Months Trading",
    stat_projects: "Live Projects",
    stat_grad: "BSc Graduate",
    stat_ielts: "IELTS Band",
    skills_label: "Tech Stack",
    skills_title: "Skills & Tools",
    exp_label: "My Journey",
    exp_title: "Experience",
    tl_soon: "Coming Soon",
    tl_dev_title: "Web Development Position",
    tl_dev_sub: "Open to Opportunities",
    tl_dev_p:
      "Actively seeking frontend or full-stack roles. Ready to contribute and grow with a driven team.",
    proj_label: "What I've Built",
    proj_title: "Projects",
    proj_soon: "More Coming Soon",
    proj_soon_p: "Next project is in the works. Watch this space!",
    btn_all_proj: "View All Projects",
    svc_label: "What I Offer",
    svc_title: "Services",
    svc1_title: "Web Development",
    svc1_desc:
      "End-to-end development using the MERN stack. From concept to deployment — fast, functional & scalable.",
    svc2_title: "Frontend Development",
    svc2_desc:
      "Pixel-perfect interfaces with HTML, CSS, JS & React. Clean code, great performance, smooth UX.",
    svc3_title: "Responsive UI/UX",
    svc3_desc:
      "Designs that shine on every device — mobile, tablet, desktop. Built with accessibility in mind.",
    contact_label: "Let's Connect",
    contact_title: "Get In Touch",
    contact_intro:
      "Available for remote & on-site work. Let's build something great together.",
    fl_name: "Your Name",
    fl_email: "Your Email",
    fl_msg: "Message",
    btn_send: "Send Message",
    like_text: "Enjoyed my portfolio? Leave a like!",
    footer_rights: "All Rights Reserved",
    chat_name: "Raza's Assistant",
    chat_hi:
      "Hi! I'm Raza's AI assistant. Ask me anything about his skills, projects, or background!",
    chat_ph: "Ask about Raza...",
    chat_note: "🔒 Powered by Google Gemini AI & domain-secured.",
  },
  ur: {
    nav_home: "ہوم",
    nav_about: "تعارف",
    nav_skills: "مہارتیں",
    nav_exp: "تجربہ",
    nav_svc: "خدمات",
    nav_contact: "رابطہ",
    hero_chip: "کام کے لیے دستیاب",
    hero_tag: "سی ایس گریجویٹ • ویب ڈویلپر • ٹریڈر",
    btn_hire: "ملازمت دیں",
    btn_dl: "سی وی ڈاؤنلوڈ",
    btn_view: "سی وی دیکھیں",
    scroll_down: "نیچے",
    about_label: "میرے بارے میں جانیں",
    about_title: "تعارف",
    about_p1:
      "میں IST اسلام آباد سے کمپیوٹر سائنس گریجویٹ ہوں، MERN اسٹیک پر فل اسٹیک ویب ایپلیکیشن بنا رہا ہوں۔",
    about_p2:
      "میرا تجربہ سافٹ ویئر ڈویلپمنٹ، ٹریڈنگ اور کاروبار میں ہے۔ میں فن ٹیک یا پروپ ٹیک رولز کے لیے موزوں ہوں۔",
    about_more: "مزید جانیں",
    stat_trading: "ماہ ٹریڈنگ",
    stat_projects: "لائیو پروجیکٹس",
    stat_grad: "بی ایس سی",
    stat_ielts: "آئیلٹس",
    skills_label: "ٹیک اسٹیک",
    skills_title: "مہارتیں اور ٹولز",
    exp_label: "میرا سفر",
    exp_title: "تجربہ",
    tl_soon: "جلد آئے گا",
    tl_dev_title: "ویب ڈویلپمنٹ پوزیشن",
    tl_dev_sub: "مواقع کے لیے کھلا",
    tl_dev_p:
      "فرنٹ اینڈ یا فل اسٹیک رولز کی تلاش میں۔ ایک اچھی ٹیم کے ساتھ کام کرنے کے لیے تیار۔",
    proj_label: "میرے کام",
    proj_title: "پروجیکٹس",
    proj_soon: "مزید جلد آئیں گے",
    proj_soon_p: "اگلا پروجیکٹ زیر تعمیر ہے!",
    btn_all_proj: "تمام پروجیکٹس دیکھیں",
    svc_label: "میری خدمات",
    svc_title: "خدمات",
    svc1_title: "ویب ڈویلپمنٹ",
    svc1_desc: "MERN اسٹیک کے ساتھ مکمل ویب ڈویلپمنٹ۔",
    svc2_title: "فرنٹ اینڈ ڈویلپمنٹ",
    svc2_desc: "HTML، CSS، JS اور React کے ساتھ بہترین انٹرفیس۔",
    svc3_title: "ریسپانسیو UI/UX",
    svc3_desc: "ہر ڈیوائس پر بہترین ڈیزائن۔",
    contact_label: "رابطہ کریں",
    contact_title: "رابطہ",
    contact_intro: "ریموٹ اور آن سائٹ کام کے لیے دستیاب۔",
    fl_name: "آپ کا نام",
    fl_email: "آپ کی ای میل",
    fl_msg: "پیغام",
    btn_send: "پیغام بھیجیں",
    like_text: "پسند آیا؟ لائک کریں!",
    footer_rights: "تمام حقوق محفوظ ہیں",
    chat_name: "رضا کا اسسٹنٹ",
    chat_hi:
      "ہیلو! میں رضا کا AI اسسٹنٹ ہوں۔ رضا کی مہارتوں، پروجیکٹس یا تجربے کے بارے میں پوچھیں!",
    chat_ph: "رضا کے بارے میں پوچھیں...",
    chat_note: "🔒 گوگل Gemini AI سے محفوظ۔",
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_exp: "Expérience",
    nav_svc: "Services",
    nav_contact: "Contact",
    hero_chip: "Disponible pour travailler",
    hero_tag: "Diplômé CS • Développeur Web • Trader",
    btn_hire: "Embauchez-moi",
    btn_dl: "Télécharger CV",
    btn_view: "Voir CV",
    scroll_down: "Défiler",
    about_label: "Apprenez à me connaître",
    about_title: "À Propos",
    about_p1:
      "Diplômé en informatique d'IST Islamabad, je construis des applications web full-stack avec la pile MERN et j'ai 18+ mois d'expérience en trading.",
    about_p2:
      "Mon mix de développement, trading et business me rend idéal pour des rôles fintech ou proptech.",
    about_more: "En savoir plus",
    stat_trading: "Mois de Trading",
    stat_projects: "Projets Live",
    stat_grad: "Diplôme CS",
    stat_ielts: "Score IELTS",
    skills_label: "Stack Tech",
    skills_title: "Compétences et Outils",
    exp_label: "Mon Parcours",
    exp_title: "Expérience",
    tl_soon: "Bientôt",
    tl_dev_title: "Poste Développeur Web",
    tl_dev_sub: "Ouvert aux opportunités",
    tl_dev_p: "Je recherche activement des rôles frontend ou full-stack.",
    proj_label: "Mes Réalisations",
    proj_title: "Projets",
    proj_soon: "Bientôt disponible",
    proj_soon_p: "Le prochain projet est en cours !",
    btn_all_proj: "Voir tous les projets",
    svc_label: "Ce que j'offre",
    svc_title: "Services",
    svc1_title: "Développement Web",
    svc1_desc: "Développement de bout en bout avec la pile MERN.",
    svc2_title: "Développement Frontend",
    svc2_desc: "Interfaces pixel-perfect avec HTML, CSS, JS et React.",
    svc3_title: "UI/UX Responsive",
    svc3_desc: "Designs superbes sur chaque appareil.",
    contact_label: "Contactez-moi",
    contact_title: "Prendre Contact",
    contact_intro: "Disponible pour le travail à distance et sur site.",
    fl_name: "Votre nom",
    fl_email: "Votre email",
    fl_msg: "Message",
    btn_send: "Envoyer",
    like_text: "Vous avez aimé mon portfolio ? Laissez un like !",
    footer_rights: "Tous droits réservés",
    chat_name: "Assistant de Raza",
    chat_hi: "Bonjour ! Posez-moi des questions sur Raza !",
    chat_ph: "Posez une question sur Raza...",
    chat_note: "🔒 Propulsé par Google Gemini AI.",
  },
  de: {
    nav_home: "Start",
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_exp: "Erfahrung",
    nav_svc: "Leistungen",
    nav_contact: "Kontakt",
    hero_chip: "Verfügbar für Arbeit",
    hero_tag: "CS-Absolvent • Web-Entwickler • Trader",
    btn_hire: "Anstellen",
    btn_dl: "CV herunterladen",
    btn_view: "CV ansehen",
    scroll_down: "Scrollen",
    about_label: "Lerne mich kennen",
    about_title: "Über Mich",
    about_p1:
      "CS-Absolvent des IST Islamabad, entwickle Full-Stack-Webanwendungen mit dem MERN-Stack und habe 18+ Monate Erfahrung als Commodity-Trader.",
    about_p2:
      "Meine Kombination aus Softwareentwicklung und Trading macht mich ideal für Fintech- oder Proptech-Rollen.",
    about_more: "Mehr erfahren",
    stat_trading: "Monate Trading",
    stat_projects: "Live-Projekte",
    stat_grad: "CS-Abschluss",
    stat_ielts: "IELTS-Band",
    skills_label: "Tech-Stack",
    skills_title: "Fähigkeiten & Tools",
    exp_label: "Mein Weg",
    exp_title: "Erfahrung",
    tl_soon: "Bald",
    tl_dev_title: "Web-Entwicklerstelle",
    tl_dev_sub: "Offen für Möglichkeiten",
    tl_dev_p: "Ich suche aktiv Frontend- oder Full-Stack-Rollen.",
    proj_label: "Was ich gebaut habe",
    proj_title: "Projekte",
    proj_soon: "Mehr kommt bald",
    proj_soon_p: "Das nächste Projekt ist in Arbeit!",
    btn_all_proj: "Alle Projekte ansehen",
    svc_label: "Was ich anbiete",
    svc_title: "Leistungen",
    svc1_title: "Web-Entwicklung",
    svc1_desc: "Ende-zu-Ende-Entwicklung mit dem MERN-Stack.",
    svc2_title: "Frontend-Entwicklung",
    svc2_desc: "Pixelgenaue Oberflächen mit HTML, CSS, JS und React.",
    svc3_title: "Responsives UI/UX",
    svc3_desc: "Designs für jedes Gerät — mobil, Tablet, Desktop.",
    contact_label: "Kontakt aufnehmen",
    contact_title: "Kontakt",
    contact_intro: "Verfügbar für Remote- und Vor-Ort-Arbeit.",
    fl_name: "Ihr Name",
    fl_email: "Ihre E-Mail",
    fl_msg: "Nachricht",
    btn_send: "Nachricht senden",
    like_text: "Portfolio gefällt Ihnen? Geben Sie ein Like!",
    footer_rights: "Alle Rechte vorbehalten",
    chat_name: "Razas Assistent",
    chat_hi: "Hallo! Stellen Sie mir Fragen über Raza!",
    chat_ph: "Fragen Sie über Raza...",
    chat_note: "🔒 Betrieben von Google Gemini AI.",
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_exp: "Experiencia",
    nav_svc: "Servicios",
    nav_contact: "Contacto",
    hero_chip: "Disponible para trabajar",
    hero_tag: "Graduado CS • Desarrollador Web • Trader",
    btn_hire: "Contrátame",
    btn_dl: "Descargar CV",
    btn_view: "Ver CV",
    scroll_down: "Desplazar",
    about_label: "Conóceme",
    about_title: "Sobre Mí",
    about_p1:
      "Graduado en Ciencias de la Computación del IST Islamabad, construyo aplicaciones web full-stack con el stack MERN y tengo 18+ meses como trader independiente.",
    about_p2:
      "Mi combinación de desarrollo, trading y negocios me hace ideal para roles fintech o proptech.",
    about_more: "Saber más",
    stat_trading: "Meses Trader",
    stat_projects: "Proyectos Live",
    stat_grad: "Grado CS",
    stat_ielts: "Banda IELTS",
    skills_label: "Stack Tecnológico",
    skills_title: "Habilidades y Herramientas",
    exp_label: "Mi Trayectoria",
    exp_title: "Experiencia",
    tl_soon: "Próximamente",
    tl_dev_title: "Puesto de Desarrollador Web",
    tl_dev_sub: "Abierto a oportunidades",
    tl_dev_p: "Buscando activamente roles frontend o full-stack.",
    proj_label: "Lo que he construido",
    proj_title: "Proyectos",
    proj_soon: "Más próximamente",
    proj_soon_p: "¡El próximo proyecto está en marcha!",
    btn_all_proj: "Ver todos los proyectos",
    svc_label: "Lo que ofrezco",
    svc_title: "Servicios",
    svc1_title: "Desarrollo Web",
    svc1_desc: "Desarrollo completo con el stack MERN.",
    svc2_title: "Desarrollo Frontend",
    svc2_desc: "Interfaces perfectas con HTML, CSS, JS y React.",
    svc3_title: "UI/UX Responsive",
    svc3_desc: "Diseños para cada dispositivo.",
    contact_label: "Contacta conmigo",
    contact_title: "Ponte en Contacto",
    contact_intro: "Disponible para trabajo remoto y presencial.",
    fl_name: "Tu nombre",
    fl_email: "Tu email",
    fl_msg: "Mensaje",
    btn_send: "Enviar mensaje",
    like_text: "¿Te gustó mi portfolio? ¡Dale un like!",
    footer_rights: "Todos los derechos reservados",
    chat_name: "Asistente de Raza",
    chat_hi: "¡Hola! Soy el asistente de Raza. ¡Pregúntame lo que quieras!",
    chat_ph: "Pregunta sobre Raza...",
    chat_note: "🔒 Impulsado por Google Gemini AI.",
  },
};

let currentLang = "en";

function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang] || i18n.en;

  // Set RTL for Urdu
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key]) el.placeholder = t[key];
  });

  closeLang();
  showToast("Language changed!");
}

/* ====== THEME ====== */
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains("dark-theme");
  body.classList.toggle("dark-theme", !isDark);
  body.classList.toggle("light-theme", isDark);
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("theme-label");
  if (icon) icon.className = isDark ? "fa fa-moon" : "fa fa-sun";
  if (label) label.textContent = isDark ? "Dark Mode" : "Light Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.replace("dark-theme", "light-theme");
    const icon = document.getElementById("theme-icon");
    const label = document.getElementById("theme-label");
    if (icon) icon.className = "fa fa-sun";
    if (label) label.textContent = "Light Mode";
  }
}

/* ====== NAV ====== */
function toggleNav() {
  const nav = document.getElementById("side-nav");
  const overlay = document.getElementById("nav-overlay");
  const isOpen = nav && nav.classList.contains("open");
  if (!isOpen) {
    if (nav) nav.classList.add("open");
    if (overlay) {
      overlay.style.display = "block";
      requestAnimationFrame(() => overlay.classList.add("active"));
    }
  } else {
    closeNav();
  }
}
function closeNav() {
  const nav = document.getElementById("side-nav");
  const overlay = document.getElementById("nav-overlay");
  if (nav) nav.classList.remove("open");
  if (overlay) {
    overlay.classList.remove("active");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 320);
  }
}

/* ====== LANG DROPDOWN ====== */
function toggleLang() {
  const drop = document.getElementById("lang-drop");
  if (drop) drop.classList.toggle("lang-hidden");
}
function closeLang() {
  const drop = document.getElementById("lang-drop");
  if (drop) drop.classList.add("lang-hidden");
}

/* ====== TYPING EFFECT ====== */
const typedWords = [
  "Web Developer",
  "Frontend Dev",
  "MERN Stack",
  "Problem Solver",
  "Open to Work",
];
let wordIdx = 0,
  charIdx = 0,
  deleting = false;
function typeEffect() {
  const el = document.getElementById("typed-word");
  if (!el) return;
  const word = typedWords[wordIdx];
  el.textContent = deleting
    ? word.substring(0, charIdx--)
    : word.substring(0, charIdx++);
  if (!deleting && charIdx > word.length) {
    deleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }
  if (deleting && charIdx < 0) {
    deleting = false;
    wordIdx = (wordIdx + 1) % typedWords.length;
  }
  setTimeout(typeEffect, deleting ? 60 : 110);
}

/* ====== SCROLL REVEAL ====== */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.05 },
  );
  els.forEach((el) => obs.observe(el));
}

/* ====== BACK TO TOP ====== */
function initBackTop() {
  const btn = document.getElementById("back-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ====== LIKE / HEART ====== */
function handleLike() {
  const btn = document.getElementById("like-btn");
  const heart = document.getElementById("like-heart");
  const count = document.getElementById("like-count");
  if (!btn || !count) return;

  let likes = parseInt(localStorage.getItem("portfolio-likes") || "0");
  const liked = localStorage.getItem("portfolio-liked") === "true";

  if (!liked) {
    likes++;
    localStorage.setItem("portfolio-likes", likes);
    localStorage.setItem("portfolio-liked", "true");
    btn.classList.add("liked");
    showToast("Thank you for the like! ❤️");
  } else {
    likes = Math.max(0, likes - 1);
    localStorage.setItem("portfolio-likes", likes);
    localStorage.setItem("portfolio-liked", "false");
    btn.classList.remove("liked");
  }
  count.textContent = likes;
}
function initLike() {
  const count = document.getElementById("like-count");
  const btn = document.getElementById("like-btn");
  if (!count) return;
  count.textContent = localStorage.getItem("portfolio-likes") || "0";
  if (localStorage.getItem("portfolio-liked") === "true" && btn)
    btn.classList.add("liked");
}

/* ====== TOAST ====== */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.remove("toast-hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("toast-hidden"), 2800);
}

/* ====== CONTACT FORM ====== */
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("f-name")?.value.trim();
  const email = document.getElementById("f-email")?.value.trim();
  const msg = document.getElementById("f-msg")?.value.trim();
  if (!name || !email || !msg) {
    showToast("Please fill all fields.");
    return;
  }
  showToast(`Thanks ${name}! Your message has been noted. 📨`);
  e.target.reset();
}

/* ====== CHATBOT ====== */
let chatOpen = false;
let lastMsgTime = 0;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById("chat-panel");
  const fabIcon = document.getElementById("fab-icon");
  if (panel) panel.classList.toggle("chat-hidden", !chatOpen);
  if (fabIcon) fabIcon.className = chatOpen ? "fas fa-xmark" : "fas fa-robot";
}

function appendMsg(text, cls) {
  const msgs = document.getElementById("chat-msgs");
  if (!msgs) return;
  const div = document.createElement("div");
  div.className = cls;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendMsg() {
  const input = document.getElementById("chat-in");
  const sendBtn = document.getElementById("chat-send-btn");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const now = Date.now();
  if (now - lastMsgTime < 3000) {
    showToast("Please wait a moment...");
    return;
  }
  lastMsgTime = now;

  appendMsg(text, "cb-user");
  input.value = "";
  if (sendBtn) sendBtn.disabled = true;

  // Typing indicator
  const msgs = document.getElementById("chat-msgs");
  const typing = document.createElement("div");
  typing.className = "cb-typing";
  typing.textContent = "Raza's assistant is typing...";
  if (msgs) {
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
  }

  try {
    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text }] }],
      }),
    });
    const data = await res.json();
    typing.remove();
    if (data.error) {
      appendMsg("Sorry, rate limit reached..", "cb-ai");
    } else {
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't get a response. Try again!";
      appendMsg(reply, "cb-ai");
    }
  } catch {
    typing.remove();
    appendMsg(
      "Couldn't connect. Please check your connection and try again.",
      "cb-ai",
    );
  }

  if (sendBtn) sendBtn.disabled = false;
}

function initChat() {
  const input = document.getElementById("chat-in");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMsg();
    });
  }
}

/* ====== ACTIVE NAV ON SCROLL ====== */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  window.addEventListener(
    "scroll",
    () => {
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) cur = s.id;
      });
      links.forEach((a) => {
        a.style.color =
          a.getAttribute("href") === `#${cur}` ? "var(--accent)" : "";
      });
    },
    { passive: true },
  );
}

/* ====== CLOSE MENUS ON OUTSIDE CLICK ====== */
document.addEventListener("click", (e) => {
  const langWrap = document.getElementById("lang-wrap");
  if (langWrap && !langWrap.contains(e.target)) closeLang();
});

/* ====== INIT ====== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  typeEffect();
  initReveal();
  initBackTop();
  initLike();
  initChat();
  initActiveNav();
});
