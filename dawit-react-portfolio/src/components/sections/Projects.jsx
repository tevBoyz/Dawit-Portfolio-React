import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const Projects = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('projects')
    }
  }, [inView, setActiveSection])

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center accent-text mb-12 "
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-[var(--color-surface)] rounded-2xl overflow-hidden border-2 accent-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold accent-text mb-2">
                  {project.title}
                </h3>
                <p className="neutralish-text mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
  {project.technologies.map((tech, i) => (
    <span 
      key={i}
      className="px-3 py-1 bg-[var(--color-accent)] neutralishish-text text-xs font-semibold rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
    >
      {tech}
    </span>
  ))}
</div>
                <div className="flex flex-wrap gap-3 mt-2">
  <a 
    href={project.githubUrl} 
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-surface)] border-2 border-[var(--color-accent)] text-[var(--color-accent)] opacity-100 hover:opacity-50 active:scale-95 transition-all duration-300"
  >
    GitHub
  </a>
  {project.liveUrl && (
    <a 
      href={project.liveUrl} 
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-accent)] neutralishish-text opacity-100 hover:opacity-50 transition-all duration-300"
    >
      Live Demo
    </a>
  )}
</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
