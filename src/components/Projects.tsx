import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projectsData } from '../data/portfolioData'

function hasRealLiveDemo(liveUrl: string) {
  const normalized = liveUrl.trim().toLowerCase()
  if (!normalized) {
    return false
  }

  return !normalized.includes('your-')
}

function ProjectFlow({ stages }: { stages: string[] }) {
  return (
    <ol className="flex items-center gap-2 overflow-x-auto pb-1" aria-label="Project workflow stages">
      {stages.map((stage, index) => (
        <li key={stage} className="flex items-center gap-2 whitespace-nowrap">
          <span className="rounded-full border border-mistLine/45 bg-navy/40 px-2.5 py-1 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-[#d3e4ff]">
            {stage}
          </span>
          {index < stages.length - 1 ? (
            <span aria-hidden="true" className="h-px w-5 bg-tealSignal/65" />
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tealSignal">
          Projects
        </p>
        <h2 className="type-section-title mt-4 max-w-3xl text-ice">
          Product builds where data intelligence meets interface execution.
        </h2>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
              className={`group rounded-[1.6rem] border p-5 sm:p-6 ${
                project.featured
                  ? 'border-tealSignal/55 bg-[linear-gradient(145deg,rgba(28,37,65,0.92),rgba(11,19,43,0.88))] lg:col-span-2'
                  : 'border-mistLine/30 bg-[linear-gradient(145deg,rgba(28,37,65,0.78),rgba(11,19,43,0.72))]'
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mistLine">
                    {project.duration}
                  </p>
                  {project.featured ? (
                    <span className="rounded-full bg-amberPulse px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy">
                      Featured
                    </span>
                  ) : null}
                </div>
                <span className="h-2 w-2 rounded-full bg-amberPulse" aria-hidden="true" />
              </div>

              <h3 className={`font-heading font-semibold leading-tight text-ice ${
                project.featured ? 'text-[1.55rem]' : 'text-[1.32rem]'
              }`}>
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#d2e1f8]">
                {project.description}
              </p>

              <div className="mt-5">
                <ProjectFlow stages={project.stages} />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={`${project.title} technology stack`}>
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-mistLine/35 bg-navy/45 px-3 py-1.5 text-xs font-semibold text-[#dce9ff]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-mistLine/45 bg-navy/35 px-4 py-2.5 text-sm font-semibold text-ice transition hover:border-tealSignal hover:text-tealSignal"
                >
                  View Code
                  <FaGithub size={15} aria-hidden="true" />
                </a>
                {hasRealLiveDemo(project.liveUrl) ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amberPulse px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#f6db7d]"
                  >
                    Live Demo
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
