import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type SignalMeshProps = {
  className?: string
}

const nodes = [
  { id: 1, x: 15, y: 18 },
  { id: 2, x: 35, y: 14 },
  { id: 3, x: 56, y: 22 },
  { id: 4, x: 77, y: 17 },
  { id: 5, x: 87, y: 37 },
  { id: 6, x: 70, y: 58 },
  { id: 7, x: 49, y: 52 },
  { id: 8, x: 28, y: 64 },
  { id: 9, x: 16, y: 44 },
]

const edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 1],
  [2, 7],
  [3, 6],
  [1, 7],
  [4, 7],
  [2, 8],
]

function getNode(nodeId: number) {
  return nodes.find((node) => node.id === nodeId)
}

export default function SignalMesh({ className = '' }: SignalMeshProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')

    const update = () => {
      setIsCompact(media.matches)
    }

    update()
    media.addEventListener('change', update)

    return () => {
      media.removeEventListener('change', update)
    }
  }, [])

  const shouldAnimate = !shouldReduceMotion && !isCompact

  const edgePairs = useMemo(
    () =>
      edges
        .map(([startId, endId]) => {
          const start = getNode(startId)
          const end = getNode(endId)
          if (!start || !end) {
            return null
          }

          return {
            key: `${startId}-${endId}`,
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
          }
        })
        .filter(Boolean),
    [],
  )

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-mistLine/30 bg-indigoSlate/80 p-4 shadow-soft ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,192,190,0.22),transparent_36%),radial-gradient(circle_at_72%_66%,rgba(244,211,94,0.14),transparent_32%)]" />
      <svg viewBox="0 0 100 80" className="relative h-full w-full">
        <g opacity="0.25">
          {Array.from({ length: 9 }).map((_, index) => {
            const x = 10 + index * 10
            return <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={80} stroke="#A8B2D1" strokeWidth="0.2" />
          })}
          {Array.from({ length: 7 }).map((_, index) => {
            const y = 10 + index * 10
            return <line key={`h-${y}`} x1={0} y1={y} x2={100} y2={y} stroke="#A8B2D1" strokeWidth="0.2" />
          })}
        </g>

        <g>
          {edgePairs.map((edge, index) => {
            if (!edge) {
              return null
            }

            if (isCompact && index % 2 !== 0) {
              return null
            }

            return (
              <motion.line
                key={edge.key}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke="#5BC0BE"
                strokeWidth="0.65"
                strokeLinecap="round"
                initial={shouldAnimate ? { pathLength: 0.15, opacity: 0.25 } : false}
                animate={
                  shouldAnimate
                    ? {
                        pathLength: [0.2, 1, 0.7],
                        opacity: [0.2, 0.65, 0.35],
                      }
                    : { pathLength: 1, opacity: 0.38 }
                }
                transition={
                  shouldAnimate
                    ? {
                        delay: index * 0.03,
                        duration: 3.8,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      }
                    : { duration: 0 }
                }
              />
            )
          })}
        </g>

        <g>
          {nodes.map((node, index) => {
            if (isCompact && index % 2 !== 0) {
              return null
            }

            return (
              <motion.circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r="1.55"
                fill={index % 3 === 0 ? '#F4D35E' : '#E6F1FF'}
                initial={shouldAnimate ? { opacity: 0.5, scale: 0.85 } : false}
                animate={
                  shouldAnimate
                    ? {
                        opacity: [0.5, 1, 0.6],
                        scale: [0.92, 1.12, 1],
                      }
                    : { opacity: 0.85, scale: 1 }
                }
                transition={
                  shouldAnimate
                    ? {
                        delay: index * 0.05,
                        duration: 2.6,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      }
                    : { duration: 0 }
                }
              />
            )
          })}
        </g>
      </svg>
      <div className="pointer-events-none absolute bottom-5 left-5 rounded-xl border border-mistLine/40 bg-navy/70 px-3 py-2 text-[0.69rem] tracking-wide text-ice/85">
        <span className="font-mono">model | interface | real-time</span>
      </div>
    </div>
  )
}
