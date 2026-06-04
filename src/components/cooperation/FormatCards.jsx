import { Check, KeyRound, RefreshCw } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function FormatCards() {
  const { t } = useTranslation()

  const formats = [
    { icon: KeyRound, ...t('cooperation.formats.buyout'), highlight: false },
    { icon: RefreshCw, ...t('cooperation.formats.saas'), highlight: true },
  ]

  return (
    <section className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.formats.badge')}
          title={t('cooperation.formats.title')}
          description={t('cooperation.formats.desc')}
        />

        <div className="grid gap-8 max-md:gap-5 lg:grid-cols-2">
          {formats.map(({ icon: Icon, variant, title, points, highlight }) => (
            <article
              key={title}
              className={`relative flex flex-col rounded-3xl transition hover:-translate-y-1 max-md:rounded-2xl max-md:p-6 md:p-8 lg:p-10 ${
                highlight
                  ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/20'
                  : 'glass gradient-border'
              }`}
            >
              {highlight && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent max-md:left-6 max-md:right-6" />
              )}
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFB347]">
                {variant}
              </span>
              <div className="mt-4 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF8C00]/15 max-md:mt-3 max-md:mb-4 max-md:h-11 max-md:w-11 max-md:rounded-xl">
                <Icon className="h-7 w-7 text-[#FF8C00] max-md:h-5 max-md:w-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white max-md:text-xl lg:text-3xl">
                {title}
              </h3>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5 max-md:mt-5 max-md:gap-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/90 max-md:gap-2">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF8C00]/15 max-md:h-5 max-md:w-5">
                      <Check className="h-3.5 w-3.5 text-[#FF8C00] max-md:h-3 max-md:w-3" />
                    </span>
                    <span className="text-sm leading-relaxed max-md:leading-snug md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
