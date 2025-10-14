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
    `I am a highly skilled, solution oriented and creative professional with over five years of experience in end user service, technical troubleshooting and network development. `,
    `I have demonstrated my skills in providing creative and effective solutions in various companies. I am also a talented graphics designer, video editor and social media manager with proven experience in managing various social media accounts.`,
    `I am a team player, a fast learner and posses an outstanding work ethic.`
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


           

            <div className="mt-8 flex gap-4">
              <a download
                href='/Yeaymrokal - Resume.pdf' 
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
