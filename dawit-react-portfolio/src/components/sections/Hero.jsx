import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

const Hero = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('home')
    }
  }, [inView, setActiveSection])

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left: Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg neutral-text mb-2 mt-16 sm:mt-20"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold accent-text tracking-tight mb-3 leading-tight"
          >
            Dawit Tefera Tamiru
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl lg:text-3xl font-medium neutralish-text mb-4 sm:mb-6 leading-snug"
          >
            Full Stack Developer & Business Analyst
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="italic text-sm sm:text-base lg:text-lg neutralish-text max-w-xl mb-8 sm:mb-10 leading-relaxed"
          >
            Open to software engineering and tech lead opportunities. I build product-focused web applications with modern JavaScript stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center px-6 py-3 accent-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center px-6 py-3 border-2 accent-border text-[var(--color-accent)] hover:bg-[var(--color-surface)] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: Image/Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full max-w-sm md:max-w-md"
        >
          <div className="w-full h-[48vh] min-h-[340px] sm:h-[58vh] md:h-[65vh] max-h-[720px] rounded-2xl bg-[var(--color-bg)] flex items-center justify-center accent-border md:my-20 sm:my-30">
          <img src="/assets/images/lnkdn.jpg" loading='lazy' alt="Portrait of Dawit Tefera Tamiru" className="rounded-2xl w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="animate-bounce invisible md:visible lg:visible">
          <ArrowDownCircleIcon className="h-8 w-8 accent-text hover:text-[var(--color-accent)] transition-colors duration-300" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
