import { Trophy, Zap, Star, Headphones } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const stats = [
  {
    icon: Trophy,
    value: '50+',
    label: 'сайтів запущено',
    desc: 'Реальні проєкти для бізнесу',
  },
  {
    icon: Zap,
    value: 'до 4',
    suffix: 'тижнів',
    label: 'на запуск',
    desc: 'Чіткий таймлайн без затягувань',
  },
  {
    icon: Star,
    value: '98%',
    label: 'задоволених клієнтів',
    desc: 'Працюємо на результат',
  },
  {
    icon: Headphones,
    value: null,
    label: 'Підтримка після запуску',
    desc: 'Не залишаємо вас самі з технічними питаннями',
  },
]

export default function TrustStats() {
  return (
    <section className="section-py border-y border-white/[0.06] bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Довіра"
          title="Цифри, яким можна довіряти"
          description="Прозора робота, передбачувані терміни та підтримка на кожному етапі."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map(({ icon: Icon, value, suffix, label, desc }) => (
            <article
              key={label}
              className="glass-strong gradient-border group rounded-2xl p-6 transition hover:-translate-y-0.5 sm:p-7"
            >
              <Icon className="mb-4 h-8 w-8 text-[#FF8C00] transition group-hover:scale-105" strokeWidth={1.5} />
              {value ? (
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <span className="gradient-text">{value}</span>
                  {suffix && (
                    <span className="ml-1.5 text-lg font-semibold text-white/90 sm:text-xl">
                      {suffix}
                    </span>
                  )}
                </p>
              ) : (
                <p className="font-display text-xl font-bold leading-snug text-[#FFB347] sm:text-2xl">
                  {label}
                </p>
              )}
              {value && (
                <p className="mt-1 text-sm font-semibold text-white">{label}</p>
              )}
              <p className={`text-xs leading-relaxed text-muted sm:text-sm ${value ? 'mt-2' : 'mt-3'}`}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
