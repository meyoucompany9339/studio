/** Преміальний mockup — головний візуал Hero */
export default function DeviceShowcase() {
  return (
    <div className="hero-device-stage relative flex w-full min-h-[300px] items-center justify-center sm:min-h-[340px] lg:min-h-[400px] lg:justify-end max-md:max-h-[168px] max-md:min-h-0 max-md:items-end max-md:pt-1">
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        <div className="laptop-backlight-core absolute inset-[-10%] opacity-100" />
        <div className="glow-orb absolute left-[5%] top-[22%] h-56 w-72 bg-[#FF8C00]/45 sm:h-64 sm:w-80" />
        <div className="glow-orb absolute right-[-5%] top-[30%] h-48 w-56 bg-[#FFB347]/30" />
        <div className="glow-orb absolute left-[20%] top-[45%] h-40 w-96 bg-[#FF8C00]/25 animate-glow-pulse" />

        <div className="light-streak light-streak-hero-1" />
        <div className="light-streak light-streak-hero-2" />
        <div className="light-streak light-streak-hero-3" />
        <div className="light-streak light-streak-hero-4" />
        <div className="absolute left-[-8%] top-[28%] h-[3px] w-[115%] bg-gradient-to-r from-transparent via-[#FF8C00]/65 to-transparent blur-[1px]" />
        <div className="absolute left-[-3%] top-[38%] h-[2px] w-[108%] bg-gradient-to-r from-transparent via-[#FFB347]/75 to-transparent" />
        <div className="absolute left-[2%] top-[46%] h-px w-[100%] bg-gradient-to-r from-transparent via-[#FF8C00]/45 to-transparent blur-sm" />
        <div className="absolute left-[8%] top-[54%] h-px w-[88%] bg-gradient-to-r from-transparent via-[#FFB347]/30 to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute bottom-[4%] left-1/2 z-0 h-24 w-[92%] -translate-x-1/2 sm:h-28 sm:w-[95%] lg:bottom-[6%]"
        style={{
          background:
            'radial-gradient(ellipse 85% 100% at 50% 100%, rgb(255 140 0 / 0.65) 0%, rgb(255 179 71 / 0.35) 35%, transparent 72%)',
          filter: 'blur(16px)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[2%] left-1/2 z-0 h-12 w-[70%] -translate-x-1/2 rounded-[100%] bg-[#FF8C00]/50 blur-xl lg:bottom-[4%]"
        aria-hidden
      />

      <img
        src="/hero-devices.png"
        alt="Ноутбук та смартфон з преміальним сайтом"
        width={1200}
        height={900}
        draggable={false}
        className="hero-device-img relative z-10 mx-auto h-auto w-full max-w-[420px] object-contain object-center sm:max-w-[480px] lg:mx-0 lg:max-w-[580px] lg:object-right xl:max-w-[640px] pointer-events-none select-none"
      />
    </div>
  )
}
