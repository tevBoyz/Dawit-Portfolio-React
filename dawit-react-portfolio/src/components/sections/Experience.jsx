import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences } from '../../data/experience'
import { useEffect } from 'react'

const toBullets = (description) => {
  return description
    .replaceAll('•', '')
    .split('.')
    .map((part) => part.trim())
    .filter(Boolean)
}

const Experience = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('experience')
    }
  }, [inView, setActiveSection])

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Job Experience
        </motion.h2>
        <p className="section-subtitle">
          Roles focused on shipping product outcomes, cross-functional collaboration, and scalable engineering delivery.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[var(--color-surface)]"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
            >
              <div className="hidden md:flex flex-1"></div>
              
              <div className="z-10 flex items-center">
                <div className="bg-[var(--color-accent)] rounded-full h-8 w-8 flex items-center justify-center">
                  <div className="bg-[var(--color-bg)] rounded-full h-4 w-4"></div>
                </div>
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} mt-1`}>
                <div className="bg-[var(--color-surface)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold accent-text">{exp.position}</h3>
                      <p className="text-[var(--color-accent)] font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[var(--color-neutral-300)]">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[var(--color-muted)] list-disc list-inside">
                    {toBullets(exp.description).map((point, pointIndex) => (
                      <li key={pointIndex}>{point}.</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-[var(--color-accent)] neutralishish-text text-xs font-semibold rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
