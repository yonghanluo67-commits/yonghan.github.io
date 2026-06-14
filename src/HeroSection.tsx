import VideoBackground from './VideoBackground'
import StatsRow from './StatsRow'
import BottomSection from './BottomSection'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-white overflow-hidden pt-[68px] md:pt-[76px]">
      <VideoBackground />
      <div className="absolute inset-0 bg-white/30 pointer-events-none z-10" />
      <div className="relative z-20 flex flex-col flex-1">
        <div className="flex-1" />
        <StatsRow />
        <BottomSection />
      </div>
    </section>
  )
}
