import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { useInView } from 'react-intersection-observer'
import { useEffect, useMemo, useState } from 'react'

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

const getCategory = (project) => {
  const techText = project.technologies.join(' ').toLowerCase()
  if (techText.includes('react') || techText.includes('node') || techText.includes('nest')) return 'Web App'
  if (techText.includes('game') || project.title.toLowerCase().includes('game')) return 'Games'
  if (techText.includes('api') || techText.includes('socket') || techText.includes('redux')) return 'Interactive'
  return 'Tools'
}

const Projects = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: false,
  })
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = useMemo(() => {
    const discovered = new Set(projects.map((project) => getCategory(project)))
    return ['All', ...discovered]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => getCategory(project) === activeFilter)
  }, [activeFilter])

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
          className="section-title"
        >
          Projects
        </motion.h2>
        <p className="section-subtitle">
          Browse by category to quickly find product, interactive, and game-focused work.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = category === activeFilter
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-[var(--color-neutral-150)]'
                    : 'bg-[var(--color-surface)] text-[var(--color-neutral-300)] border border-[var(--color-border)] hover:border-[var(--color-accent)]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <motion.div
          variants={container}
          initial={false}
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="h-full cursor-pointer bg-[var(--color-surface)] rounded-2xl overflow-hidden border-2 accent-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold accent-text mb-2 min-h-[56px]">
                  {project.title}
                </h3>
                <p className="neutralish-text mb-4 text-sm leading-relaxed min-h-[96px]">
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
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
  <a 
    href={project.githubUrl} 
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-surface)] border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-neutral-150)] active:scale-95 transition-all duration-300"
  >
    GitHub
  </a>
  {project.liveUrl && (
    <a 
      href={project.liveUrl} 
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-accent)] neutralishish-text hover:shadow-md active:scale-95 transition-all duration-300"
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
