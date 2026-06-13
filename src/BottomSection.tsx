import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const headingSlideUp = {
  hidden: { y: '110%' },
  visible: (wordIndex: number) => ({
    y: 0,
    transition: {
      delay: 0.4 + wordIndex * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const headingWords = ['Fearless', 'Vision', 'Delivered']

export default function BottomSection() {
  return (
    <div className="relative z-30 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
      {/* Row A – Tagline + CTA */}
      <div className="flex items-center justify-between gap-4">
        {/* Tagline */}
        <motion.p
          className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs"
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          Shaping Bold<br />Visions Into Power<br />For Your Tribe
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#"
          className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl text-[#5E0ED7] font-semibold tracking-widest uppercase whitespace-nowrap"
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate="visible"
        >
          Work With Us
          <ArrowUpRight size={18} className="sm:w-[22px] sm:h-[22px]" />
        </motion.a>
      </div>

      {/* Row B – Description + Main Heading */}
      <div className="flex items-end justify-between gap-3 sm:gap-4">
        {/* Description */}
        <motion.div
          className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate="visible"
        >
          <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right">
            Creative Studios Built Around Elevating Your Vision Into Striking Reality
          </p>
        </motion.div>

        {/* Main Heading */}
        <div className="flex flex-col items-end">
          {headingWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block text-black font-semibold uppercase text-right leading-[0.88]"
                style={{ fontSize: 'clamp(2rem, 9vw, 9rem)' }}
                variants={headingSlideUp}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
