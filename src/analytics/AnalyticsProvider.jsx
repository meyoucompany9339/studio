import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import {
  ANALYTICS_CONSENT_KEY,
  isAnalyticsConfigured,
} from '../config/analytics'
import {
  disableAnalytics,
  enableAnalytics,
  trackPageView,
} from './ga'
import CookieConsent from '../components/consent/CookieConsent'

const AnalyticsContext = createContext(null)

function readStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    const value = localStorage.getItem(ANALYTICS_CONSENT_KEY)
    if (value === 'granted' || value === 'denied') return value
  } catch {
    // ignore storage errors
  }
  return null
}

export function AnalyticsProvider({ children }) {
  const location = useLocation()
  const [consent, setConsent] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setConsent(readStoredConsent())
  }, [])

  useEffect(() => {
    let cancelled = false

    async function sync() {
      if (consent !== 'granted' || !isAnalyticsConfigured()) {
        if (consent === 'denied') disableAnalytics()
        setReady(false)
        return
      }

      try {
        const ok = await enableAnalytics()
        if (!cancelled) setReady(Boolean(ok))
      } catch {
        if (!cancelled) setReady(false)
      }
    }

    sync()
    return () => {
      cancelled = true
    }
  }, [consent])

  useEffect(() => {
    if (!ready || consent !== 'granted') return
    trackPageView(location.pathname, location.search)
  }, [ready, consent, location.pathname, location.search])

  const accept = useCallback(() => {
    try {
      localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted')
    } catch {
      // ignore
    }
    setConsent('granted')
  }, [])

  const decline = useCallback(() => {
    try {
      localStorage.setItem(ANALYTICS_CONSENT_KEY, 'denied')
    } catch {
      // ignore
    }
    disableAnalytics()
    setReady(false)
    setConsent('denied')
  }, [])

  const value = useMemo(
    () => ({
      consent,
      analyticsReady: ready,
      acceptAnalytics: accept,
      declineAnalytics: decline,
      showBanner: consent === null,
    }),
    [consent, ready, accept, decline],
  )

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
      <CookieConsent />
    </AnalyticsContext.Provider>
  )
}

export function useAnalyticsConsent() {
  const ctx = useContext(AnalyticsContext)
  if (!ctx) {
    throw new Error('useAnalyticsConsent must be used within AnalyticsProvider')
  }
  return ctx
}
