import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-[var(--color-surface)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a 
              href="#home" 
              className="text-xl font-bold"
            >
              Dawit <span className="text-[var(--color-accent)]">Tamiru</span>
            </a>
            <p className="mt-2 text-[var(--color-muted)]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/tevBoyz" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <FaGithub className="h-6 w-6 accent-text" />
            </a>
            <a 
              href="https://linkedin.com/in/dawit-tefera-tamiru-6b9496136" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <FaLinkedin className="h-6 w-6 accent-text" />
            </a>
            <a 
              href="https://www.youtube.com/@battles4u" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <FaYoutube className="h-6 w-6 accent-text" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
