import { useTranslation } from '../../i18n/LanguageProvider'

export default function ModelHero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pt-4 pb-3 sm:pt-6 sm:pb-4">
      <div className="glow-orb top-0 left-1/2 h-80 w-80 -translate-x-1/2 bg-[#FF8C00]/12" />
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('cooperation.heroTitle')}{' '}
          <span className="gradient-text">{t('cooperation.heroAccent')}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {t('cooperation.heroDesc')}
        </p>
      </div>
    </section>
  )
}
