import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

interface NavBarProps {
  onMenuToggle: () => void
}

const navLinks = ['Story', 'Expertise', 'Studios', 'Feedback']

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function NavBar({ onMenuToggle }: NavBarProps) {
  return (
    <nav className="relative z-40 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
      {/* Left – Logo */}
      <motion.div
        className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center"
        variants={fadeDown}
        custom={0}
        initial="hidden"
        animate="visible"
      >
        <div className="w-[10px] h-[10px] rounded-full bg-[#5E0ED7]" />
      </motion.div>

      {/* Center – Nav links (hidden mobile, visible md+) */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            className="text-sm font-semibold tracking-widest uppercase text-black"
            variants={fadeDown}
            custom={i + 1}
            initial="hidden"
            animate="visible"
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Right – Hamburger */}
      <motion.button
        onClick={onMenuToggle}
        className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-[3px]"
        variants={fadeDown}
        custom={5}
        initial="hidden"
        animate="visible"
      >
        <span className="w-4 h-0.5 bg-white block" />
        <span className="w-4 h-0.5 bg-white block" />
        <span className="w-4 h-0.5 bg-white block" />
      </motion.button>
    </nav>
  )
}
