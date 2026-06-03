import { MessageCircle, Send, Calendar } from 'lucide-react'
import { SITE } from '../../config/site'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function ContactCTA() {
  const { t } = useTranslation()

  return (
    <section id="kontakt" className="section-py scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/20 via-[#FFB347]/8 to-transparent" />
          <div className="glow-orb top-0 left-1/2 h-48 w-96 -translate-x-1/2 bg-[#FF8C00]/20" />
          <div className="relative glass-strong gradient-border p-10 text-center sm:p-14">
            <MessageCircle className="mx-auto mb-6 h-12 w-12 text-[#FF8C00]" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t('contact.desc')}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-8 py-4 text-sm font-semibold text-black shadow-lg shadow-[#FF8C00]/25 transition hover:brightness-110 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {t('contact.telegram')}
              </a>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5 sm:w-auto"
              >
                <Calendar className="h-4 w-4 text-[#FFB347]" />
                {t('contact.consult')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
