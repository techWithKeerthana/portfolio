import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolioData'

const THEME_KEY = 'portfolio-theme'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem(THEME_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-lmBorder/80 bg-white/90 backdrop-blur-lg dark:border-mistLine/30 dark:bg-navy/82"
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-10 md:py-4"
        aria-label="Primary"
      >
        <a href="#home" className="font-heading text-lg font-semibold tracking-wide text-navy dark:text-ice">
          Keerthana M
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-lmTextSoft transition hover:text-tealDark dark:text-[#D4E3FA] dark:hover:text-tealSignal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-lmBorder bg-lmSurfaceAlt p-2.5 text-lmText shadow-sm transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/35 dark:bg-indigoSlate dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-lmBorder bg-lmSurfaceAlt p-2.5 text-lmText shadow-sm transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/35 dark:bg-indigoSlate dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-lmBorder bg-white px-4 py-3 dark:border-mistLine/30 dark:bg-navy/96 md:hidden"
        >
          <ul className="flex flex-col gap-3" onClick={() => setIsMenuOpen(false)}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block min-h-11 rounded-lg px-3 py-3 text-sm font-semibold text-lmText transition hover:bg-lmSurfaceAlt hover:text-tealDark dark:text-ice dark:hover:bg-indigoSlate dark:hover:text-tealSignal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}
