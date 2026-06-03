import {
  Zap,
  Pencil,
  Smartphone,
  Search,
  ShieldCheck,
  Headphones,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const benefits = [
  {
    icon: Zap,
    title: 'Швидкий запуск',
    description: 'Сайт готовий за 2–4 тижні з чітким таймлайном',
  },
  {
    icon: Pencil,
    title: 'Індивідуальний дизайн',
    description: 'Унікальний візуал під ваш бренд, без шаблонів',
  },
  {
    icon: Smartphone,
    title: 'Адаптивність',
    description: 'Бездоганний вигляд на телефоні та десктопі',
  },
  {
    icon: Search,
    title: 'SEO оптимізація',
    description: 'Підготовка до пошукових систем з першого дня',
  },
  {
    icon: ShieldCheck,
    title: 'Без ризику',
    description: 'Оплата лише після запуску готового сайту',
  },
  {
    icon: Headphones,
    title: 'Підтримка',
    description: 'Технічний супровід після публікації',
  },
]

export default function Benefits() {
  return (
    <section id="perevahy" className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Переваги"
          title="Чому обирають нас"
          description="Поєднуємо якість топової студії з гнучкими умовами для вашого бізнесу."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-strong flex flex-col items-center rounded-2xl px-4 py-6 text-center transition hover:border-[#FF8C00]/30 hover:-translate-y-0.5 sm:py-7"
            >
              <Icon className="mb-4 h-8 w-8 text-[#FF8C00]" strokeWidth={1.5} />
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
