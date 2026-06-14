import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'Framer Motion', 'Next.js', 'PostgreSQL', 'GraphQL',
  'Docker', 'Figma', 'Python', 'Redis',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-50 py-24 md:py-32 px-5 sm:px-8 md:px-12 font-uppercase">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#5E0ED7] text-xs sm:text-sm tracking-[0.2em]">ABOUT</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black mt-3 tracking-tight">
              About Me
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <SectionWrapper delay={0.1}>
            <div className="space-y-5 md:space-y-6">
              <p className="text-xs sm:text-sm text-neutral-800 normal-case tracking-normal leading-relaxed">
                I'm a full-stack developer and creative technologist with over 8 years of experience
                building digital products that live at the intersection of design and engineering.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 normal-case tracking-normal leading-relaxed">
                My work spans across e-commerce platforms, AI-powered tools, real-time dashboards,
                and motion-driven brand experiences. I believe great code is invisible — what matters
                is how it makes people feel.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 normal-case tracking-normal leading-relaxed">
                Currently focused on crafting performant, accessible web applications using React,
                TypeScript, and the modern frontend ecosystem.
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-black tracking-wider mb-6">Tech Stack</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 text-[10px] sm:text-xs font-semibold tracking-wider rounded-full border border-neutral-300 text-neutral-700 bg-white hover:border-[#5E0ED7] hover:text-[#5E0ED7] cursor-default transition-colors duration-300"
                    variants={tagVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
