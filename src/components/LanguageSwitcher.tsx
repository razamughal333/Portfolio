import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

// Fixed at the top left. Shows the name of the language it will switch TO.
export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const next = i18n.language === 'ur' ? 'en' : 'ur'

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t('lang.switchLabel')}
      lang={next}
      className="fixed top-4 left-4 z-40 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/80 px-4 text-sm font-semibold text-text backdrop-blur transition hover:border-accent hover:text-accent"
    >
      <FontAwesomeIcon icon={faLanguage} className="text-lg" />
      {t('lang.name')}
    </button>
  )
}
