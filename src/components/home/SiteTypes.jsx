import { Check, FileText, Building2, ShoppingCart } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const types = [
  {
    icon: FileText,
    title: 'Сайт-візитка',
    features: ['До 5 сторінок', 'Контакти', 'Карта', 'Форми заявок'],
  },
  {
    icon: Building2,
    title: 'Корпоративний сайт',
    features: ['Послуги', 'Блог', 'Портфоліо', 'CRM'],
  },
  {
    icon: ShoppingCart,
    title: 'Інтернет-магазин',
    features: ['Каталог', 'Кошик', 'Онлайн-оплата', 'Доставка'],
  },
]

export default function SiteTypes() {
  return (
    <section className="relative py-7 sm:py-8 bg-surface-elevated">
      <div className="glow-orb top-1/2 right-0 h-80 w-80 -translate-y-1/2 bg-[#FF8C00]/8" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Портфоліо"
          title="Які сайти ми створюємо"
          description="Від компактної візитки до повноцінного e-commerce — під ваші цілі та бюджет."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {types.map(({ icon: Icon, title, features }) => (
            <article
              key={title}
              className="glass-strong gradient-border flex flex-col rounded-2xl p-8 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8C00]/25 to-[#FFB347]/10 ring-1 ring-[#FF8C00]/30">
                <Icon className="h-7 w-7 text-accent-light" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF8C00]/15">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {f}
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
