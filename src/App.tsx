import { BackToTop } from './components/BackToTop'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'

// Temporary text for sections we haven't built yet.
function ComingNext({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-dashed border-line p-6 font-mono text-sm text-muted">
      {text}
    </p>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <section id="home" className="grid min-h-screen place-items-center px-5">
          <div className="text-center">
            <Logo className="mx-auto h-24 sm:h-32" />
            <p className="mt-8 font-mono text-sm tracking-widest text-muted uppercase">
              Foundation ready — hero comes next
            </p>
          </div>
        </section>

        <Section id="about" title="About Me">
          <ComingNext text="// about section: coming next" />
        </Section>
        <Section id="skills" title="Skills & Tools">
          <ComingNext text="// skills section: coming next" />
        </Section>
        <Section id="experience" title="Experience">
          <ComingNext text="// experience + featured projects: coming next" />
        </Section>
        <Section id="services" title="Services">
          <ComingNext text="// services section: coming next" />
        </Section>
        <Section id="contact" title="Contact Me">
          <ComingNext text="// contact section: coming next" />
        </Section>
      </main>

      <footer className="border-t border-line py-10 text-center text-sm text-muted">
        <Logo className="mx-auto h-8" />
        <p className="mt-4">
          Designed &amp; developed by <span className="font-semibold text-text">Raza Ahmed</span>
        </p>
        <p className="mt-1">© 2026 · All rights reserved</p>
      </footer>

      <BackToTop />
    </>
  )
}
