import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Send } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const socialLinks = [
  { label: 'GitHub', icon: Github, href: 'https://github.com' },
  { label: 'Gitee', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17.5c-3.584 0-6.5-2.916-6.5-6.5S7.416 4.5 11 4.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm1-9.5v5h-2v-5h2z" />
    </svg>
  ), href: 'https://gitee.com' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (demo)')
  }

  return (
    <section id="contact" className="relative bg-white py-24 md:py-32 px-5 sm:px-8 md:px-12 font-uppercase">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#5E0ED7] text-xs sm:text-sm tracking-[0.2em]">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black mt-3 tracking-tight">
              Contact Me
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          <SectionWrapper delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-700 mb-2">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-black normal-case tracking-normal placeholder:text-neutral-400 focus:outline-none focus:border-[#5E0ED7] focus:ring-1 focus:ring-[#5E0ED7]/20 transition-colors"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-700 mb-2">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-black normal-case tracking-normal placeholder:text-neutral-400 focus:outline-none focus:border-[#5E0ED7] focus:ring-1 focus:ring-[#5E0ED7]/20 transition-colors"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-700 mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-black normal-case tracking-normal placeholder:text-neutral-400 focus:outline-none focus:border-[#5E0ED7] focus:ring-1 focus:ring-[#5E0ED7]/20 transition-colors resize-none"
                  placeholder="Tell me about your project..." />
              </div>
              <motion.button type="submit"
                className="flex items-center gap-2 bg-[#5E0ED7] text-white text-xs sm:text-sm font-semibold tracking-wider px-6 py-3 rounded-full hover:bg-[#4d0bb5] transition-colors"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Send size={16} /> Send Message
              </motion.button>
            </form>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="space-y-5">
                <p className="text-xs sm:text-sm text-neutral-600 normal-case tracking-normal leading-relaxed">
                  Have a project in mind or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
                </p>
                <a href="mailto:hello@example.com"
                  className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 hover:text-[#5E0ED7] transition-colors normal-case tracking-normal">
                  <Mail size={16} className="text-[#5E0ED7]" /> hello@example.com
                </a>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-500 mb-4">Find me on</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-[#5E0ED7] hover:text-[#5E0ED7] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} title={link.label}>
                      <link.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="mt-20 md:mt-24 pt-8 border-t border-neutral-200 text-center">
        <p className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider">
          &copy; {new Date().getFullYear()} Studio Portfolio. All rights reserved.
        </p>
      </div>
    </section>
  )
}
