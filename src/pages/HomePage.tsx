import { AboutSummary } from '../components/AboutSummary'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { SkillsSection } from '../components/SkillsSection'

// Temporary text for sections we haven't built yet.
function ComingNext({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-dashed border-line p-6 font-mono text-sm text-muted">{text}</p>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />

      <SkillsSection />
      <Section id="experience" title="Experience">
        <ComingNext text="// experience + featured projects: coming next" />
      </Section>
      <Section id="services" title="Services">
        <ComingNext text="// services section: coming next" />
      </Section>
      <Section id="contact" title="Contact Me">
        <ComingNext text="// contact section: coming next" />
      </Section>
    </>
  )
}
