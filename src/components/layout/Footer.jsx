import { Link } from 'react-router-dom'
import { Send, Mail, Phone } from 'lucide-react'
import Logo from '../brand/Logo'
import { SITE } from '../../config/site'

const legal = [
  { label: 'Політика конфіденційності', href: '#' },
  { label: 'Умови співпраці', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo asLink />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.name} — професійні сайти для бізнесу без авансу за розробку.
              Працюємо прозоро, на результат і з повним супроводом.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Контакти
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-[#FFB347]"
                >
                  <Send className="h-4 w-4 text-[#FF8C00]" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-[#FFB347]"
                >
                  <Mail className="h-4 w-4 text-[#FF8C00]" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-[#FFB347]"
                >
                  <Phone className="h-4 w-4 text-[#FF8C00]" />
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Навігація
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link to="/" className="transition hover:text-[#FFB347]">
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/spivpratsia" className="transition hover:text-[#FFB347]">
                  Формати співпраці
                </Link>
              </li>
              <li>
                <Link to="/spivpratsia#faq" className="transition hover:text-[#FFB347]">
                  Питання
                </Link>
              </li>
              <li>
                <Link to="/#roboty" className="transition hover:text-[#FFB347]">
                  Наші роботи
                </Link>
              </li>
              <li>
                <Link to="/#vidguky" className="transition hover:text-[#FFB347]">
                  Відгуки
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}. Усі права захищені.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {legal.map(({ label, href }) => (
              <a key={label} href={href} className="transition hover:text-[#FFB347]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
