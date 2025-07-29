import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../../data/skills'
import { useEffect } from 'react'

const Skills = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('skills')
    }
  }, [inView, setActiveSection])

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center accent-text mb-12"
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-opacity-10">
                  <skill.icon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-[var(--color-text)]">{skill.name}</h3>
                  <div className="w-full bg-[var(--color-border)] rounded-full h-2 mt-2">
                    <div 
                      className="h-2 rounded-full bg-[var(--color-accent)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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

export default Skills
