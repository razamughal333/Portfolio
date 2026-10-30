import { LikeButton } from './LikeButton'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center text-sm text-muted">
      <Logo className="mx-auto h-8" />
      <p className="mt-4">
        Designed &amp; developed by <span className="font-semibold text-text">Raza Ahmed</span>
      </p>
      <p className="mt-1">© 2026 · All rights reserved</p>
      <LikeButton />
    </footer>
  )
}
