// English text. Every visible sentence lives here (and in ur.ts), not inside the components.
// Technology names (React, Node.js, ...) and people/project names are not translated.
export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    services: 'Services',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainMenu: 'Main menu',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    switch: 'switch',
    skip: 'Skip to content',
  },
  common: {
    backToTop: 'Back to top',
    contactMe: 'Contact me',
    backHome: 'Back to Home',
    location: 'Rawalpindi / Islamabad, Pakistan',
  },
  lang: {
    // Name of the OTHER language, because that is what the button switches to.
    name: 'اردو',
    switchLabel: 'Switch language to Urdu',
  },
  pages: {
    homeTitle: 'Raza Ahmed | Web Developer',
    aboutTitle: 'About | Raza Ahmed',
    projectsTitle: 'Projects | Raza Ahmed',
  },
  hero: {
    badge: 'Available for work',
    firstName: 'Raza',
    lastName: 'Ahmed',
    roles: ['Web Developer', 'React + TypeScript', 'MERN Stack', 'Problem Solver', 'Open to Work'],
    tagline: 'CS Graduate • Web Developer • Commodity Trader',
    hire: 'Hire Me',
    download: 'Download CV',
    view: 'View CV',
  },
  section: {
    about: 'About Me',
    skills: 'Skills & Tools',
    experience: 'Experience',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact Me',
  },
  about: {
    knowMore: 'Know More',
    cv: 'CV',
    short: [
      "Computer Science graduate and web developer with experience in MERN-stack web applications. I've spent 18+ months as an independent commodity trader, sharpening my analytical thinking and discipline.",
      "My mix of software development, trading, and business exposure makes me a great fit for fintech or proptech roles. I'm passionate about clean code and great user experience.",
    ],
    stats: {
      projects: 'Live Projects',
      trading: 'Months Trading',
      degree: 'BSc Graduate',
      skills: 'Modern Tech Skills',
    },
    // the full About page
    pageTitle: 'About <hl>Raza</hl>',
    pageSubtitle: 'Background, education, and everything in between.',
    profile: 'Profile',
    technical: 'Technical Skills',
    heading: "Where I'm Heading",
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    interests: 'Interests',
    profileText: [
      'Computer Science graduate and web developer with hands-on experience building responsive web applications with HTML, Tailwind CSS, JavaScript, TypeScript and React, now growing into full-stack work with Node.js and the MERN stack.',
      'Disciplined, with a strong understanding of market psychology. A dedicated, fast learner eager to contribute to a results-driven team and grow within the tech industry.',
    ],
    basedIn:
      'Based in <b>{{location}}</b>. Available for both <b>remote</b> and <b>on-site</b> opportunities.',
    educationItems: [
      {
        title: 'Bachelor of Science in Computer Science',
        place: 'Institute of Space Technology, Islamabad',
        years: '2020 – 2024',
      },
      {
        title: 'Intermediate — Pre-Engineering (FSc)',
        place: 'Milestone College and Academy, Rawalpindi',
        years: '2018 – 2020',
      },
      {
        title: 'Matriculation — Pre-Medical (SSC)',
        place: "Saint Mary's Academy, Rawalpindi",
        years: '2016 – 2018',
      },
    ],
    certificationItems: [
      {
        title: 'IELTS — Academic',
        detail: 'Overall Band Score: 6.5 • British Council • September 2024',
      },
      {
        title: 'Soft Skills Training — 23-Hour Certified Program',
        detail: 'OEC & ICMPD (International Centre for Migration Policy Development) • December 2025',
      },
      {
        title: 'MERN Stack Development — 6-Month Certified Program',
        detail:
          'Hunarmand Punjab — Advanced Digital Skills & Professional Development Program • 2026 (in progress)',
      },
    ],
    languageItems: [
      { name: 'Urdu', level: 'Native' },
      { name: 'English', level: 'Professional Proficiency (IELTS 6.5)' },
    ],
    interestItems: [
      'Web development & open-source contribution',
      'Global financial markets & commodity trading',
      'UI/UX design & creative coding',
      'Tech industry trends — fintech, proptech, AI',
    ],
  },
  skills: {
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database & Auth',
      tools: 'Tools',
      trading: 'Trading',
      roadmap: 'Long-term goal: Cloud + DevOps',
    },
    learning: 'currently learning',
    names: {
      technicalAnalysis: 'Technical Analysis',
      riskManagement: 'Risk Management',
      tradingPsychology: 'Trading Psychology',
      globalMarkets: 'Global Markets',
    },
  },
  experience: {
    items: [
      {
        period: '2023 – Present',
        tag: 'Digital – Trading',
        title: 'Independent Commodity Trader',
        organisation: 'Self-Directed',
        points: [
          'Managing a personal trading account for 18+ months with consistent technical analysis and disciplined risk management',
          'Manage portfolios for select clients',
          'Deep expertise in market psychology, global market dynamics & risk-reward strategies',
        ],
      },
    ],
  },
  projects: {
    live: 'Live',
    code: 'Code',
    moreTitle: 'More Coming Soon',
    moreText: 'Next project is in the works. Watch this space!',
    viewAll: 'View All Projects',
    noDescription: 'No description yet.',
    updated: 'Updated {{date}}',
    desc: {
      'rang-mahal':
        'Full-stack wedding and event planning platform: browse photographers, venues, decorators, catering and salons. Led frontend, responsive design & MongoDB architecture.',
      'seekho-pakistan':
        'MERN learning platform with student, instructor and admin dashboards, lesson progress tracking and JWT authentication. Final project of the Hunarmand Punjab MERN course.',
      'market-signals':
        'Live dashboard for gold and crypto that combines RSI, MACD and moving-average crossovers into one 0–100 composite score, updated over WebSockets. Not a buy/sell tool.',
    },
    pageTitle: 'All <hl>Projects</hl>',
    pageSubtitle: 'Featured work + all public GitHub repositories, kept up to date from GitHub.',
    featuredLabel: 'Handpicked',
    featuredTitle: 'Featured Projects',
    reposLabel: 'GitHub repos',
    reposTitle: 'All Public Repositories',
    loading: 'Loading repositories',
    error: "Couldn't load the repositories right now. GitHub may be limiting requests.",
    errorLink: 'View all repos on GitHub',
    empty: 'No public repositories to show yet.',
  },
  services: {
    items: {
      fullstack: {
        title: 'Full-Stack Web Apps',
        description:
          'End-to-end apps with the MERN stack, from idea to deployment: dashboards, platforms and internal tools.',
      },
      frontend: {
        title: 'Frontend Development',
        description:
          'Clean, fast interfaces with React, TypeScript and Tailwind CSS. Pixel-accurate and easy to maintain.',
      },
      responsive: {
        title: 'Responsive UI/UX',
        description:
          'Layouts that work on phone, tablet and desktop, with light and dark themes and accessibility built in.',
      },
      backend: {
        title: 'REST APIs & Backend',
        description:
          'Node.js and Express APIs with authentication (JWT), validation and database integration.',
      },
      business: {
        title: 'Business & Landing Sites',
        description:
          'Fast, good-looking websites for shops, restaurants and small businesses, ready to share and easy to update.',
      },
      deploy: {
        title: 'Deployment & Optimization',
        description:
          'Putting your site live on Vercel, Netlify or GitHub Pages, plus speed, SEO and bug-fix improvements.',
      },
    },
  },
  contact: {
    intro:
      'Open to web development roles, internships and freelance projects. Send a message and I will reply as soon as I can.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    name: 'Name',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending…',
    sent: 'Thanks! Your message was sent.',
    error: 'Could not send. Please email me at <mail>{{email}}</mail>.',
  },
  wizard: {
    stepOf: 'Step {{n}} of {{total}}',
    titles: ['What do you need?', 'What type of work?', 'What job type?', 'Your details'],
    q1: 'Choose one or more services.',
    q2: 'Which role are you looking for?',
    q3: 'What kind of engagement is it?',
    otherPlaceholder: 'Describe the work',
    work: {
      web: 'Web Developer',
      frontend: 'Frontend Developer',
      fullstack: 'Full-Stack (MERN) Developer',
      backend: 'Backend / API Developer',
      react: 'React Developer',
      other: 'Others',
    },
    job: {
      contract: 'Contract',
      visiting: 'Visiting',
      intern: 'Intern',
      probation: 'Probation',
      permanent: 'Permanent',
    },
    back: 'Back',
    next: 'Next',
    send: 'Send',
    sending: 'Sending…',
    close: 'Close',
    doneTitle: 'Message sent',
    doneText: 'Thanks for reaching out. I will reply to you by email soon.',
    done: 'Done',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    optional: '(optional)',
    message: 'Message',
    error: 'Could not send. Please email me at <mail>{{email}}</mail>.',
  },
  footer: {
    made: 'Designed & developed by <b>Raza Ahmed</b>',
    rights: '© 2026 · All rights reserved',
    like: 'Like this site. {{count}} likes',
    liked: 'You liked this site. {{count}} likes',
  },
}

export type Translation = typeof en
