import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FF8C00] text-[#FF8C00]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const reviews = t('testimonials.items')

  return (
    <section id="vidguky" className="section-py bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t('testimonials.badge')} title={t('testimonials.title')} />

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {reviews.map(({ text, author, role }) => (
            <article
              key={author}
              className="glass gradient-border relative rounded-2xl p-6 sm:p-7"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-[#FF8C00]/15" />
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                &ldquo;{text}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="font-semibold text-white">{author}</p>
                <p className="text-xs text-muted sm:text-sm">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
