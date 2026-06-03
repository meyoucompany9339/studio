import SectionHeading from '../ui/SectionHeading'

const plans = [
  { name: 'Сайт-візитка', price: 'від 150€', popular: false },
  { name: 'Корпоративний сайт', price: 'від 799€', popular: true },
  { name: 'Інтернет-магазин', price: 'від 1099€', popular: false },
  { name: 'Сайт як сервіс', price: 'від 49€/місяць', popular: false },
]

export default function Pricing() {
  return (
    <section className="section-py bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Вартість"
          title="Орієнтовна вартість"
          description="Точна вартість визначається після консультації та аналізу проєкту."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map(({ name, price, popular }) => (
            <article
              key={name}
              className={`relative rounded-2xl p-6 text-center transition hover:-translate-y-0.5 sm:p-7 ${
                popular
                  ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/25'
                  : 'glass border border-white/[0.06]'
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                  Популярно
                </span>
              )}
              <h3 className="text-sm font-semibold text-white/90 sm:text-base">{name}</h3>
              <p className="mt-3 font-display text-2xl font-bold text-[#FFB347] sm:text-3xl">
                {price}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted sm:text-base">
          Точна вартість визначається після консультації та аналізу проєкту.
        </p>
      </div>
    </section>
  )
}
