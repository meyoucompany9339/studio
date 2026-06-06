import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getTranslation, SUPPORTED_LOCALES, translations } from './translations'

const STORAGE_KEY = 'aurea-locale'

const LanguageContext = createContext(null)

function isSupportedLocale(value) {
  return SUPPORTED_LOCALES.includes(value)
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'uk'
    const stored = localStorage.getItem(STORAGE_KEY)
    return isSupportedLocale(stored) ? stored : 'uk'
  })

  const setLocale = useCallback((next) => {
    const value = isSupportedLocale(next) ? next : 'uk'
    setLocaleState(value)
    localStorage.setItem(STORAGE_KEY, value)
  }, [])

  const t = useCallback((key) => getTranslation(locale, key) ?? key, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    const meta = translations[locale]?.meta
    if (meta?.title) document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc && meta?.description) desc.setAttribute('content', meta.description)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
