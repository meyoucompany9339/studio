/** Night city skyline for device screen mockups */
export default function CitySkyline({ compact = false }) {
  const buildings = compact
    ? [55, 75, 50, 90, 60]
    : [45, 62, 48, 78, 52, 88, 58, 72, 42, 65]

  return (
    <div
      className={`relative w-full overflow-hidden ${compact ? 'h-16 rounded-md' : 'h-24 sm:h-28 rounded-lg'}`}
    >
      {/* Night sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1428] via-[#0a1020] to-[#050508]" />

      {/* Ambient city glow */}
      <div className="absolute bottom-0 left-1/2 h-1/2 w-4/5 -translate-x-1/2 bg-[#FF8C00]/15 blur-2xl" />

      {/* Buildings */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-[2px] px-1 sm:gap-0.5 sm:px-2">
        {buildings.map((height, i) => (
          <div
            key={i}
            className="relative flex-1 max-w-[14%]"
            style={{ height: `${height}%` }}
          >
            <div
              className="h-full w-full rounded-t-[1px] sm:rounded-t-sm"
              style={{
                background: `linear-gradient(180deg, #1e2433 0%, #12151c 60%, #0a0a0a 100%)`,
                boxShadow: '0 0 12px rgba(255,140,0,0.08)',
              }}
            >
              {/* Lit windows */}
              <div className="absolute inset-1 grid grid-cols-2 gap-[1px] opacity-80 sm:gap-0.5 sm:p-0.5">
                {Array.from({ length: compact ? 4 : 8 }).map((_, w) => (
                  <div
                    key={w}
                    className={`rounded-[0.5px] ${w % 3 === 0 ? 'bg-[#FFB347]/70' : w % 2 === 0 ? 'bg-[#FF8C00]/40' : 'bg-white/10'}`}
                    style={{ height: compact ? 2 : 3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Horizon line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/30 to-transparent" />
    </div>
  )
}
