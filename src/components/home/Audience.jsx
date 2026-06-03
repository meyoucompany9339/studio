import {
  Car,
  Hammer,
  HeartPulse,
  Scissors,
  ShoppingBag,
  HardHat,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const niches = [
  { icon: Scissors, label: 'Салони краси' },
  { icon: HeartPulse, label: 'Медичні клініки' },
  { icon: Car, label: 'Автосервіси' },
  { icon: HardHat, label: 'Будівельні компанії' },
  { icon: UtensilsCrossed, label: 'Ресторани' },
  { icon: ShoppingBag, label: 'Інтернет-магазини' },
  { icon: Hammer, label: 'Майстри' },
  { icon: Sparkles, label: 'Будь-який бізнес' },
]

export default function Audience() {
  return (
    <section className="py-7 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Аудиторія"
          title="Для кого наші рішення"
          description="Працюємо з локальним бізнесом і масштабними брендами в будь-якій ніші."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {niches.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group glass flex flex-col items-center rounded-2xl px-4 py-6 text-center transition hover:border-[#FF8C00]/30 hover:bg-[#FF8C00]/5"
            >
              <Icon className="mb-3 h-7 w-7 text-accent transition group-hover:scale-110" />
              <span className="text-sm font-medium text-white/90 sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
