import SectionHeading from '../ui/SectionHeading'
import FAQ from '../ui/FAQ'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function FAQSection() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="section-py scroll-mt-24 bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.faq.badge')}
          title={t('cooperation.faq.title')}
        />
        <div className="glass-strong mx-auto max-w-3xl rounded-3xl px-6 sm:px-10">
          <FAQ items={t('cooperation.faq.items')} />
        </div>
      </div>
    </section>
  )
}
