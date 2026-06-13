import { motion } from 'framer-motion'

const stats = [
  { number: '300', label: 'CRAFTED\nBRANDS' },
  { number: '200', label: 'DIGITAL\nPRODUCTS' },
  { number: '100', label: 'VENTURES\nFUNDED' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function StatsRow() {
  return (
    <div className="relative z-30 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
      <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-right"
            variants={fadeUp}
            custom={i + 2}
            initial="hidden"
            animate="visible"
          >
            <div>
              <span className="text-[#5E0ED7]" style={{ fontSize: '0.5em', verticalAlign: 'super' }}>
                +
              </span>
              <span
                className="text-black font-semibold leading-none"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
              >
                {stat.number}
              </span>
            </div>
            <p
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight"
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
