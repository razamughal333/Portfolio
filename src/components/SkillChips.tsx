import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { SkillGroup } from '../data/about'

type SkillChipsProps = {
  group: SkillGroup
  dashed?: boolean // dashed outline = "not yet, but on the way"
  onCard?: boolean // true when the chips sit inside a card, so they need a different background
}

// A row of small skill pills. Used on the home page and the About page.
export function SkillChips({ group, dashed = false, onCard = false }: SkillChipsProps) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {group.skills.map((skill) => (
        <li
          key={skill.name}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:border-accent ${
            onCard ? 'bg-bg' : 'bg-surface'
          } ${dashed ? 'border-dashed border-accent/60' : 'border-line'}`}
        >
          <FontAwesomeIcon icon={skill.icon} className="text-primary" />
          {skill.name}
        </li>
      ))}
    </ul>
  )
}
