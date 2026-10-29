import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { NAV_IDS, NAV_ITEMS } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { Logo } from './Logo'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const active = useActiveSection(NAV_IDS, pathname === '/')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Escape closes the menu, and focus moves in and out so keyboard users don't get lost.
  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const menuButton = menuButtonRef.current
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      menuButton?.focus()
    }
  }, [open])

  return (
    <>
      {/* The round 3-dot button, fixed at the top right */}
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-menu"
        className="fixed top-4 right-4 z-40 grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/80 text-text backdrop-blur transition hover:border-accent hover:text-accent"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

      {/* Dark backdrop; clicking it closes the menu */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* The slide-in menu panel on the right */}
      <nav
        id="site-menu"
        aria-label="Main menu"
        inert={!open}
        className={`fixed top-0 right-0 z-50 flex h-full w-72 max-w-[85vw] flex-col border-l border-line bg-surface p-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="h-8" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-line text-text transition hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 font-display text-lg font-semibold transition hover:bg-bg ${
                    isActive ? 'text-primary' : 'text-text'
                  }`}
                >
                  <span
                    className={`size-2 rounded-full transition ${isActive ? 'bg-accent' : 'bg-line'}`}
                    aria-hidden="true"
                  />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          role="switch"
          aria-checked={theme === 'light'}
          onClick={toggleTheme}
          className="mt-auto flex cursor-pointer items-center justify-between rounded-xl border border-line px-4 py-3 text-text transition hover:border-accent"
        >
          <span className="flex items-center gap-3 font-medium">
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            {theme === 'dark' ? 'Dark mode' : 'Light mode'}
          </span>
          <span className="font-mono text-xs text-muted">switch</span>
        </button>
      </nav>
    </>
  )
}
