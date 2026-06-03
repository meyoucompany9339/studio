import SectionHeading from '../ui/SectionHeading'
import FAQ from '../ui/FAQ'

const faqItems = [
  {
    question: 'Чи справді розробка безкоштовна?',
    answer:
      'Так. Ми не беремо аванс за дизайн і розробку — інвестуємо в створення вашого сайту самостійно. Ви починаєте оплату лише після запуску за обраним форматом співпраці.',
  },
  {
    question: 'Коли я плачу?',
    answer:
      'Після узгодження проєкту, завершення розробки та публікації сайту. Далі — або щомісячна підписка (сайт як сервіс), або викуп за фіксованою сумою.',
  },
  {
    question: 'Чи можу я викупити сайт?',
    answer:
      'Так. У будь-який момент можна перейти на формат викупу: одноразова оплата, повна передача прав, вихідних файлів і доступів.',
  },
  {
    question: 'Чи можу перейти з сервісної моделі на викуп?',
    answer:
      'Звісно. Багато клієнтів починають із підписки, а потім викуповують сайт, коли переконаються в результаті. Умови викупу обговорюємо індивідуально.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="section-py scroll-mt-24 bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="FAQ" title="Часті запитання" />
        <div className="glass-strong mx-auto max-w-3xl rounded-3xl px-6 sm:px-10">
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  )
}
