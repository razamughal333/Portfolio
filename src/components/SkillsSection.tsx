import { ROADMAP, SKILL_GROUPS } from '../data/about'
import { Section } from './Section'
import { SkillChips } from './SkillChips'

// Home-page skills: one card per area. The skill list itself lives in src/data/about.ts.
export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <div
            key={group.title}
            className={`rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:border-accent/60 ${
              // an odd one out at the end fills the whole row instead of leaving a gap
              index === SKILL_GROUPS.length - 1 && SKILL_GROUPS.length % 2 === 1 ? 'md:col-span-2' : ''
            }`}
          >
            <h3 className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
              {group.title}
              {group.note && (
                <span className="rounded-full border border-accent/60 px-2 py-0.5 text-[10px] tracking-wider text-accent">
                  {group.note}
                </span>
              )}
            </h3>
            <SkillChips group={group} onCard />
          </div>
        ))}

        {/* Where Raza is heading next, so it reads as a goal and not a claim */}
        <div className="rounded-2xl border border-dashed border-accent/60 p-6 md:col-span-2">
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">{ROADMAP.title}</h3>
          <SkillChips group={ROADMAP} dashed />
        </div>
      </div>
    </Section>
  )
}
