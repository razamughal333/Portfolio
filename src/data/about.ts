import {
  faAws,
  faCss3Alt,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faChartLine,
  faCode,
  faDatabase,
  faGear,
  faKey,
  faRobot,
  faServer,
  faShieldHalved,
  faWind,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

// Numbers shown in the four cards on the home page.
export const STATS = [
  { value: '4+', label: 'Live Projects' },
  { value: '18+', label: 'Months Trading' },
  { value: 'CS', label: 'BSc Graduate' },
  { value: '6+', label: 'Modern Tech Skills' },
] as const

export const ABOUT_SHORT = [
  "Computer Science graduate and web developer with experience in MERN-stack web applications. I've spent 18+ months as an independent commodity trader, sharpening my analytical thinking and discipline.",
  "My mix of software development, trading, and business exposure makes me a great fit for fintech or proptech roles. I'm passionate about clean code and great user experience.",
] as const

export const ABOUT_PROFILE = [
  'Computer Science graduate and web developer with hands-on experience building responsive web applications with HTML, Tailwind CSS, JavaScript, TypeScript and React, now growing into full-stack work with Node.js and the MERN stack.',
  'Disciplined, with a strong understanding of market psychology. A dedicated, fast learner eager to contribute to a results-driven team and grow within the tech industry.',
] as const

export type Skill = { name: string; icon: IconDefinition }

export type SkillGroup = {
  title: string
  note?: string // small label next to the title, e.g. "learning"
  skills: Skill[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3', icon: faCss3Alt },
      { name: 'JavaScript ES6+', icon: faJs },
      { name: 'TypeScript', icon: faCode },
      { name: 'React', icon: faReact },
      { name: 'Tailwind CSS', icon: faWind },
    ],
  },
  {
    title: 'Backend',
    note: 'currently learning',
    skills: [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Express', icon: faServer },
      { name: 'REST APIs', icon: faCode },
      { name: 'async / await', icon: faGear },
      { name: 'NPM', icon: faNpm },
    ],
  },
  {
    title: 'Database & Auth',
    note: 'currently learning',
    skills: [
      { name: 'MongoDB', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'ORM', icon: faDatabase },
      { name: 'JWT', icon: faKey },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: faGitAlt },
      { name: 'GitHub', icon: faGithub },
      { name: 'Figma', icon: faFigma },
      { name: 'Agile', icon: faGear },
    ],
  },
  {
    title: 'Trading',
    skills: [
      { name: 'Technical Analysis', icon: faChartLine },
      { name: 'Risk Management', icon: faShieldHalved },
      { name: 'Trading Psychology', icon: faChartLine },
      { name: 'Global Markets', icon: faChartLine },
    ],
  },
]

// Where Raza is heading next.
export const ROADMAP: SkillGroup = {
  title: 'Long-term goal: Cloud + DevOps',
  skills: [
    { name: 'Docker', icon: faDocker },
    { name: 'CI/CD', icon: faGear },
    { name: 'Linux', icon: faLinux },
    { name: 'AWS', icon: faAws },
    { name: 'Terraform', icon: faCode },
    { name: 'Kubernetes', icon: faCode },
    { name: 'Python scripting', icon: faPython },
    { name: 'LLMs & agents', icon: faRobot },
    { name: 'Automation', icon: faGear },
  ],
}

export const EDUCATION = [
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
] as const

export const CERTIFICATIONS = [
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
    detail: 'Hunarmand Punjab — Advanced Digital Skills & Professional Development Program • 2026 (in progress)',
  },
] as const

export const LANGUAGES = [
  { name: 'Urdu', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency (IELTS 6.5)' },
] as const

export const INTERESTS = [
  'Web development & open-source contribution',
  'Global financial markets & commodity trading',
  'UI/UX design & creative coding',
  'Tech industry trends — fintech, proptech, AI',
] as const
