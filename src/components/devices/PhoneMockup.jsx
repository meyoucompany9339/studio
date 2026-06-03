import SitePreview from './SitePreview'

export default function PhoneMockup({ style }) {
  return (
    <div
      className="device-rim-glow absolute z-30 w-[38%] min-w-[130px] max-w-[210px] sm:min-w-[155px] sm:max-w-[235px]"
      style={{
        right: '-6%',
        bottom: '14%',
        transformStyle: 'preserve-3d',
        filter: `
          drop-shadow(0 0 1px rgb(255 140 0 / 0.7))
          drop-shadow(0 0 12px rgb(255 140 0 / 0.4))
          drop-shadow(-20px 28px 40px rgb(0 0 0 / 0.7)
        `,
        ...style,
      }}
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[#FF8C00]/25 blur-2xl" />

      <div
        className="device-rim-border relative rounded-[2rem] p-[6px] sm:rounded-[2.2rem] sm:p-2"
        style={{
          background:
            'linear-gradient(155deg, #454545 0%, #2a2a2a 30%, #141414 75%, #0a0a0a 100%)',
          boxShadow: `
            0 0 0 1px rgb(255 140 0 / 0.4),
            0 0 20px rgb(255 140 0 / 0.3),
            inset 0 1px 0 rgb(255 179 71 / 0.2)
          `,
        }}
      >
        <div className="absolute -left-[3px] top-[26%] h-9 w-[3px] rounded-l-full bg-[#404040]" />
        <div className="absolute left-1/2 top-2.5 z-20 h-3.5 w-[68px] -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-4 sm:w-[76px]" />

        <div className="overflow-hidden rounded-[1.5rem] border border-black bg-black sm:rounded-[1.7rem]">
          <div className="aspect-[9/19.5] w-full">
            <SitePreview variant="mobile" />
          </div>
        </div>

        <div className="mx-auto mt-1 h-0.5 w-20 rounded-full bg-white/30 sm:mt-1.5" />
      </div>

      <div className="absolute -bottom-5 left-1/2 h-10 w-[95%] -translate-x-1/2 rounded-full bg-[#FF8C00]/40 blur-xl" />
    </div>
  )
}
