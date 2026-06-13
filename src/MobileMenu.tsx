import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = ['Story', 'Expertise', 'Studios', 'Feedback']

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const linkItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Top row */}
          <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
            {/* Logo */}
            <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-[#5E0ED7]" />
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
            >
              <X className="text-white" size={18} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center gap-8 mt-16">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="text-3xl font-semibold tracking-widest uppercase text-black"
                custom={i}
                variants={linkItem}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-auto pb-12 flex justify-center"
            variants={linkItem}
            custom={4}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a
              href="#"
              className="flex items-center gap-2 text-[#5E0ED7] text-xl font-semibold tracking-widest uppercase"
            >
              Work With Us
              <ArrowUpRight size={22} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
