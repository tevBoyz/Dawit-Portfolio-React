import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

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
          {/* Left – Text content vertically centered */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold accent-text mb-6">
              About Me
            </h2>
            <div className="text-[var(--color-neutral-300)] leading-relaxed space-y-5">
             <p>
  Hello, I'm Dawit, a Full Stack developer based in Ethiopia with a strong focus on creating responsive, accessible, and visually polished user interfaces. I specialize in modern technologies like React, Tailwind CSS, and Vite, with a solid grasp of JavaScript and TypeScript best practices.
</p>

<p>
  I bring a keen eye for detail and a user-centered approach to every project I work on. Whether it's a marketing site, a dashboard, or a complex single-page app, I aim to deliver clean code, performance-optimized features, and intuitive user experiences.
</p>

<p>
  One of my strongest areas is CSS. I love pushing the limits of what’s possible with modern CSS and animations. I regularly share my insights and tips through my YouTube channel, where I break down creative UI effects and animation techniques.
</p>

<p>
  I'm currently expanding my expertise into back-end development, working with technologies like Node.js, NestJS, and SQL databases to build complete full stack applications. This journey reflects my drive to become a well-rounded developer capable of contributing across the entire development stack.
</p>

<p>
  I'm also experienced in building and deploying real-world apps, including a flashcard generator powered by AI. I'm passionate about continuous learning, and I enjoy solving real problems with code, from idea to deployment.
</p>

<p>
  I'm actively seeking opportunities to contribute to high-impact projects and grow with forward-thinking teams. Let’s build something meaningful together.
</p>
            </div>

            <div className="mt-8 flex gap-4">
              <a 
                href="https://1drv.ms/b/c/af15753579054321/EWsD7QYKOfdAj4Kq1OkGWskBxovzjhZ3_i4YriQzQ9Ss3Q?e=6nh9vb" 
                target='_blank'
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
            className="flex items-center justify-center sm:my-25"
          >
            <div className="w-[200px] h-[200px] rounded-xl accent-borderflex items-center justify-center">
              {/* Your cube animation goes here */}
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
