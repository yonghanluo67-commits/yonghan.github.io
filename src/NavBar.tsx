import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface NavBarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '作品', href: '#projects' },
  { label: '关于我', href: '#about' },
  { label: '联系我', href: '#contact' },
]

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function NavBar({ onMenuToggle }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 md:py-5 transition-colors duration-300 font-uppercase ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home')}
        className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center shrink-0"
        variants={fadeDown}
        custom={0}
      >
        <div className="w-[10px] h-[10px] rounded-full bg-[#5E0ED7]" />
      </motion.a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-sm font-semibold tracking-widest uppercase text-black hover:text-[#5E0ED7] transition-colors"
            variants={fadeDown}
            custom={i + 1}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <motion.button
        onClick={onMenuToggle}
        className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-[3px] shrink-0"
        variants={fadeDown}
        custom={5}
      >
        <span className="w-4 h-0.5 bg-white block" />
        <span className="w-4 h-0.5 bg-white block" />
        <span className="w-4 h-0.5 bg-white block" />
      </motion.button>
    </motion.nav>
  )
}
