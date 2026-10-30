import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './locales/en'
import { ur } from './locales/ur'

export const LANGUAGES = ['en', 'ur'] as const
export type Language = (typeof LANGUAGES)[number]

const STORAGE_KEY = 'lang'

function savedLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'ur' ? 'ur' : 'en'
  } catch {
    return 'en'
  }
}

// Tells the browser which language the page is in and which way it reads.
// Urdu reads right-to-left, which also flips the layout automatically.
function applyToPage(language: string) {
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr'
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ur: { translation: ur } },
  lng: savedLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false }, // React already escapes text
})

applyToPage(i18n.language)
i18n.on('languageChanged', (language) => {
  applyToPage(language)
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    /* private mode: the choice just isn't remembered */
  }
})

export default i18n
