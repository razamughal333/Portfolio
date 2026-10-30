// English text. Every visible sentence lives here (and in ur.ts), not inside the components.
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
  },
  lang: {
    // Name of the OTHER language, because that is what the button switches to.
    name: 'اردو',
    switchLabel: 'Switch language to Urdu',
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
}

export type Translation = typeof en
