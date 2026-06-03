import SitePreview from './SitePreview'

export default function LaptopMockup() {
  return (
    <div
      className="device-rim-glow relative mx-auto w-full max-w-[min(100%,720px)] lg:max-w-[740px]"
      style={{ perspective: '1200px', perspectiveOrigin: '50% 35%' }}
    >
      <div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(4deg)',
        }}
      >
        {/* Екран */}
        <div
          className="relative z-[2]"
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center bottom',
            transform: 'rotateX(-22deg)',
          }}
        >
          <div
            className="device-rim-border relative rounded-t-[1.2rem] p-[10px] pb-[6px]"
            style={{
              background:
                'linear-gradient(165deg, #3d3d3d 0%, #222 40%, #111 100%)',
              boxShadow: `
                0 0 0 1px rgb(255 140 0 / 0.35),
                0 0 24px rgb(255 140 0 / 0.25),
                0 0 60px rgb(255 140 0 / 0.12),
                inset 0 1px 0 rgb(255 179 71 / 0.25),
                inset 1px 0 0 rgb(255 140 0 / 0.15)
              `,
            }}
          >
            <div className="absolute left-1/2 top-[12px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#222] ring-1 ring-white/10" />

            <div
              className="overflow-hidden rounded-[10px] bg-black"
              style={{
                boxShadow:
                  '0 0 0 1px rgb(0 0 0) inset, 0 0 20px rgb(255 140 0 / 0.08) inset',
              }}
            >
              <div className="aspect-[16/10] w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[300px]">
                <SitePreview variant="desktop" />
              </div>
            </div>
          </div>
        </div>

        {/* Петля */}
        <div
          className="relative z-[3] mx-auto h-[5px] w-[93%] rounded-sm"
          style={{
            background: 'linear-gradient(180deg, #3a3a3a, #1a1a1a)',
            boxShadow: '0 0 8px rgb(255 140 0 / 0.2)',
          }}
        />

        {/* Основа / клавіатура */}
        <div
          className="device-rim-border relative z-[1] mx-auto w-full rounded-b-[1.25rem] rounded-t-[2px] px-5 pb-4 pt-2.5"
          style={{
            background:
              'linear-gradient(180deg, #2a2a2a 0%, #161616 55%, #0c0c0c 100%)',
            boxShadow: `
              0 0 0 1px rgb(255 140 0 / 0.28),
              0 0 20px rgb(255 140 0 / 0.18),
              inset 0 -1px 0 rgb(255 140 0 / 0.12),
              0 30px 60px -20px rgb(0 0 0 / 0.85)
            `,
          }}
        >
          <div className="mx-auto mb-2.5 h-[3px] w-12 rounded-full bg-[#333]" />
          <div className="grid grid-cols-12 gap-[2px] px-0.5 opacity-25">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[1.5/1] rounded-[1px] bg-gradient-to-b from-white/30 to-white/5"
              />
            ))}
          </div>
          <div className="mx-auto mt-2.5 h-10 w-24 rounded-md border border-white/[0.05] bg-[#0a0a0a]/90" />
        </div>
      </div>
    </div>
  )
}
