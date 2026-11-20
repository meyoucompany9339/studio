import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, isEmailJsConfigured } from '../config/emailjs'

export class EmailJsConfigError extends Error {
  constructor(message = 'EmailJS is not configured') {
    super(message)
    this.name = 'EmailJsConfigError'
    this.code = 'CONFIG_MISSING'
  }
}

/**
 * Sends a contact request via EmailJS.
 * Recipient address must be set in the EmailJS template / service — never from client input.
 *
 * CAPTCHA: when EmailJS CAPTCHA / reCAPTCHA is enabled in the dashboard,
 * pass the token as `captchaToken` (template variable `g-recaptcha-response`).
 */
export async function sendContactEmail({
  name,
  email,
  siteTypeLabel,
  formatLabel,
  message,
  locale,
  submittedAt,
  captchaToken,
}) {
  if (!isEmailJsConfigured()) {
    throw new EmailJsConfigError()
  }

  const templateParams = {
    subject: 'Нова заявка — El Mejor Studio',
    from_name: name,
    from_email: email,
    reply_to: email,
    site_type: siteTypeLabel,
    cooperation_format: formatLabel,
    message,
    submitted_at: submittedAt,
    locale,
  }

  // Ready for EmailJS CAPTCHA / Google reCAPTCHA when activated in the dashboard.
  if (captchaToken) {
    templateParams['g-recaptcha-response'] = captchaToken
  }

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    { publicKey: EMAILJS_CONFIG.publicKey },
  )
}
