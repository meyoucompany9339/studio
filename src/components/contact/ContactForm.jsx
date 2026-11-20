import { useId, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { useTranslation } from '../../i18n/LanguageProvider'
import { isEmailJsConfigured } from '../../config/emailjs'
import { EmailJsConfigError, sendContactEmail } from '../../services/sendContactEmail'

const SITE_TYPE_KEYS = ['visitka', 'corporate', 'shop', 'other']
const FORMAT_KEYS = ['buyout', 'saas', 'consult']

const LIMITS = {
  name: 80,
  email: 120,
  message: 2000,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function emptyForm(defaults = {}) {
  return {
    name: '',
    email: '',
    siteType: defaults.siteType || '',
    format: defaults.format || 'consult',
    message: '',
    website: '', // honeypot
  }
}

export default function ContactForm({
  defaultFormat = 'consult',
  defaultSiteType = '',
  onSuccess,
  onDirtyChange,
  idPrefix = 'contact',
}) {
  const { t, locale } = useTranslation()
  const formId = useId()
  const [values, setValues] = useState(() =>
    emptyForm({ format: defaultFormat, siteType: defaultSiteType }),
  )
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error | config

  const fieldId = (name) => `${idPrefix}-${name}-${formId}`

  const notifyDirty = (nextValues) => {
    if (!onDirtyChange) return
    const base = emptyForm({ format: defaultFormat, siteType: defaultSiteType })
    const dirty =
      nextValues.name !== base.name ||
      nextValues.email !== base.email ||
      nextValues.message !== base.message ||
      nextValues.siteType !== base.siteType ||
      nextValues.format !== base.format
    onDirtyChange(dirty)
  }

  const update = (field) => (event) => {
    const value = event.target.value
    setValues((prev) => {
      const next = { ...prev, [field]: value }
      notifyDirty(next)
      return next
    })
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
    if (status === 'error' || status === 'config') {
      setStatus('idle')
    }
  }

  const validate = () => {
    const next = {}
    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    if (!name) next.name = t('contact.form.errors.nameRequired')
    else if (name.length > LIMITS.name) next.name = t('contact.form.errors.nameLong')

    if (!email) next.email = t('contact.form.errors.emailRequired')
    else if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
      next.email = t('contact.form.errors.emailInvalid')
    }

    if (!values.siteType) next.siteType = t('contact.form.errors.siteTypeRequired')
    if (!FORMAT_KEYS.includes(values.format)) {
      next.format = t('contact.form.errors.formatRequired')
    }

    if (!message) next.message = t('contact.form.errors.messageRequired')
    else if (message.length > LIMITS.message) {
      next.message = t('contact.form.errors.messageLong')
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'loading') return

    // Honeypot filled → pretend success without sending (no personal data logged).
    if (values.website.trim()) {
      setStatus('success')
      setValues(emptyForm({ format: defaultFormat, siteType: defaultSiteType }))
      onDirtyChange?.(false)
      onSuccess?.()
      return
    }

    if (!validate()) return

    if (!isEmailJsConfigured()) {
      setStatus('config')
      return
    }

    setStatus('loading')

    try {
      const submittedAt = new Date().toLocaleString(
        locale === 'ar' ? 'ar' : locale === 'en' ? 'en-GB' : 'uk-UA',
        { dateStyle: 'medium', timeStyle: 'short' },
      )

      await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        siteTypeLabel: t(`contact.form.siteTypes.${values.siteType}`),
        formatLabel: t(`contact.form.formats.${values.format}`),
        message: values.message.trim(),
        locale,
        submittedAt,
      })

      setStatus('success')
      setValues(emptyForm({ format: defaultFormat, siteType: defaultSiteType }))
      setErrors({})
      onDirtyChange?.(false)
      onSuccess?.()
    } catch (err) {
      if (err instanceof EmailJsConfigError || err?.code === 'CONFIG_MISSING') {
        setStatus('config')
      } else {
        setStatus('error')
      }
    }
  }

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:ring-2 focus:ring-[#FF8C00]/35 ${
      hasError
        ? 'border-red-400/50 focus:border-red-400/60'
        : 'border-white/10 hover:border-white/20 focus:border-[#FF8C00]/45'
    }`

  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/55'

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-2xl border border-[#FF8C00]/25 bg-[#FF8C00]/10 px-5 py-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-10 w-10 text-[#FFB347]" aria-hidden />
        <p className="font-display text-xl font-bold text-white">{t('contact.form.successTitle')}</p>
        <p className="max-w-sm text-sm leading-relaxed text-muted">{t('contact.form.successDesc')}</p>
        <button
          type="button"
          className="mt-2 text-sm font-semibold text-[#FFB347] underline-offset-2 hover:underline"
          onClick={() => setStatus('idle')}
        >
          {t('contact.form.sendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-busy={status === 'loading'}>
      {/* Honeypot — hidden from users and assistive tech */}
      <input
        id={fieldId('website')}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={update('website')}
        className="absolute -left-[9999px] h-px w-px opacity-0"
        aria-hidden="true"
      />

      <div>
        <label htmlFor={fieldId('name')} className={labelClass}>
          {t('contact.form.name')}
        </label>
        <input
          id={fieldId('name')}
          name="name"
          type="text"
          autoComplete="name"
          maxLength={LIMITS.name}
          value={values.name}
          onChange={update('name')}
          className={inputClass(Boolean(errors.name))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? fieldId('name-error') : undefined}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p id={fieldId('name-error')} className="mt-1.5 text-xs text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={fieldId('email')} className={labelClass}>
          {t('contact.form.email')}
        </label>
        <input
          id={fieldId('email')}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={LIMITS.email}
          value={values.email}
          onChange={update('email')}
          className={inputClass(Boolean(errors.email))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? fieldId('email-error') : undefined}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p id={fieldId('email-error')} className="mt-1.5 text-xs text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId('siteType')} className={labelClass}>
            {t('contact.form.siteType')}
          </label>
          <select
            id={fieldId('siteType')}
            name="siteType"
            value={values.siteType}
            onChange={update('siteType')}
            className={`${inputClass(Boolean(errors.siteType))} appearance-none`}
            aria-invalid={Boolean(errors.siteType)}
            disabled={status === 'loading'}
          >
            <option value="" className="bg-[#111]">
              {t('contact.form.siteTypePlaceholder')}
            </option>
            {SITE_TYPE_KEYS.map((key) => (
              <option key={key} value={key} className="bg-[#111]">
                {t(`contact.form.siteTypes.${key}`)}
              </option>
            ))}
          </select>
          {errors.siteType && (
            <p className="mt-1.5 text-xs text-red-300">{errors.siteType}</p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('format')} className={labelClass}>
            {t('contact.form.format')}
          </label>
          <select
            id={fieldId('format')}
            name="format"
            value={values.format}
            onChange={update('format')}
            className={`${inputClass(Boolean(errors.format))} appearance-none`}
            aria-invalid={Boolean(errors.format)}
            disabled={status === 'loading'}
          >
            {FORMAT_KEYS.map((key) => (
              <option key={key} value={key} className="bg-[#111]">
                {t(`contact.form.formats.${key}`)}
              </option>
            ))}
          </select>
          {errors.format && (
            <p className="mt-1.5 text-xs text-red-300">{errors.format}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('message')} className={labelClass}>
          {t('contact.form.message')}
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={4}
          maxLength={LIMITS.message}
          value={values.message}
          onChange={update('message')}
          className={`${inputClass(Boolean(errors.message))} min-h-[110px] resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? fieldId('message-error') : undefined}
          disabled={status === 'loading'}
          placeholder={t('contact.form.messagePlaceholder')}
        />
        <div className="mt-1 flex items-center justify-between gap-2">
          {errors.message ? (
            <p id={fieldId('message-error')} className="text-xs text-red-300">
              {errors.message}
            </p>
          ) : (
            <span className="text-[11px] text-white/35">{t('contact.form.messageHint')}</span>
          )}
          <span className="shrink-0 text-[11px] text-white/35">
            {values.message.length}/{LIMITS.message}
          </span>
        </div>
      </div>

      {(status === 'error' || status === 'config') && (
        <div
          className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-500/10 px-3.5 py-3 text-sm text-red-100"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden />
          <div className="min-w-0 space-y-1">
            <p>
              {status === 'config'
                ? t('contact.form.configError')
                : t('contact.form.sendError')}
            </p>
            {status === 'error' && (
              <button
                type="button"
                className="font-semibold text-[#FFB347] underline-offset-2 hover:underline"
                onClick={() => setStatus('idle')}
              >
                {t('contact.form.retry')}
              </button>
            )}
          </div>
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-white/40">{t('contact.form.privacy')}</p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#FF8C00]/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t('contact.form.sending')}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            {t('contact.form.submit')}
          </>
        )}
      </button>

      {/* Mount point for a future CAPTCHA widget (EmailJS / reCAPTCHA). */}
      <div data-contact-captcha-slot="" hidden aria-hidden="true" />
    </form>
  )
}
