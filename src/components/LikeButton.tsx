import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { addLike, getLikes, likesConfigured } from '../lib/likes'

const STORAGE_KEY = 'site-liked-v1'

function readLiked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

// Footer heart. The count lives in the database, so it survives refreshes and new browsers.
// If the database can't be reached, the button hides itself instead of showing a broken count.
export function LikeButton() {
  const [count, setCount] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)
  const [liked, setLiked] = useState(readLiked)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!likesConfigured) return
    let cancelled = false
    getLikes()
      .then((value) => !cancelled && setCount(value))
      .catch(() => !cancelled && setFailed(true)) // hide the button
    return () => {
      cancelled = true
    }
  }, [])

  if (!likesConfigured || failed) return null

  // Still waiting for the database: show a placeholder the same size as the button.
  if (count === null) {
    return <div aria-hidden="true" className="skeleton mx-auto mt-5 h-10 w-[4.5rem] rounded-full" />
  }

  const onClick = async () => {
    if (liked || busy) return // one like per browser
    setBusy(true)
    setLiked(true)
    setCount(count + 1)
    try {
      setCount(await addLike())
      try {
        localStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* private mode: the like still counted */
      }
    } catch {
      setLiked(false) // undo
      setCount(count)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={liked}
      aria-label={liked ? `You liked this site. ${count} likes` : `Like this site. ${count} likes`}
      className={`mx-auto mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-semibold transition duration-200 ${
        liked ? 'border-accent text-accent' : 'border-line text-muted hover:border-accent hover:text-accent'
      }`}
    >
      <FontAwesomeIcon icon={faHeart} className={liked ? 'scale-110' : ''} />
      <span>{count.toLocaleString()}</span>
    </button>
  )
}
