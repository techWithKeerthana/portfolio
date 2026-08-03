import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { contactData, footerLinks } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-lmBorder bg-lmSurfaceAlt dark:border-mistLine/30 dark:bg-navy/75">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-heading text-base font-semibold text-lmText dark:text-ice">Keerthana M</p>
          <p className="mt-1 text-sm text-lmTextSoft dark:text-[#cadbf7]">
            Software Developer | AIML Enthusiast
          </p>
          <p className="mt-1 text-xs text-lmMuted dark:text-mistLine">
            Copyright {year} Keerthana M. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <ul className="flex flex-wrap gap-3 sm:gap-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-1 text-sm font-semibold text-lmText transition hover:text-tealDark dark:text-ice dark:hover:text-tealSignal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-lmBorder bg-lmSurface p-2.5 text-lmText transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/45 dark:bg-indigoSlate dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
          >
            <FaGithub size={16} aria-hidden="true" />
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-lmBorder bg-lmSurface p-2.5 text-lmText transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/45 dark:bg-indigoSlate dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
          >
            <FaLinkedin size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
