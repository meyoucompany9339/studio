import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function Workflow() {
  const { t } = useTranslation()
  const stepsFull = t('cooperation.workflow.steps')
  const stepsShort = t('cooperation.workflow.stepsShort')

  const steps = stepsFull.map((title, i) => ({
    num: String(i + 1).padStart(2, '0'),
    title,
    titleShort: stepsShort[i] ?? title,
  }))

  return (
    <section className="section-py max-md:!py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.workflow.badge')}
          title={t('cooperation.workflow.title')}
        />

        {/* Мобільна — один компактний вертикальний timeline */}
        <div className="glass-strong rounded-2xl border border-white/[0.06] p-4 max-md:block md:hidden">
          <ol className="relative">
            {steps.map((step, i) => (
              <li key={step.num} className="relative flex gap-3">
                <div className="relative flex w-3.5 shrink-0 flex-col items-center">
                  <span
                    className="relative z-10 mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF8C00] shadow-[0_0_8px_rgb(255_140_0/0.4)]"
                    aria-hidden
                  />
                  {i < steps.length - 1 && (
                    <span
                      className="absolute top-3 bottom-0 w-px bg-gradient-to-b from-[#FF8C00]/50 to-[#FF8C00]/12"
                      aria-hidden
                    />
                  )}
                </div>
                <p
                  className={`flex-1 text-sm leading-snug ${i < steps.length - 1 ? 'pb-2.5' : 'pb-0'}`}
                >
                  <span className="font-display font-bold tabular-nums text-[#FFB347]">
                    {step.num}
                  </span>{' '}
                  <span className="font-medium text-white">{step.titleShort}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Десктоп — 6 карток як раніше */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative glass-strong rounded-2xl p-6 transition hover:-translate-y-0.5"
            >
              <span className="font-display text-4xl font-bold text-[#FF8C00]/25 transition group-hover:text-[#FF8C00]/40">
                {step.num}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{step.title}</h3>
              {i < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-[#FF8C00]/50 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
