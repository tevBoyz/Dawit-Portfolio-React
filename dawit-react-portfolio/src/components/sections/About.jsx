import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'


const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

  const paragraphs = [
    `Hello, I'm Dawit, a Full Stack developer based in Ethiopia with a strong focus on creating responsive, accessible, and visually polished user interfaces. I specialize in modern technologies like React, Tailwind CSS, and Vite, with a solid grasp of JavaScript and TypeScript best practices.`,
    `I bring a keen eye for detail and a user-centered approach to every project I work on. Whether it's a marketing site, a dashboard, or a complex single-page app, I aim to deliver clean code, performance-optimized features, and intuitive user experiences.`,
    `One of my strongest areas is CSS. I love pushing the limits of what’s possible with modern CSS and animations. I regularly share my insights and tips through my YouTube channel, where I break down creative UI effects and animation techniques.`,
    `I'm currently expanding my expertise into back-end development, working with technologies like Node.js, NestJS, and SQL databases to build complete full stack applications. This journey reflects my drive to become a well-rounded developer capable of contributing across the entire development stack.`,
    `I'm also experienced in building and deploying real-world apps, including a flashcard generator powered by AI. I'm passionate about continuous learning, and I enjoy solving real problems with code, from idea to deployment.`,
    `I'm actively seeking opportunities to contribute to high-impact projects and grow with forward-thinking teams. Let’s build something meaningful together.`
  ]

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 scroll-mt-16 bg-[var(--color-surface)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold accent-text mb-6">
              About Me
            </h2>

            <div className="text-[var(--color-neutral-300)] leading-relaxed space-y-5">
  {paragraphs.slice(0, 2).map((p, i) => (
    <p key={i}>{p}</p>
  ))}

  <AnimatePresence initial={false}>
    {showMore && (
      <m.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="space-y-5 overflow-hidden"
      >
        {paragraphs.slice(2).map((p, i) => (
          <p key={`extra-${i}`}>{p}</p>
        ))}
      </m.div>
    )}
  </AnimatePresence>
</div>


           <div className='mt-4 flex justify-end'>
             <button
              onClick={() => setShowMore(prev => !prev)}
              className="mt-4 text-[var(--color-accent)] hover:underline font-medium hover:cursor-pointer"
            >
              {showMore ? 'Read less ▲' : 'Read more ▼'}
            </button>
           </div>

            <div className="mt-8 flex gap-4">
              <a 
                href="https://drive.google.com/uc?export=download&id=1Cfl4alrmi-M7ORv5DL3jRMpeqRk4YH2M" 
                target='_blank'
                download="Resume_Dawit_Tamiru.pdf"
                className="px-6 py-2 accent-bg font-medium rounded-lg transition-all hover:opacity-50"
              >
                Download Resume
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center my-50 sm:my-30"
          >
            <div className="w-[200px] h-[200px] rounded-xl accent-borderflex items-center justify-center">
              <div className="cube-container">
                <div className="scene">
                  <div className="cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face bottom"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
