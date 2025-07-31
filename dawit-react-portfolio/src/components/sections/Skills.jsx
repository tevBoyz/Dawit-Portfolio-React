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

  const sectionTitles = {
    frontEnd: 'Front-End',
    backEnd: 'Back-End',
    other: 'Other Technologies',
  }

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
          className="text-3xl font-bold text-center accent-text mb-16"
        >
          My Skills
        </motion.h2>

        {Object.entries(skills).map(([sectionKey, skillList], sectionIndex) => (
          <div key={sectionKey} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              className="text-xl font-semibold mb-6 accent-text"
            >
              {sectionTitles[sectionKey]}
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[var(--color-surface)] border border-[var(--color-accent)] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row sm:flex-row md:flex-row items-center justify-center space-x-4">
                    <div className="p-3 rounded-lg bg-opacity-10">
                      <skill.icon className={`h-8 w-8 accent-text `} />
                    </div>
                    <div className="w-full flex text-center">
                      <h3 className="font-semibold accent-text text-center w-full lg:text-left md:text-left sm:text-left">{skill.name}</h3>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
