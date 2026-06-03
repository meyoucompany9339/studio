/** Міні-мокап сайту для секції «Наші роботи» */
export default function ProjectMockup({ type }) {
  const configs = {
    visitka: {
      accent: '#FF8C00',
      nav: ['Головна', 'Послуги', 'Контакти'],
      hero: 'Ваша компанія',
      blocks: ['contact', 'map'],
    },
    corporate: {
      accent: '#3B82F6',
      nav: ['Послуги', 'Блог', 'Портфоліо'],
      hero: 'Корпоративний бренд',
      blocks: ['grid', 'crm'],
    },
    shop: {
      accent: '#FF8C00',
      nav: ['Каталог', 'Кошик', 'Оплата'],
      hero: 'Інтернет-магазин',
      blocks: ['products', 'cart'],
    },
    clinic: {
      accent: '#10B981',
      nav: ['Лікарі', 'Запис', 'Контакти'],
      hero: 'Медична клініка',
      blocks: ['doctors', 'booking'],
    },
  }

  const c = configs[type] || configs.visitka

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#111] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-500/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
        <span className="h-2 w-2 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[9px] text-white/30">preview.site</span>
      </div>
      <div className="p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-12 rounded" style={{ background: c.accent }} />
          <div className="flex gap-2">
            {c.nav.map((n) => (
              <span key={n} className="text-[7px] text-white/35">
                {n}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[10px] font-bold text-white">{c.hero}</p>
        <div className="mt-2 h-1.5 w-2/3 rounded bg-white/10" />

        {type === 'visitka' && (
          <div className="mt-3 space-y-2">
            <div className="h-10 rounded border border-white/10 bg-white/[0.03] p-2">
              <div className="h-1 w-8 rounded bg-white/20" />
              <div className="mt-1 h-1 w-12 rounded bg-white/10" />
            </div>
            <div className="h-8 rounded bg-gradient-to-r from-[#FF8C00]/20 to-transparent" />
            <div className="h-6 rounded border border-dashed border-white/15 bg-white/[0.02]" />
          </div>
        )}

        {type === 'corporate' && (
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 rounded bg-white/[0.04] border border-white/8" />
            ))}
            <div className="col-span-2 h-5 rounded bg-blue-500/15 border border-blue-500/20 flex items-center px-2">
              <span className="text-[6px] text-blue-300/80">CRM</span>
            </div>
          </div>
        )}

        {type === 'shop' && (
          <div className="mt-3 grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded border border-white/8 overflow-hidden">
                <div className="h-6 bg-[#FF8C00]/15" />
                <div className="p-1 h-3 bg-white/[0.03]" />
              </div>
            ))}
            <div className="col-span-3 mt-1 flex gap-1">
              <div className="flex-1 h-5 rounded bg-[#FF8C00]/30" />
              <div className="w-8 h-5 rounded border border-white/15" />
            </div>
          </div>
        )}

        {type === 'clinic' && (
          <div className="mt-3 space-y-1.5">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-2 items-center rounded border border-white/8 p-1.5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20" />
                <div className="flex-1 space-y-0.5">
                  <div className="h-1 w-full rounded bg-white/15" />
                  <div className="h-1 w-2/3 rounded bg-white/8" />
                </div>
              </div>
            ))}
            <div className="h-5 rounded bg-emerald-500/25 text-center text-[6px] leading-5 text-emerald-200/90 font-semibold">
              Запис
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
