import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import { btnOutline, btnPrimary } from './buttonStyles'

const SOCIALS: { label: string; href: string; icon: IconDefinition }[] = [
  { label: 'GitHub', href: PROFILE.github, icon: faGithub },
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: faLinkedinIn },
  { label: 'Instagram', href: PROFILE.instagram, icon: faInstagram },
  { label: 'X (Twitter)', href: PROFILE.x, icon: faXTwitter },
  { label: 'Email', href: PROFILE.mailUrl, icon: faEnvelope },
]

export function Hero() {
  const { t } = useTranslation()
  // New array only when the language changes, so the typing effect doesn't restart on every render.
  const roles = useMemo(() => t('hero.roles', { returnObjects: true }) as string[], [t])
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-end overflow-hidden lg:items-center">
      {/* Photo + fade layers. Which photo shows depends on the theme and screen size (see index.css). */}
      <div className="hero-photo-skeleton skeleton" aria-hidden="true" />
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-28 sm:px-8 sm:pb-14 lg:py-0">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.18em] text-text uppercase backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t('hero.badge')}
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            {t('hero.firstName')} <span className="text-primary">{t('hero.lastName')}</span>
          </h1>

          {/* Screen readers get the plain text; sighted visitors see the typing effect. */}
          <p className="mt-5 font-mono text-lg sm:text-2xl">
            <span className="sr-only">{roles[0]}</span>
            <span aria-hidden="true" dir="ltr" className="inline-flex items-center gap-2">
              <bdi dir="ltr" className="text-primary">&lt;</bdi>
              <bdi className="whitespace-pre">{typed}</bdi>
              <span className="typing-caret" />
              <bdi dir="ltr" className="text-primary">/&gt;</bdi>
            </span>
          </p>

          <p className="mt-3 text-sm text-muted sm:text-lg">
            {t('hero.tagline')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={btnPrimary}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {t('hero.hire')}
            </a>
            <a
              href={PROFILE.cvUrl}
              download
              className={btnOutline}
            >
              <FontAwesomeIcon icon={faDownload} />
              {t('hero.download')}
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
            >
              <FontAwesomeIcon icon={faEye} />
              {t('hero.view')}
            </a>
          </div>

          <ul className="mt-8 flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-line bg-surface/70 text-lg text-text backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
