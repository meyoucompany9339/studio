export default function ModelHero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-5 sm:pt-16 sm:pb-6">
      <div className="glow-orb top-0 left-1/2 h-96 w-96 -translate-x-1/2 bg-[#FF8C00]/15" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Як працює{' '}
          <span className="gradient-text">наша модель</span>
        </h1>
      </div>
    </section>
  )
}
