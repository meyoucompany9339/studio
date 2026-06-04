import Badge from './Badge'

export default function SectionHeading({ badge, title, description, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-4 max-w-3xl lg:mb-5 ${alignClass} ${className}`}>
      {badge && <Badge className="mb-1.5 max-md:mb-1">{badge}</Badge>}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white max-md:text-2xl sm:text-4xl lg:text-5xl lg:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted max-md:mt-2 max-md:text-sm sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
