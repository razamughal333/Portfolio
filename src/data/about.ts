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

// Numbers shown in the four cards on the home page. The labels live in the language files (about.stats.<id>).
export const STATS = [
  { id: 'projects', value: '4+' },
  { id: 'trading', value: '18+' },
  { id: 'degree', value: 'CS' },
  { id: 'skills', value: '6+' },
] as const

// `i18nKey` is only set for skills whose name should be translated; technology names stay in English.
export type Skill = { name: string; icon: IconDefinition; i18nKey?: string }

export type SkillGroup = {
  id: string // matches skills.groups.<id> in the language files
  learning?: boolean // shows the small "currently learning" label
  skills: Skill[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
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
    id: 'backend',
    learning: true,
    skills: [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Express', icon: faServer },
      { name: 'REST APIs', icon: faCode },
      { name: 'async / await', icon: faGear },
      { name: 'NPM', icon: faNpm },
    ],
  },
  {
    id: 'database',
    learning: true,
    skills: [
      { name: 'MongoDB', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'ORM', icon: faDatabase },
      { name: 'JWT', icon: faKey },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', icon: faGitAlt },
      { name: 'GitHub', icon: faGithub },
      { name: 'Figma', icon: faFigma },
      { name: 'Agile', icon: faGear },
    ],
  },
  {
    id: 'trading',
    skills: [
      { name: 'Technical Analysis', icon: faChartLine, i18nKey: 'skills.names.technicalAnalysis' },
      { name: 'Risk Management', icon: faShieldHalved, i18nKey: 'skills.names.riskManagement' },
      { name: 'Trading Psychology', icon: faChartLine, i18nKey: 'skills.names.tradingPsychology' },
      { name: 'Global Markets', icon: faChartLine, i18nKey: 'skills.names.globalMarkets' },
    ],
  },
]

// Where Raza is heading next.
export const ROADMAP: SkillGroup = {
  id: 'roadmap',
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
