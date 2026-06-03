import { ArrowRight, Wallet, Zap, Palette, Headphones } from 'lucide-react'
import Button from '../ui/Button'
import DeviceShowcase from '../devices/DeviceShowcase'
import { SITE } from '../../config/site'

const heroPerks = [
  { icon: Wallet, label: 'Без авансу' },
  { icon: Zap, label: 'Запуск за 2–4 тижні' },
  { icon: Palette, label: 'Індивідуальний дизайн' },
  { icon: Headphones, label: 'Підтримка після запуску' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[80%] w-[55%] -translate-y-1/2 lg:block"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgb(255 140 0 / 0.12) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-3 pb-4 sm:px-6 lg:px-8 lg:pt-5 lg:pb-5">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] lg:gap-6 xl:gap-8">
          <div className="relative z-20 min-w-0 max-w-[500px] justify-self-start lg:max-w-none">
            <p className="mb-5 inline-flex w-fit items-center rounded-full border border-[#FF8C00]/20 bg-[#0a0a0a]/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF8C00]">
              {SITE.name} — {SITE.tagline.toLowerCase()}
            </p>

            <h1 className="font-display text-[clamp(1.35rem,3.1vw,2.5rem)] font-extrabold leading-[1.1] tracking-tight text-white whitespace-nowrap lg:text-[2.5rem] xl:text-[2.65rem]">
              Преміальні сайти для бізнесу{' '}
              <span className="gradient-text">від 0€</span>
            </h1>

            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.7] text-[#9ca3af] sm:text-base sm:leading-relaxed">
              Створимо сучасний сайт під ключ без авансових платежів за розробку. Ви
              оплачуєте лише після запуску та обираєте зручний формат співпраці.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button to="/spivpratsia" className="w-full sm:w-auto">
                Обрати формат співпраці
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/spivpratsia#faq" variant="secondary" className="w-full sm:w-auto">
                Дізнатися більше
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {heroPerks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-3 rounded-xl border border-[#FF8C00]/10 px-3 py-3.5 sm:px-4 sm:py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF8C00]/15">
                    <Icon className="h-5 w-5 text-[#FF8C00]" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-semibold leading-snug text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-0 min-w-0 lg:-mr-2 xl:-mr-4">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-24 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:block"
              aria-hidden
            />
            <DeviceShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
