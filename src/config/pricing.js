/** Єдине джерело цін (USD). Текстові підписи — у i18n. */
export const PRICING = {
  currency: 'USD',
  symbol: '$',
  visitka: 99,
  corporate: 499,
  shop: 1099,
  developmentZero: 0,
  maintenanceMin: 299,
  maintenanceMax: 499,
}

export function formatFromPrice(amount) {
  return `$${amount}`
}

export function formatMaintenanceRange() {
  return `$${PRICING.maintenanceMin}–${PRICING.maintenanceMax}`
}

export const SITE_PLAN_KEYS = ['visitka', 'corporate', 'shop']
