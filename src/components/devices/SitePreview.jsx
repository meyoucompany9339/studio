import CitySkyline from './CitySkyline'

export default function SitePreview({ variant = 'desktop' }) {
  if (variant === 'mobile') {
    return <MobilePreview />
  }
  return <DesktopPreview />
}

const stats = [
  { val: '150+', label: 'Проєктів' },
  { val: '98%', label: 'Клієнтів задоволені' },
  { val: '12р', label: 'Досвіду' },
]

function DesktopPreview() {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#060608] text-left font-sans">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#0a0a0c]/90 px-4 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#FF8C00] to-[#FFB347] sm:h-7 sm:w-7" />
          <span className="text-sm font-bold text-white sm:text-base">Nexus</span>
        </div>
        <nav className="hidden gap-4 sm:flex">
          {['Послуги', 'Про нас', 'Контакти'].map((item) => (
            <span key={item} className="text-[11px] text-white/45 sm:text-xs">
              {item}
            </span>
          ))}
        </nav>
        <span className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-3 py-1 text-[10px] font-bold text-black sm:px-4 sm:py-1.5 sm:text-xs">
          Зв&apos;язок
        </span>
      </header>

      <div className="flex min-h-0 flex-1 flex-col px-4 py-3 sm:px-5 sm:py-4">
        <h1 className="text-base font-extrabold leading-tight text-white sm:text-lg lg:text-xl">
          Розвиваємо{' '}
          <span className="bg-gradient-to-r from-[#FFB347] to-[#FF8C00] bg-clip-text text-transparent">
            ваш бізнес
          </span>
        </h1>
        <p className="mt-1 text-[10px] text-white/45 sm:text-xs">
          Стратегія, дизайн і технології в одному рішенні
        </p>
        <div className="mt-2.5 flex gap-2">
          <span className="rounded-md bg-[#FF8C00] px-3 py-1 text-[10px] font-bold text-black sm:px-4 sm:py-1.5 sm:text-xs">
            Дізнатись
          </span>
          <span className="rounded-md border border-white/15 px-3 py-1 text-[10px] font-medium text-white/70 sm:text-xs">
            Кейси
          </span>
        </div>

        <div className="mt-3 min-h-0 flex-1 overflow-hidden sm:mt-4">
          <CitySkyline />
        </div>

        <div className="mt-3 grid shrink-0 grid-cols-3 gap-2 sm:mt-4 sm:gap-2.5">
          {stats.map(({ val, label }) => (
            <div
              key={label}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-1 py-2 text-center sm:py-2.5"
            >
              <p className="text-sm font-extrabold text-[#FFB347] sm:text-base">{val}</p>
              <p className="mt-0.5 text-[8px] leading-tight text-white/40 sm:text-[9px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobilePreview() {
  return (
    <div className="flex h-full flex-col bg-[#060608] font-sans">
      <header className="flex items-center justify-between border-b border-white/[0.08] px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-gradient-to-br from-[#FF8C00] to-[#FFB347]" />
          <span className="text-xs font-bold text-white">Nexus</span>
        </div>
        <span className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-2.5 py-0.5 text-[9px] font-bold text-black">
          Зв&apos;язок
        </span>
      </header>
      <div className="flex flex-1 flex-col px-3 py-3">
        <h2 className="text-sm font-extrabold leading-snug text-white">
          Розвиваємо <span className="text-[#FFB347]">ваш бізнес</span>
        </h2>
        <p className="mt-1 text-[10px] text-white/45">Стратегія, дизайн і технології</p>
        <span className="mt-2 inline-block w-fit rounded-md bg-[#FF8C00] px-3 py-1 text-[10px] font-bold text-black">
          Дізнатись
        </span>
        <div className="my-3 overflow-hidden">
          <CitySkyline compact />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          {stats.map(({ val, label }) => (
            <div
              key={label}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] py-1.5 text-center"
            >
              <p className="text-xs font-bold text-[#FFB347]">{val}</p>
              <p className="text-[7px] leading-tight text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
