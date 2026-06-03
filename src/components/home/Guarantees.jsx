import {
  CreditCard,
  Palette,
  Smartphone,
  Search,
  Headphones,
  Server,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const items = [
  { icon: CreditCard, title: 'Без прихованих платежів', desc: 'Прозора вартість після консультації' },
  { icon: Palette, title: 'Унікальний дизайн', desc: 'Не шаблони — індивідуальний візуал' },
  { icon: Smartphone, title: 'Повна адаптація під мобільні', desc: 'Ідеально на всіх екранах' },
  { icon: Search, title: 'SEO-підготовка', desc: 'Базова оптимізація вже в пакеті' },
  { icon: Headphones, title: 'Технічна підтримка', desc: 'Супровід після запуску' },
  { icon: Server, title: 'Безпечний хостинг', desc: 'SSL, резервні копії, стабільність' },
]

export default function Guarantees() {
  return (
    <section className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Гарантії"
          title="Наші гарантії"
          description="Ви отримуєте не просто сайт, а надійне digital-рішення з повним супроводом."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="glass-strong flex gap-4 rounded-2xl border border-white/[0.06] p-5 transition hover:border-[#FF8C00]/25 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF8C00]/10 ring-1 ring-[#FF8C00]/20">
                <Icon className="h-5 w-5 text-[#FF8C00]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
