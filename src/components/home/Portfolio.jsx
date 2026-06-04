import { useCallback, useEffect, useState } from 'react'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectPreview from '../portfolio/ProjectPreview'
import { useTranslation } from '../../i18n/LanguageProvider'
import { useSlidesPerView } from '../../hooks/useSlidesPerView'

const projectMeta = [
  { type: 'visitka', subtitle: 'Pick Best Moments' },
  { type: 'corporate' },
  { type: 'shop', subtitle: 'Latore Atelier' },
  { type: 'clinic' },
]

function MobilePortfolioCard({ type, title, subtitle, features }) {
  return (
    <article className="portfolio-card group glass-strong gradient-border flex h-full min-h-[280px] flex-col overflow-hidden rounded-xl transition-all duration-300">
      <div className="min-h-0 flex-[7] border-b border-white/[0.06] p-2">
        <ProjectPreview type={type} compact />
      </div>

      <div className="flex min-h-0 flex-[3] flex-col justify-center px-3 py-2.5">
        <h3 className="font-display text-base font-bold leading-tight text-white">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-[11px] text-[#FFB347]/90">{subtitle}</p>
        )}
        <ul className="mt-2 flex flex-wrap gap-1">
          {features.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/75"
            >
              <Check className="h-2.5 w-2.5 shrink-0 text-[#FF8C00]" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const { t } = useTranslation()
  const perView = useSlidesPerView('(max-width: 767px)', 1)
  const [index, setIndex] = useState(0)

  const projects = projectMeta.map(({ type, subtitle }) => {
    const p = t(`portfolio.projects.${type}`)
    return { type, subtitle, title: p.title, features: p.features }
  })

  const maxIndex = Math.max(0, projects.length - perView)

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
    <section id="roboty" className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('portfolio.badge')}
          title={t('portfolio.title')}
          description={t('portfolio.desc')}
        />

        {/* Мобільна — слайдер */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * slideStep}%)` }}
            >
              {projects.map((project) => (
                <div key={project.type} className="w-full shrink-0 px-1.5">
                  <MobilePortfolioCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {projects.length > 1 && (
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
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          {projects.map(({ type, title, subtitle, features }) => (
            <article
              key={type}
              className="group glass-strong gradient-border overflow-hidden rounded-2xl transition hover:-translate-y-1"
            >
              <div className="border-b border-white/[0.06] p-4 sm:p-5">
                <ProjectPreview type={type} />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{title}</h3>
                {subtitle && (
                  <p className="mt-1 text-sm text-[#FFB347]/90">{subtitle}</p>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white/80"
                    >
                      <Check className="h-3 w-3 text-[#FF8C00]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
