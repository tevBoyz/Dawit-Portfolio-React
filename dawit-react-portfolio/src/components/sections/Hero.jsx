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
      className="min-h-screen flex items-center justify-center px-6 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)] "
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 ">
        
        {/* Left: Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[25px] sm:text-[20px] neutral-text mb-2 mt-20"
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold accent-text tracking-tight mb-3"
          >
            Dawit T. Tamiru
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-3xl font-medium neutralish-text mb-6"
          >
            Full Stack Developer
          </motion.h3>
          <br/>
          <br/>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="italic text-md sm:text-lg neutralish-text max-w-xl mb-10"
          >
            "Turning ideas into interactive, pixel-perfect experiences"
          </motion.p>
          <br/>
          <br/>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 accent-bg font-semibold rounded-lg transition-all duration-300 hover:opacity-50"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 accent-border text-[var(--color-accent)] hover:bg-[var(--color-surface)] font-semibold rounded-lg transition-colors duration-300"
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
          className="flex-1 w-full max-w-md"
        >
          <div className="w-full h-[800px] sm:h-[700px] rounded-2xl bg-[var(--color-bg)] flex items-center justify-center  accent-border md:my-20 sm:my-30">
          <img src="assets/images/image-DT.png" loading='lazy' alt="Dawit profile" className="rounded-2xl w-full h-full object-cover" />
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
