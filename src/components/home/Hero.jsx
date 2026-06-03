import { ArrowRight, Check } from 'lucide-react'
import Button from '../ui/Button'
import DeviceShowcase from '../devices/DeviceShowcase'

const perks = [
  'Без оплати за розробку',
  'Запуск за 2–4 тижні',
  'Під ключ',
  'Підтримка після запуску',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 pt-4 pb-5 sm:px-6 lg:px-8 lg:pt-6 lg:pb-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6 xl:gap-10">
          {/* Текст — окрема колонка, завжди поверх */}
          <div className="relative z-10 min-w-0 max-w-[520px] justify-self-start">
            <p className="mb-5 inline-flex w-fit items-center rounded-full border border-[#FF8C00]/20 bg-[#0a0a0a] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF8C00]">
              Веб-студія преміум-класу
            </p>

            <h1 className="font-display text-[2.35rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]">
              Сайт для бізнесу
              <br />
              <span className="gradient-text">від 0€</span>
            </h1>

            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-[#9ca3af] sm:text-base sm:leading-relaxed">
              Створюємо професійні сайти без початкової оплати за розробку. Ви
              платите лише після запуску та вибираєте зручний формат співпраці.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button to="/spivpratsia" className="w-full sm:w-auto">
                Обрати формат співпраці
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/#perevahy" variant="secondary" className="w-full sm:w-auto">
                Дізнатися більше
              </Button>
            </div>

            <ul className="mt-9 grid max-w-md grid-cols-2 gap-x-6 gap-y-3.5">
              {perks.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FF8C00]/15 ring-1 ring-[#FF8C00]/40">
                    <Check className="h-3 w-3 text-[#FF8C00]" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] leading-snug text-white/70 sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Зображення — тільки права колонка, без наїзду на текст */}
          <div className="relative z-0 min-w-0 overflow-hidden lg:-mr-4 xl:-mr-6">
            <DeviceShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
