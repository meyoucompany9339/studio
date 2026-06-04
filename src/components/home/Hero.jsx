import { ArrowRight, Wallet, Zap, Palette, Headphones } from 'lucide-react'
import Button from '../ui/Button'
import DeviceShowcase from '../devices/DeviceShowcase'
import { SITE } from '../../config/site'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function Hero() {
  const { t, locale } = useTranslation()

  const heroPerks = [
    { icon: Wallet, label: t('hero.perks.noDeposit') },
    { icon: Zap, label: t('hero.perks.launch') },
    { icon: Palette, label: t('hero.perks.design') },
    { icon: Headphones, label: t('hero.perks.support') },
  ]

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

      <div className="relative mx-auto max-w-7xl px-4 pt-3 pb-4 sm:px-6 lg:px-8 lg:pt-5 lg:pb-5 max-md:pt-0 max-md:pb-2">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] lg:gap-6 xl:gap-8 max-md:flex max-md:flex-col max-md:gap-2">
          <div className="relative z-20 min-w-0 max-w-[500px] justify-self-start lg:max-w-none max-md:order-1">
            <p className="mb-5 inline-flex w-fit items-center rounded-full border border-[#FF8C00]/20 bg-[#0a0a0a]/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF8C00] max-md:mb-2 max-md:px-2.5 max-md:py-0.5 max-md:text-[9px] max-md:tracking-[0.08em]">
              {SITE.name} — {t('site.tagline')}
            </p>

            <h1
              className={`font-display font-extrabold leading-[1.1] tracking-tight text-white text-[clamp(1.35rem,3.1vw,2.5rem)] lg:text-[2.5rem] xl:text-[2.65rem] max-md:text-[1.625rem] max-md:leading-[1.08] ${locale === 'uk' ? 'whitespace-nowrap max-md:whitespace-normal' : ''}`}
            >
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.titleAccent')}</span>
            </h1>

            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.7] text-[#9ca3af] sm:text-base sm:leading-relaxed max-md:mt-2 max-md:text-sm max-md:leading-snug">
              {t('hero.desc')}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center max-md:mt-3 max-md:gap-2">
              <Button to="/spivpratsia" className="w-full sm:w-auto max-md:!py-2 max-md:!text-sm">
                {t('hero.ctaFormats')}
                <ArrowRight className="h-4 w-4 max-md:h-3.5 max-md:w-3.5" />
              </Button>
              <Button
                to="/spivpratsia#faq"
                variant="secondary"
                className="w-full sm:w-auto max-md:!py-2 max-md:!text-sm"
              >
                {t('hero.ctaMore')}
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 max-md:mt-3 max-md:gap-1.5">
              {heroPerks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-3 rounded-xl border border-[#FF8C00]/10 px-3 py-3.5 sm:px-4 sm:py-4 max-md:gap-1.5 max-md:rounded-md max-md:px-2 max-md:py-1.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF8C00]/15 max-md:h-7 max-md:w-7 max-md:rounded">
                    <Icon
                      className="h-5 w-5 text-[#FF8C00] max-md:h-3.5 max-md:w-3.5"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="text-sm font-semibold leading-snug text-white max-md:text-[10px] max-md:leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-0 min-w-0 lg:-mr-2 xl:-mr-4 max-md:order-2 max-md:-mx-2">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent max-md:block md:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-24 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:block"
              aria-hidden
            />
            <DeviceShowcase />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] max-md:block md:hidden"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
