import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PROFILE, ROLES } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'

const SOCIALS: { label: string; href: string; icon: IconDefinition }[] = [
  { label: 'GitHub', href: PROFILE.github, icon: faGithub },
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: faLinkedinIn },
  { label: 'Instagram', href: PROFILE.instagram, icon: faInstagram },
  { label: 'X (Twitter)', href: PROFILE.x, icon: faXTwitter },
  { label: 'Email', href: PROFILE.mailUrl, icon: faEnvelope },
]

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 sm:text-base'

export function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-end overflow-hidden lg:items-center">
      {/* Photo + fade layers. Which photo shows depends on the theme and screen size (see index.css). */}
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-14 sm:px-8 lg:py-0">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.18em] text-text uppercase backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for work
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Raza <span className="text-primary">Ahmed</span>
          </h1>

          {/* Screen readers get the plain text; sighted visitors see the typing effect. */}
          <p className="mt-5 font-mono text-lg sm:text-2xl">
            <span className="sr-only">Web Developer</span>
            <span aria-hidden="true">
              <span className="text-primary">&lt; </span>
              {typed}
              <span className="typing-caret" />
              <span className="text-primary"> /&gt;</span>
            </span>
          </p>

          <p className="mt-3 text-sm text-muted sm:text-lg">
            CS Graduate • Web Developer • Commodity Trader
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={`${buttonBase} bg-primary text-on-primary hover:-translate-y-0.5 hover:brightness-110`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Hire Me
            </a>
            <a
              href={PROFILE.cvUrl}
              download
              className={`${buttonBase} border border-line bg-surface/70 text-text backdrop-blur hover:border-accent hover:text-accent`}
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line bg-surface/70 text-text backdrop-blur hover:border-accent hover:text-accent`}
            >
              <FontAwesomeIcon icon={faEye} />
              View CV
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
