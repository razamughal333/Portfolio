import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Repo } from '../hooks/useGithubRepos'

// Only allow normal web links, so an odd value in a repo's "website" field can't run code.
function safeWebUrl(value: string | null): string | null {
  if (!value) return null
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch {
    return null
  }
}

// "market-signals" -> "Market Signals"
function prettyName(name: string) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

const smallButton =
  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5'

export function RepoCard({ repo }: { repo: Repo }) {
  const liveUrl = safeWebUrl(repo.homepage)
  const updated = new Date(repo.pushedAt).toLocaleDateString('en', { month: 'short', year: 'numeric' })

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold break-words">{prettyName(repo.name)}</h3>
        {repo.language && (
          <span className="shrink-0 rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-muted">
            {repo.language}
          </span>
        )}
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {repo.description ?? 'No description yet.'}
      </p>
      <p className="mt-4 font-mono text-xs text-muted">Updated {updated}</p>

      <div className="mt-5 flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${smallButton} border-primary bg-primary text-on-primary hover:brightness-110`}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Live
          </a>
        )}
        <a
          href={repo.url}
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
