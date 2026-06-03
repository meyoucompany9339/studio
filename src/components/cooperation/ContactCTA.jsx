import { Mail, MessageCircle } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="pb-7 sm:pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/20 via-[#FFB347]/10 to-transparent" />
          <div className="glow-orb top-0 left-1/2 h-48 w-96 -translate-x-1/2 bg-[#FF8C00]/25" />
          <div className="relative glass-strong gradient-border p-10 sm:p-14 text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-accent mb-6" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Маєте питання?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Із задоволенням відповімо на всі ваші запитання та допоможемо обрати
              найкраще рішення для вашого бізнесу.
            </p>
            <a
              href="mailto:hello@studio.ua"
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-8 py-4 text-sm font-semibold text-black shadow-lg shadow-[#FF8C00]/25 transition hover:brightness-110 hover:shadow-[#FF8C00]/40"
            >
              <Mail className="h-4 w-4" />
              Зв&apos;язатися з нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
