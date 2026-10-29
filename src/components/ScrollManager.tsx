import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Runs on every page change: jumps to the #section in the link, or back to the top of the page.
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView() // smooth, thanks to scroll-behavior in index.css
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
