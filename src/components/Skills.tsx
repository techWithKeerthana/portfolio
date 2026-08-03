import { motion } from 'framer-motion'
import { Binary, Brain, Database, Globe, Wrench } from 'lucide-react'
import type { ReactNode } from 'react'
import { skillsData } from '../data/portfolioData'

const categoryIcons: Record<string, ReactNode> = {
  'Programming Languages': <Binary size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />,
  'AI & Machine Learning': <Brain size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />,
  'Web Development': <Globe size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />,
  Databases: <Database size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />,
  'Tools & Platforms': <Wrench size={18} aria-hidden="true" className="text-tealDark dark:text-tealSignal" />,
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tealDark dark:text-tealSignal">
          Skills
        </p>
        <h2 className="type-section-title mt-4 max-w-3xl text-lmText dark:text-ice">
          Technical stack across ML pipelines and production web systems.
        </h2>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {skillsData.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
              className="rounded-2xl border border-lmBorder bg-lmSurface p-5 shadow-sm sm:p-6 dark:border-mistLine/30 dark:bg-indigoSlate/45 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                {categoryIcons[group.category]}
                <h3 className="font-heading text-[1.12rem] font-semibold text-lmText dark:text-ice">
                  {group.category}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-lmBorder bg-lmSurfaceAlt px-3 py-1.5 text-sm font-medium text-lmTextSoft dark:border-mistLine/35 dark:bg-navy/45 dark:text-[#D9E7FB]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
