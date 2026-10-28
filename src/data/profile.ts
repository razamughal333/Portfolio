// Personal details used across the site. Change them here, and every section follows.
const base = import.meta.env.BASE_URL // "/Portfolio/" on GitHub Pages

export const PROFILE = {
  name: 'Raza Ahmed',
  email: 'razahmedmughal@gmail.com',
  location: 'Rawalpindi / Islamabad, Pakistan',
  phone: '+92 336 2236669',
  cvUrl: `${base}Raza_Ahmed_CV.pdf`,
  // A Gmail compose link works even when the computer's default mail app is something else (e.g. Zoom).
  mailUrl: 'https://mail.google.com/mail/?view=cm&to=razahmedmughal@gmail.com',
  github: 'https://github.com/razamughal333',
  linkedin: 'https://linkedin.com/in/raza-ahmed333/',
  instagram: 'https://instagram.com/raza_mughal_333',
  x: 'https://x.com/RazaMughal_333',
} as const

// Words the hero types out, one after another.
export const ROLES = [
  'Web Developer',
  'React + TypeScript',
  'MERN Stack',
  'Problem Solver',
  'Open to Work',
] as const
