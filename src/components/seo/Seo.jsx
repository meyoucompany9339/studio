import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from '../../config/site'
import { useTranslation } from '../../i18n/LanguageProvider'
import { translations } from '../../i18n/translations'

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertMeta(name, content, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function pageKeyFromPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/spivpratsia') return 'cooperation'
  return 'home'
}

function canonicalForPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/spivpratsia') return `${SITE.origin}/spivpratsia`
  return `${SITE.origin}/`
}

export default function Seo() {
  const { locale } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {
    const pageKey = pageKeyFromPath(pathname)
    const pageMeta =
      translations[locale]?.meta?.[pageKey] || translations.uk?.meta?.[pageKey] || {}

    if (pageMeta.title) document.title = pageMeta.title

    if (pageMeta.description) {
      upsertMeta('description', pageMeta.description)
    }

    upsertMeta('robots', 'index, follow')
    upsertLink('canonical', canonicalForPath(pathname))
  }, [locale, pathname])

  return null
}
