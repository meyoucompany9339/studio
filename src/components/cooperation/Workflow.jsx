import SectionHeading from '../ui/SectionHeading'

const steps = [
  { num: '01', title: 'Консультація' },
  { num: '02', title: 'Аналіз бізнесу' },
  { num: '03', title: 'Дизайн' },
  { num: '04', title: 'Розробка' },
  { num: '05', title: 'Тестування' },
  { num: '06', title: 'Запуск' },
]

export default function Workflow() {
  return (
    <section className="py-7 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Процес" title="Як ми працюємо" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
