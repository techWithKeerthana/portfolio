import { motion } from 'framer-motion'
import { GraduationCap, Languages } from 'lucide-react'
import { educationData, languagesData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="rounded-[2rem] border border-lmBorder bg-lmSurface p-6 shadow-sm sm:p-8 md:p-10 dark:border-mistLine/30 dark:bg-indigoSlate/55 dark:shadow-none"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tealDark dark:text-tealSignal">
          Education
        </p>
        <h2 className="type-section-title mt-4 max-w-3xl text-lmText dark:text-ice">
          Academic foundation in AI/ML, backed by practical builds.
        </h2>

        <div className="mt-8 space-y-4">
          {educationData.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-lmBorder bg-lmSurfaceAlt p-5 dark:border-mistLine/30 dark:bg-navy/45"
            >
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-lmText dark:text-ice">
                    <GraduationCap size={17} className="text-tealDark dark:text-tealSignal" aria-hidden="true" />
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-lmTextSoft dark:text-[#d6e6ff]">
                    {item.institution} - {item.location}
                  </p>
                </div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-lmMuted dark:text-mistLine">
                  {item.duration}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-mistLine/30 bg-navy/45 p-5">
          <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-lmText dark:text-ice">
            <Languages size={17} className="text-tealDark dark:text-tealSignal" aria-hidden="true" />
            Languages
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {languagesData.map((language) => (
              <li
                key={language}
                className="rounded-full border border-lmBorder bg-lmSurfaceAlt px-3 py-1.5 text-sm font-medium text-lmTextSoft dark:border-mistLine/35 dark:bg-indigoSlate/50 dark:text-[#dbe8ff]"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
