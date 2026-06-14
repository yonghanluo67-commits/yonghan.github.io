import { useState } from 'react'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu'
import HeroSection from './HeroSection'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative bg-white">
      <NavBar onMenuToggle={() => setMenuOpen(true)} />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
