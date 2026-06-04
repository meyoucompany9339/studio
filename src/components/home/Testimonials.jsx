import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'
import { useSlidesPerView } from '../../hooks/useSlidesPerView'

function getInitials(author) {
  return author
    .split(/\s+/)
    .map((part) => part.replace(/\./g, '').charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Stars({ compact = false }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`fill-[#FF8C00] text-[#FF8C00] ${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'}`}
        />
      ))}
    </div>
  )
}

function MobileTestimonialCard({ text, author, role, verifiedLabel }) {
  return (
    <article className="testimonial-card glass gradient-border relative flex h-full flex-col rounded-xl p-4 transition-all duration-300">
      <Quote className="absolute right-4 top-4 h-6 w-6 text-[#FF8C00]/15" />

      <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full border border-[#C9A962]/35 bg-[#C9A962]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#C9A962]">
        <span aria-hidden>✓</span> {verifiedLabel}
      </span>

      <Stars compact />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85">&ldquo;{text}&rdquo;</p>

      <div className="mt-4 flex items-center gap-3 border-t border-white/[0.06] pt-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5E6C8] via-[#FFB347] to-[#C9A227] text-xs font-bold text-[#1a1208] shadow-md shadow-[#FF8C00]/20"
          aria-hidden
        >
          {getInitials(author)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const reviews = t('testimonials.items')
  const verifiedLabel = t('testimonials.verified')
  const perView = useSlidesPerView('(max-width: 767px)', 1)
  const maxIndex = Math.max(0, reviews.length - perView)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  }, [maxIndex])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const slideStep = 100 / perView

  return (
    <section id="vidguky" className="section-py bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t('testimonials.badge')} title={t('testimonials.title')} />

        {/* Мобільна — слайдер */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * slideStep}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.author} className="w-full shrink-0 px-1.5">
                  <MobileTestimonialCard {...review} verifiedLabel={verifiedLabel} />
                </div>
              ))}
            </div>
          </div>

          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/90 text-white/80 shadow-lg transition hover:border-[#C9A962]/40 hover:text-[#FFB347]"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/90 text-white/80 shadow-lg transition hover:border-[#C9A962]/40 hover:text-[#FFB347]"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 bg-gradient-to-r from-[#C9A962] to-[#FF8C00]'
                    : 'w-1.5 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Десктоп — сітка як раніше */}
        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:gap-6">
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
