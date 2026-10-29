import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { ABOUT_SHORT, STATS } from '../data/about'
import { PROFILE } from '../data/profile'
import { btnOutline, btnPrimary } from './buttonStyles'
import { Section } from './Section'

// The short "About Me" block on the home page. "Know More" opens the full About page.
export function AboutSummary() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="space-y-4 leading-relaxed text-muted sm:text-lg">
            {ABOUT_SHORT.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className={btnPrimary}>
              Know More
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href={PROFILE.cvUrl} download className={btnOutline}>
              <FontAwesomeIcon icon={faDownload} />
              CV
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-line bg-surface p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-accent"
            >
              <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-mono text-xs tracking-wide text-muted uppercase">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
