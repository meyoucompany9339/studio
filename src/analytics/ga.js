import { GA_MEASUREMENT_ID, isAnalyticsConfigured } from '../config/analytics'

const SCRIPT_ID = 'ga4-gtag'

let scriptLoading = null
let initialized = false
let lastPagePath = ''

function loadGtagScript() {
  if (typeof document === 'undefined') return Promise.resolve()
  if (document.getElementById(SCRIPT_ID)) return Promise.resolve()
  if (scriptLoading) return scriptLoading

  scriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
    script.onload = () => resolve()
    script.onerror = () => {
      scriptLoading = null
      reject(new Error('Failed to load GA4'))
    }
    document.head.appendChild(script)
  })

  return scriptLoading
}

/**
 * Loads GA4 only after explicit consent. Does not set analytics cookies beforehand.
 * Uses gtag with Measurement ID only — do not also install GTM with the same GA4 stream.
 */
export async function enableAnalytics() {
  if (!isAnalyticsConfigured() || typeof window === 'undefined') return false

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtagProxy() {
      window.dataLayer.push(arguments)
    }
  }

  await loadGtagScript()

  if (!initialized) {
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    })
    initialized = true
  }

  return true
}

export function disableAnalytics() {
  initialized = false
  lastPagePath = ''
  // Do not remove historical cookies here beyond stopping further hits;
  // user denied consent so we simply never call gtag again this session.
}

export function trackPageView(pathname, search = '') {
  if (!initialized || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  const pagePath = `${pathname || '/'}${search || ''}`
  if (pagePath === lastPagePath) return
  lastPagePath = pagePath

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/**
 * Custom events must never include names, emails, phones, or free-text messages.
 */
export function trackEvent(eventName, params = {}) {
  if (!initialized || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  const safe = {}
  for (const [key, value] of Object.entries(params)) {
    if (value == null) continue
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      safe[key] = value
    }
  }

  window.gtag('event', eventName, safe)
}

export function trackTelegramClick(placement = 'unknown') {
  trackEvent('telegram_click', { placement })
}

export function trackConsultationClick(placement = 'unknown') {
  trackEvent('consultation_click', { placement })
}

export function trackFormSubmitSuccess({ siteType, format } = {}) {
  trackEvent('generate_lead', {
    form_name: 'contact_request',
    site_type: siteType || 'unspecified',
    cooperation_format: format || 'unspecified',
  })
}
