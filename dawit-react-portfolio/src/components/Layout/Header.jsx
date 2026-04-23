import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [visibleSection, setVisibleSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      const sections = document.querySelectorAll('section[id]')
      let currentSection = 'home'
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id
        }
      })
      
      setVisibleSection(currentSection)
      setActiveLink(`#${currentSection}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set up intersection observer for scroll-based highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
            setActiveLink(`#${entry.target.id}`)
          }
        })
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
      }
    )

    sections.forEach(section => observer.observe(section))
    
    return () => observer.disconnect()
  }, [])

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home'
      setActiveLink(hash)
      setMobileMenuOpen(false) // Close mobile menu when navigating
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const getActiveState = (href) => {
    const sectionId = href.substring(1)
    if (activeLink === href) return true
    return visibleSection === sectionId
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--color-surface)] backdrop-blur-sm shadow-sm' 
          : 'bg-[var(--color-surface)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="text-xl font-bold accent-text text-white"
          >
            Dawit<span className="text-[var(--color-accent)]"> Tamiru</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = getActiveState(link.href)
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href)
                    setTimeout(() => setActiveLink(null), 1000)
                  }}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'accent-text'
                      : 'text-[var(--color-neutral-300)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 top-full h-0.5 w-full bg-[var(--color-accent)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-[var(--color-neutral-300)] hover:text-[var(--color-accent)] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--color-surface)] shadow-md"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = getActiveState(link.href)
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href)
                      setMobileMenuOpen(false)
                      setTimeout(() => setActiveLink(null), 1000)
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-[var(--color-neutral-150)]'
                        : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-bg)]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header