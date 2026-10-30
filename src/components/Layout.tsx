import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'
import { BackToTop } from './BackToTop'
import { ContactWizard } from './ContactWizard'
import { Footer } from './Footer'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Navbar } from './Navbar'
import { ScrollManager } from './ScrollManager'

// The frame around every page: menu, footer, back-to-top button.
export function Layout() {
  const { t } = useTranslation()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        {t('nav.skip')}
      </a>

      <ScrollManager />
      <LanguageSwitcher />
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
      <ContactWizard />
    </>
  )
}
