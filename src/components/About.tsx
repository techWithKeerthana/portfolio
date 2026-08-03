import { motion } from 'framer-motion'
import { BrainCircuit, Code2 } from 'lucide-react'
import { aboutData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="rounded-[2rem] border border-lmBorder bg-lmSurface p-6 shadow-sm sm:p-8 md:p-12 dark:border-mistLine/30 dark:bg-indigoSlate/55 dark:shadow-none"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tealDark dark:text-tealSignal">
          About
        </p>
        <h2 className="type-section-title mt-4 max-w-3xl text-lmText dark:text-ice">
          AI-first problem solving with full-stack execution.
        </h2>
        <p className="type-body mt-6 max-w-4xl text-lmTextSoft dark:text-[#D5E2F8]">
          {aboutData.summary}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-lmBorder bg-lmSurfaceAlt p-5 dark:border-mistLine/30 dark:bg-navy/45">
            <div className="flex items-center gap-3 text-lmText dark:text-ice">
              <BrainCircuit size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />
              <h3 className="font-heading text-lg font-semibold">Intelligent Systems</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-lmTextSoft dark:text-[#C9D8F1]">
              Generative AI, NLP, and predictive modeling applied to practical products.
            </p>
          </article>

          <article className="rounded-2xl border border-lmBorder bg-lmSurfaceAlt p-5 dark:border-mistLine/30 dark:bg-navy/45">
            <div className="flex items-center gap-3 text-lmText dark:text-ice">
              <Code2 size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />
              <h3 className="font-heading text-lg font-semibold">Interactive Interfaces</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-lmTextSoft dark:text-[#C9D8F1]">
              Responsive React and Node.js systems with clear UX and real-time behavior.
            </p>
          </article>
        </div>
      </motion.div>
    </section>
  )
}
