import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getTranslation, translations } from './translations'

const STORAGE_KEY = 'aurea-locale'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'uk'
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'uk'
  })

  const setLocale = useCallback((next) => {
    const value = next === 'en' ? 'en' : 'uk'
    setLocaleState(value)
    localStorage.setItem(STORAGE_KEY, value)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'uk' ? 'en' : 'uk')
  }, [locale, setLocale])

  const t = useCallback((key) => getTranslation(locale, key) ?? key, [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'uk'
    const meta = translations[locale]?.meta
    if (meta?.title) document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc && meta?.description) desc.setAttribute('content', meta.description)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
