import Badge from './Badge'

export default function SectionHeading({ badge, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-5 lg:mb-6 ${alignClass}`}>
      {badge && <Badge className="mb-2">{badge}</Badge>}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
