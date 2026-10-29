import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Project } from '../data/projects'

const smallButton =
  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5'

// One featured project. "Live" opens the running site in a new tab, "Code" opens the repo.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-xl border border-line bg-bg text-lg text-primary">
          <FontAwesomeIcon icon={project.icon} />
        </span>
        {project.liveUrl && (
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            Live
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${smallButton} border-primary bg-primary text-on-primary hover:brightness-110`}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Live
          </a>
        )}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${smallButton} border-line text-text hover:border-accent hover:text-accent`}
        >
          <FontAwesomeIcon icon={faGithub} />
          Code
        </a>
      </div>
    </article>
  )
}
