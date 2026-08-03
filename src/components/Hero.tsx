import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { heroData } from '../data/portfolioData'
import SignalMesh from './SignalMesh'

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-6xl items-center px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="grid w-full items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-7"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-tealDark/40 bg-lmSurfaceAlt px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-tealDark dark:border-tealSignal/45 dark:bg-indigoSlate/70 dark:text-tealSignal">
            <span className="h-2 w-2 rounded-full bg-tealSignal" aria-hidden="true"></span>
            Open to opportunities
          </p>

          <div className="space-y-5">
            <h1 className="type-hero max-w-3xl text-lmText dark:text-ice">
              {heroData.name}
            </h1>
            <h2 className="max-w-2xl text-xl font-semibold text-lmTextSoft sm:text-2xl dark:text-[#CFE0F8]">
              {heroData.title}
            </h2>
            <p className="type-body max-w-2xl text-lmTextSoft dark:text-[#D3E1F8]">
              {heroData.tagline}
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-lmMuted dark:text-[#BFD0EB]">
              <MapPin size={16} aria-hidden="true" />
              {heroData.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={heroData.ctas.projects}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-tealSignal px-5 py-3 text-sm font-semibold text-navy transition hover:bg-[#79cecc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tealSignal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={heroData.ctas.contact}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-lmBorder px-5 py-3 text-sm font-semibold text-lmText transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/45 dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
            >
              Contact Me
            </a>
            <a
              href={heroData.ctas.resume}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-transparent bg-amberPulse px-5 py-3 text-sm font-semibold text-navy transition hover:bg-[#f6db7d]"
              download
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="space-y-4"
        >
          <SignalMesh className="h-[250px] w-full sm:h-[300px] md:h-[340px]" />
          <div
            className="rounded-3xl border border-lmBorder bg-lmSurface p-5 shadow-sm dark:border-mistLine/30 dark:bg-indigoSlate/55 dark:shadow-none"
            aria-label="Profile quick links"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-lmMuted dark:text-mistLine">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={heroData.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-between rounded-xl border border-lmBorder bg-lmSurfaceAlt px-4 py-3 text-sm font-semibold text-lmText transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/35 dark:bg-navy/40 dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
              >
                GitHub
                <FaGithub size={17} aria-hidden="true" />
              </a>
              <a
                href={heroData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-between rounded-xl border border-lmBorder bg-lmSurfaceAlt px-4 py-3 text-sm font-semibold text-lmText transition hover:border-tealDark hover:text-tealDark dark:border-mistLine/35 dark:bg-navy/40 dark:text-ice dark:hover:border-tealSignal dark:hover:text-tealSignal"
              >
                LinkedIn
                <FaLinkedin size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
