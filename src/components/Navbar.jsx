import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Threat Intelligence', to: '/threat-intelligence' },
  { label: 'Meowware Analysis', to: '/meowware-analysis' },
  { label: 'Analyst Team', to: '/analyst-team' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-cyan-300">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 shadow-glow">
            🐾
          </span>
          PurrSec Labs
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 p-2 text-slate-100 hover:border-cyan-300 hover:text-cyan-200 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>

        <nav className={`${open ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex flex-col gap-3 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 shadow-glow sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-2 text-sm transition hover:text-cyan-300 ${
                      isActive ? 'bg-cyan-500/10 text-cyan-200 sm:bg-transparent sm:text-cyan-300' : 'text-slate-300'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
