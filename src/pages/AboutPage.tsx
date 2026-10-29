import {
  faArrowLeft,
  faCertificate,
  faCircleUser,
  faCode,
  faDownload,
  faEye,
  faGraduationCap,
  faHeart,
  faLanguage,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { btnOutline, btnPrimary } from '../components/buttonStyles'
import {
  ABOUT_PROFILE,
  CERTIFICATIONS,
  EDUCATION,
  INTERESTS,
  LANGUAGES,
  ROADMAP,
  SKILL_GROUPS,
} from '../data/about'
import type { SkillGroup } from '../data/about'
import { PROFILE } from '../data/profile'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// One titled block on the page (Profile, Education, ...).
function Block({ icon, title, children }: { icon: IconDefinition; title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="flex items-center gap-3 font-display text-xl font-bold text-primary sm:text-2xl">
        <FontAwesomeIcon icon={icon} />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function Chips({ group, dashed = false }: { group: SkillGroup; dashed?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {group.skills.map((skill) => (
        <li
          key={skill.name}
          className={`inline-flex items-center gap-2 rounded-full border bg-surface px-4 py-2 text-sm font-medium ${
            dashed ? 'border-dashed border-accent/60' : 'border-line'
          }`}
        >
          <FontAwesomeIcon icon={skill.icon} className="text-primary" />
          {skill.name}
        </li>
      ))}
    </ul>
  )
}

export function AboutPage() {
  useDocumentTitle('About | Raza Ahmed')

  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </Link>

      <header className="mt-8 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          About <span className="text-primary">Raza</span>
        </h1>
        <p className="mt-4 text-muted">Background, education, and everything in between.</p>
      </header>

      <Block icon={faCircleUser} title="Profile">
        <div className="space-y-4 leading-relaxed text-muted">
          {ABOUT_PROFILE.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Based in <strong className="text-text">{PROFILE.location}</strong>. Available for both{' '}
            <strong className="text-text">remote</strong> and <strong className="text-text">on-site</strong>{' '}
            opportunities.
          </p>
        </div>
      </Block>

      <Block icon={faCode} title="Technical Skills">
        <div className="space-y-7">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
                {group.title}
                {group.note && (
                  <span className="rounded-full border border-accent/60 px-2 py-0.5 text-[10px] tracking-wider text-accent">
                    {group.note}
                  </span>
                )}
              </h3>
              <Chips group={group} />
            </div>
          ))}
        </div>
      </Block>

      <Block icon={faRoute} title="Where I'm Heading">
        <h3 className="mb-3 font-mono text-xs tracking-widest text-muted uppercase">{ROADMAP.title}</h3>
        <Chips group={ROADMAP} dashed />
      </Block>

      <Block icon={faGraduationCap} title="Education">
        <ul className="space-y-3">
          {EDUCATION.map((item) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-display font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted">
                {item.place} • {item.years}
              </p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faCertificate} title="Certifications">
        <ul className="space-y-3">
          {CERTIFICATIONS.map((item) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-display font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faLanguage} title="Languages">
        <ul className="space-y-2 text-muted">
          {LANGUAGES.map((language) => (
            <li key={language.name}>
              <strong className="text-text">{language.name}</strong> — {language.level}
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faHeart} title="Interests">
        <ul className="list-disc space-y-2 pl-5 text-muted marker:text-accent">
          {INTERESTS.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </Block>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a href={PROFILE.cvUrl} download className={btnPrimary}>
          <FontAwesomeIcon icon={faDownload} />
          Download CV
        </a>
        <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className={btnOutline}>
          <FontAwesomeIcon icon={faEye} />
          View CV
        </a>
      </div>
    </div>
  )
}
