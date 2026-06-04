import { useEffect, useState } from 'react'

export function useSlidesPerView(query = '(min-width: 768px)', count = 2) {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setPerView(mq.matches ? count : 1)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query, count])

  return perView
}
