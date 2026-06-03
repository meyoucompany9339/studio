import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-elevated">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light text-black">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-bold text-white">Studio</span>
        </Link>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Web Studio. Усі права захищені.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <Link to="/" className="hover:text-accent-light transition-colors">
            Головна
          </Link>
          <Link to="/spivpratsia" className="hover:text-accent-light transition-colors">
            Модель
          </Link>
        </div>
      </div>
    </footer>
  )
}
