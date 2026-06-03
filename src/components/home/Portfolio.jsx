import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectPreview from '../portfolio/ProjectPreview'
import { useTranslation } from '../../i18n/LanguageProvider'

const projectMeta = [
  { type: 'visitka', subtitle: 'Pick Best Moments' },
  { type: 'corporate' },
  { type: 'shop', subtitle: 'Latore Atelier' },
  { type: 'clinic' },
]

export default function Portfolio() {
  const { t } = useTranslation()

  const projects = projectMeta.map(({ type, subtitle }) => {
    const p = t(`portfolio.projects.${type}`)
    return { type, subtitle, title: p.title, features: p.features }
  })

  return (
    <section id="roboty" className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('portfolio.badge')}
          title={t('portfolio.title')}
          description={t('portfolio.desc')}
        />

        <div className="grid gap-8 md:grid-cols-2">
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
