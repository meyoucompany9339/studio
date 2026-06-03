import { Check, KeyRound, RefreshCw } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const formats = [
  {
    icon: KeyRound,
    variant: 'Варіант 1',
    title: 'Ви викуповуєте сайт',
    points: [
      'Одноразова оплата',
      'Повне право власності',
      'Усі вихідні файли',
      'Повний контроль над сайтом',
      'Можливість перенесення на будь-який хостинг',
    ],
    highlight: false,
  },
  {
    icon: RefreshCw,
    variant: 'Варіант 2',
    title: 'Сайт як сервіс',
    points: [
      'Щомісячна оплата',
      'Хостинг включено',
      'Технічна підтримка',
      'Резервне копіювання',
      'Оновлення системи',
      'Постійний супровід',
    ],
    highlight: true,
  },
]

export default function FormatCards() {
  return (
    <section className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Співпраця"
          title="Формати співпраці"
          description="Оберіть модель, яка відповідає вашим цілям після запуску сайту."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {formats.map(({ icon: Icon, variant, title, points, highlight }) => (
            <article
              key={title}
              className={`relative flex flex-col rounded-3xl p-8 transition hover:-translate-y-1 sm:p-10 ${
                highlight
                  ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/20'
                  : 'glass gradient-border'
              }`}
            >
              {highlight && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent" />
              )}
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFB347]">
                {variant}
              </span>
              <div className="mt-4 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF8C00]/15">
                <Icon className="h-7 w-7 text-[#FF8C00]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h3>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF8C00]/15">
                      <Check className="h-3.5 w-3.5 text-[#FF8C00]" />
                    </span>
                    <span className="text-sm sm:text-base">{point}</span>
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
