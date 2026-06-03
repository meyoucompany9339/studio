import {
  Zap,
  Pencil,
  Smartphone,
  Search,
  ShieldCheck,
  Headphones,
} from 'lucide-react'
import Badge from '../ui/Badge'

const benefits = [
  {
    icon: Zap,
    title: 'Швидкий запуск',
    description: 'Сайт готовий за 2–4 тижні',
  },
  {
    icon: Pencil,
    title: 'Індивідуальний дизайн',
    description: 'Унікальний дизайн під ваш бренд',
  },
  {
    icon: Smartphone,
    title: 'Адаптивність',
    description: 'Ідеально на всіх пристроях',
  },
  {
    icon: Search,
    title: 'SEO оптимізація',
    description: 'Підготовка до пошукових систем',
  },
  {
    icon: ShieldCheck,
    title: 'Без ризику',
    description: 'Ви платите тільки після запуску',
  },
  {
    icon: Headphones,
    title: 'Підтримка',
    description: 'Технічна підтримка після запуску',
  },
]

export default function Benefits() {
  return (
    <section id="perevahy" className="relative py-7 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center lg:mb-6">
          <Badge className="mb-2">Переваги</Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Чому обирають нас
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass flex flex-col items-center rounded-xl border border-white/[0.06] px-3 py-5 text-center transition hover:border-[#FF8C00]/25 sm:px-4 sm:py-6"
            >
              <Icon className="mb-3 h-7 w-7 text-[#FF8C00] sm:h-8 sm:w-8" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted sm:text-xs">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
