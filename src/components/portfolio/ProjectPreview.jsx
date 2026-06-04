import { useTranslation } from '../../i18n/LanguageProvider'

const previewMeta = {
  visitka: { image: '/portfolio/visitka.jpg', label: 'pick-best-moment.com', previewBg: 'bg-black', imageFit: 'object-cover object-top' },
  corporate: { image: '/portfolio/corporate.jpg', label: 'corporate-group.com', previewBg: 'bg-[#0a0a0a]', imageFit: 'object-cover object-center' },
  shop: { image: '/portfolio/shop.jpg', label: 'latore.store', previewBg: 'bg-white', imageFit: 'object-cover object-top' },
  clinic: { image: '/portfolio/clinic.jpg', label: 'health-clinic.ua', previewBg: 'bg-[#f4f7fb]', imageFit: 'object-cover object-top' },
}

export default function ProjectPreview({ type, compact = false, featured = false, priority = false }) {
  const { t } = useTranslation()
  const meta = previewMeta[type] || previewMeta.visitka
  const alt = t(`portfolio.preview.${type}`) || t('portfolio.preview.visitka')

  if (compact || featured) {
    const sizeClass = featured
      ? 'min-h-[200px] sm:min-h-[240px]'
      : 'min-h-[200px]'

    return (
      <div
        className={`flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] shadow-xl shadow-black/50 ${sizeClass}`}
      >
        <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#141414] px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/90" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/90" />
          <span className="h-2 w-2 rounded-full bg-green-500/90" />
          <span className="ml-1 flex-1 truncate rounded-md bg-white/[0.06] px-2 py-0.5 text-center text-[10px] text-white/40">
            {meta.label}
          </span>
        </div>

        <div className={`relative min-h-0 flex-1 overflow-hidden ${meta.previewBg}`}>
          <img
            src={meta.image}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            className={`portfolio-preview-img absolute inset-0 h-full w-full ${meta.imageFit} transition duration-500 group-hover:scale-[1.03]`}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#141414] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/90" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-center text-[11px] text-white/40">
          {meta.label}
        </span>
      </div>

      <div className={`relative aspect-[16/10] overflow-hidden ${meta.previewBg}`}>
        <img
          src={meta.image}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          className={`h-full w-full min-h-full min-w-full ${meta.imageFit} transition duration-500 group-hover:scale-[1.02]`}
        />
      </div>
    </div>
  )
}
