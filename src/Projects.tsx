import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    title: 'E-Commerce Platform',
    tags: ['React', 'TypeScript', 'Node.js'],
    description: 'Full-stack shopping experience with real-time inventory, payment integration, and admin dashboard.',
    placeholder: 'EC',
  },
  {
    title: 'AI Content Studio',
    tags: ['Next.js', 'OpenAI', 'Tailwind CSS'],
    description: 'AI-powered content generation platform with markdown editor, templates, and team collaboration.',
    placeholder: 'AI',
  },
  {
    title: 'Motion Design System',
    tags: ['Framer Motion', 'React', 'Storybook'],
    description: 'Composable animation library and component showcase with interactive documentation.',
    placeholder: 'MD',
  },
  {
    title: 'DevOps Dashboard',
    tags: ['Vue 3', 'D3.js', 'WebSocket'],
    description: 'Real-time monitoring dashboard for CI/CD pipelines with live metrics and alerting.',
    placeholder: 'DD',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 md:py-32 px-5 sm:px-8 md:px-12 font-uppercase">
      <SectionWrapper>
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#5E0ED7] text-xs sm:text-sm tracking-[0.2em]">SELECTED WORKS</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black mt-3 tracking-tight">
            Featured Projects
          </h2>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col"
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#5E0ED7]/10 to-[#5E0ED7]/5 flex items-center justify-center overflow-hidden">
              <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#5E0ED7]/20 select-none">
                {project.placeholder}
              </span>
              <div className="absolute inset-0 bg-[#5E0ED7]/0 group-hover:bg-[#5E0ED7]/10 transition-colors duration-500" />
            </div>

            <div className="flex flex-col flex-1 p-5 md:p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full bg-[#5E0ED7]/10 text-[#5E0ED7] tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-black tracking-wider mb-2">
                {project.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-600 normal-case tracking-normal leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <button className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#5E0ED7] font-semibold tracking-wider hover:underline underline-offset-4">
                  <Github size={14} /> Source
                </button>
                <button className="flex items-center gap-1.5 text-[10px] sm:text-xs text-black font-semibold tracking-wider hover:underline underline-offset-4">
                  <ExternalLink size={14} /> Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
