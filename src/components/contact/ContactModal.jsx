import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useTranslation } from '../../i18n/LanguageProvider'
import ContactForm from './ContactForm'

export default function ContactModal({
  open,
  onClose,
  defaultFormat = 'consult',
  defaultSiteType = '',
}) {
  const { t } = useTranslation()
  const titleId = useId()
  const descId = useId()
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)
  const [dirty, setDirty] = useState(false)
  const [formKey, setFormKey] = useState(0)

  useEffect(() => {
    if (!open) return undefined

    previouslyFocused.current = document.activeElement
    setDirty(false)
    setFormKey((k) => k + 1)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus()
    }, 0)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const list = [...focusable]
      if (list.length === 0) return

      const first = list[0]
      const last = list[list.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  const handleBackdrop = () => {
    if (dirty) return
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={t('contact.form.close')}
        onClick={handleBackdrop}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 flex max-h-[min(92dvh,900px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50 sm:rounded-3xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-white/[0.06] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFB347]">
              {t('contact.form.badge')}
            </p>
            <h2 id={titleId} className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
              {t('contact.form.title')}
            </h2>
            <p id={descId} className="mt-1 text-sm text-muted">
              {t('contact.form.desc')}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-white/55 transition hover:bg-white/5 hover:text-white"
            aria-label={t('contact.form.close')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
          <ContactForm
            key={formKey}
            defaultFormat={defaultFormat}
            defaultSiteType={defaultSiteType}
            onDirtyChange={setDirty}
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
