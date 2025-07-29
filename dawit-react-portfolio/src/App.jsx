import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/Layout/Footer'
import { ThemeProvider } from './context/ThemeContext'
import BaseLayout from './context/BaseLayout'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    { threshold: 0.5 } // Adjust threshold as needed
  )

  // Observe all sections
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
  })

  return () => observer.disconnect()
}, [])

  return (
    <ThemeProvider>
      <BaseLayout>
      <div className="min-h-screen bg-white surface-bg transition-colors duration-300">
        <Header activeSection={activeSection} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Experience setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </main>
        
        <Footer />
      </div>
      </BaseLayout >
    </ThemeProvider>
  )
}

export default App