import { Wallet } from 'lucide-react'

export default function ModelIntro() {
  return (
    <section className="pb-2 sm:pb-4">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong gradient-border rounded-3xl p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF8C00]/15 ring-1 ring-[#FF8C00]/30">
            <Wallet className="h-7 w-7 text-accent" />
          </div>
          <p className="text-lg leading-relaxed text-white sm:text-xl">
            Ми створюємо сайт{' '}
            <span className="font-semibold text-accent-light">повністю за власний рахунок</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Після запуску ви обираєте один із форматів співпраці.
          </p>
        </div>
      </div>
    </section>
  )
}
