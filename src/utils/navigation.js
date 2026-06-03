/** Прокрутка до Hero (верх головної) */
export function scrollToHero(smooth = true) {
  if (location.hash) {
    window.history.replaceState(null, '', window.location.pathname)
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? 'smooth' : 'auto',
  })
}
