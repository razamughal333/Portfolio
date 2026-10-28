import { useEffect, useState } from 'react'

// Types a word, holds it, deletes it, then moves to the next word.
export function useTypewriter(words: readonly string[], typeMs = 85, deleteMs = 45, holdMs = 1600) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  // Visitors who asked for less motion just see the first word, no animation.
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (reduceMotion) return
    const word = words[wordIndex]
    const finishedTyping = !deleting && text === word

    const timer = setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true)
        } else if (deleting && text === '') {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        } else {
          setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
        }
      },
      finishedTyping ? holdMs : deleting ? deleteMs : typeMs,
    )
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, reduceMotion, typeMs, deleteMs, holdMs])

  return reduceMotion ? words[0] : text
}
