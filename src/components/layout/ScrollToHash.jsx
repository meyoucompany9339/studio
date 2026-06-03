import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Прокрутка до секції за hash (#faq, #kontakt) */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    // Чекаємо рендер сторінки після переходу
    const t = window.setTimeout(scroll, 100)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}
