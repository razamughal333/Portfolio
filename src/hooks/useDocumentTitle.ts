import { useEffect } from 'react'

// Sets the browser tab title while a page is open, then puts the old one back.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
