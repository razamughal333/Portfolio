import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { STATS } from '../data/about'
import { PROFILE } from '../data/profile'
import { btnOutline, btnPrimary } from './buttonStyles'
import { Section } from './Section'

// The short "About Me" block on the home page. "Know More" opens the full About page.
export function AboutSummary() {
  const { t } = useTranslation()
  const paragraphs = t('about.short', { returnObjects: true }) as string[]

  return (
    <Section id="about" title={t('section.about')}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="space-y-4 leading-relaxed text-muted sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className={btnPrimary}>
              {t('about.knowMore')}
              <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
            </Link>
            <a href={PROFILE.cvUrl} download className={btnOutline}>
              <FontAwesomeIcon icon={faDownload} />
              {t('about.cv')}
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <li
              key={stat.id}
              className="rounded-2xl border border-line bg-surface p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-accent"
            >
              <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-mono text-xs tracking-wide text-muted uppercase">{t(`about.stats.${stat.id}`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
