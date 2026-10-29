import { AboutSummary } from '../components/AboutSummary'
import { ExperienceSection } from '../components/ExperienceSection'
import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
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
      <ExperienceSection />
      <ProjectsSection />
      <Section id="services" title="Services">
        <ComingNext text="// services section: coming next" />
      </Section>
      <Section id="contact" title="Contact Me">
        <ComingNext text="// contact section: coming next" />
      </Section>
    </>
  )
}
