import { useState } from 'react'
import VideoBackground from './VideoBackground'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu'
import StatsRow from './StatsRow'
import BottomSection from './BottomSection'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Background Video */}
      <VideoBackground />

      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <NavBar onMenuToggle={() => setMenuOpen(true)} />
        <StatsRow />
        <BottomSection />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
