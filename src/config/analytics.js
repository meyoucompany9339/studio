export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || ''

export function isAnalyticsConfigured() {
  return Boolean(GA_MEASUREMENT_ID) && /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)
}

export const ANALYTICS_CONSENT_KEY = 'elmejor_analytics_consent'
