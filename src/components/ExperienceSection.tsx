import { useTranslation } from 'react-i18next'
import { Section } from './Section'

type Job = { period: string; tag: string; title: string; organisation: string; points: string[] }

// A vertical timeline: a line on the side, a dot and a card for each job.
// The job details live in the language files (experience.items).
export function ExperienceSection() {
  const { t } = useTranslation()
  const jobs = t('experience.items', { returnObjects: true }) as Job[]

  return (
    <Section id="experience" title={t('section.experience')}>
      <ol className="relative ms-2 border-s border-line ps-8 sm:ms-3">
        {jobs.map((job) => (
          <li key={job.title} className="relative">
            <span className="absolute top-7 -start-[2.4rem] size-3 rounded-full bg-primary ring-4 ring-bg sm:-start-[2.45rem]" />
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-muted">{job.period}</span>
                <span className="rounded-full border border-accent/60 px-3 py-0.5 font-mono text-xs text-accent">
                  {job.tag}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{job.title}</h3>
              <p className="text-sm text-muted">{job.organisation}</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-relaxed text-muted marker:text-accent sm:text-base">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
