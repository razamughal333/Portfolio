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
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { btnOutline, btnPrimary } from '../components/buttonStyles'
import { SkillChips } from '../components/SkillChips'
import { ROADMAP, SKILL_GROUPS } from '../data/about'
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

type TitleDetail = { title: string; detail: string }
type EducationItem = { title: string; place: string; years: string }
type LanguageItem = { name: string; level: string }

export function AboutPage() {
  const { t } = useTranslation()
  useDocumentTitle(t('pages.aboutTitle'))
  const profileText = t('about.profileText', { returnObjects: true }) as string[]
  const education = t('about.educationItems', { returnObjects: true }) as EducationItem[]
  const certifications = t('about.certificationItems', { returnObjects: true }) as TitleDetail[]
  const languages = t('about.languageItems', { returnObjects: true }) as LanguageItem[]
  const interests = t('about.interestItems', { returnObjects: true }) as string[]

  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="rtl:rotate-180" />
        {t('common.backHome')}
      </Link>

      <header className="mt-8 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          <Trans i18nKey="about.pageTitle" components={{ hl: <span className="text-primary" /> }} />
        </h1>
        <p className="mt-4 text-muted">{t('about.pageSubtitle')}</p>
      </header>

      <Block icon={faCircleUser} title={t('about.profile')}>
        <div className="space-y-4 leading-relaxed text-muted">
          {profileText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <Trans
              i18nKey="about.basedIn"
              values={{ location: t('common.location') }}
              components={{ b: <strong className="text-text" /> }}
            />
          </p>
        </div>
      </Block>

      <Block icon={faCode} title={t('about.technical')}>
        <div className="space-y-7">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
                {t(`skills.groups.${group.id}`)}
                {group.learning && (
                  <span className="rounded-full border border-accent/60 px-2 py-0.5 text-[10px] tracking-wider text-accent">
                    {t('skills.learning')}
                  </span>
                )}
              </h3>
              <SkillChips group={group} />
            </div>
          ))}
        </div>
      </Block>

      <Block icon={faRoute} title={t('about.heading')}>
        <h3 className="mb-3 font-mono text-xs tracking-widest text-muted uppercase">{t(`skills.groups.${ROADMAP.id}`)}</h3>
        <SkillChips group={ROADMAP} dashed />
      </Block>

      <Block icon={faGraduationCap} title={t('about.education')}>
        <ul className="space-y-3">
          {education.map((item) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-display font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted">
                {item.place} • {item.years}
              </p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faCertificate} title={t('about.certifications')}>
        <ul className="space-y-3">
          {certifications.map((item) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-display font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faLanguage} title={t('about.languages')}>
        <ul className="space-y-2 text-muted">
          {languages.map((language) => (
            <li key={language.name}>
              <strong className="text-text">{language.name}</strong> — {language.level}
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={faHeart} title={t('about.interests')}>
        <ul className="list-disc space-y-2 ps-5 text-muted marker:text-accent">
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </Block>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a href={PROFILE.cvUrl} download className={btnPrimary}>
          <FontAwesomeIcon icon={faDownload} />
          {t('hero.download')}
        </a>
        <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className={btnOutline}>
          <FontAwesomeIcon icon={faEye} />
          {t('hero.view')}
        </a>
      </div>
    </div>
  )
}
