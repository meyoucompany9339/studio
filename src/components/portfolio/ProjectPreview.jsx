/**
 * Прев’ю проєкту: скріншот реального сайту + рамка браузера
 */
const previews = {
  visitka: {
    image: '/portfolio/visitka.jpg',
    alt: 'Pick Best Moments — фотографія та love stories у Барселоні',
    label: 'pick-best-moment.com',
    previewBg: 'bg-black',
    imageFit: 'object-cover object-top',
  },
  corporate: {
    image: '/portfolio/corporate.jpg',
    alt: 'Корпоративний сайт — бізнес-центр',
    label: 'corporate-group.com',
    previewBg: 'bg-[#0a0a0a]',
    imageFit: 'object-cover object-center',
  },
  shop: {
    image: '/portfolio/shop.jpg',
    alt: 'Latore Atelier — інтернет-магазин преміум-одягу',
    label: 'latore.store',
    previewBg: 'bg-white',
    imageFit: 'object-cover object-top',
  },
  clinic: {
    image: '/portfolio/clinic.jpg',
    alt: 'Медична клініка — запис на прийом',
    label: 'health-clinic.ua',
    previewBg: 'bg-[#f4f7fb]',
    imageFit: 'object-cover object-top',
  },
}

export default function ProjectPreview({ type }) {
  const { image, alt, label, previewBg, imageFit } = previews[type] || previews.visitka

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#141414] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/90" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-center text-[11px] text-white/40">
          {label}
        </span>
      </div>

      <div className={`relative aspect-[16/10] overflow-hidden ${previewBg}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full min-h-full min-w-full ${imageFit} transition duration-500 group-hover:scale-[1.02]`}
        />
      </div>
    </div>
  )
}
