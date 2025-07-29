import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

// Define your EmailJS public keys here or use environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};


const Contact = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.publicKey);

  useEffect(() => {
    if (inView) {
      setActiveSection('contact');
    }
    
  }, [inView, setActiveSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset submit status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 scroll-mt-16 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center accent-text mb-12"
        >
          Contact Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[var(--color-surface)]">
                  <EnvelopeIcon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)]">Email</h4>
                  <a 
                    href="mailto:dawit.ttamiru@gmail.com" 
                    className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    dawit.ttamiru@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[var(--color-surface)]">
                  <PhoneIcon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)]">Phone</h4>
                  <a 
                    href="tel:+251911676343" 
                    className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    +251 911 676343
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[var(--color-surface)]">
                  <MapPinIcon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)]">Location</h4>
                  <p className="text-[var(--color-muted)]">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-[var(--color-text)] mb-2">Connect with me</h4>
              <div className="flex gap-4">
                {/* Add your social media links here */}
                <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </a>
                <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <span className="sr-only">GitHub</span>
                  {/* GitHub icon would go here */}
                </a>
                <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-[var(--color-text)]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-[var(--color-text)]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[var(--color-text)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium bg-[var(--color-accent)] neutralishish-text hover:opacity-90 transition-all ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-md active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 neutralishish-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Failed to send
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;