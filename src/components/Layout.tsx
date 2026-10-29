import { Outlet } from 'react-router'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollManager } from './ScrollManager'

// The frame around every page: menu, footer, back-to-top button.
export function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
