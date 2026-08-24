import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-soft border-b border-cream-300/60 py-3.5'
          : 'bg-cream-50/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimalist Logo PG */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 text-decoration-none focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-espresso-950 flex items-center justify-center border border-gold-500/40 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-400">
            <span className="font-serif font-bold text-lg text-gold-400 tracking-wider">
              {personalData.initials}
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-semibold text-espresso-950 text-base tracking-tight block">
              {personalData.fullName}
            </span>
            <span className="text-[11px] text-espresso-500 font-medium tracking-wide uppercase block -mt-1">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-cream-200/60 p-1.5 rounded-full border border-cream-300/80 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-cream-50 font-semibold'
                    : 'text-espresso-700 hover:text-espresso-950 hover:bg-cream-300/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-espresso-950 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-espresso-950 text-gold-400 hover:text-gold-300 hover:bg-espresso-900 border border-gold-500/30 shadow-sm transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-0.5"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-espresso-800 hover:bg-cream-200/80 focus:outline-none transition-colors border border-cream-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-cream-50/95 backdrop-blur-xl border-b border-cream-300 px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-espresso-950 text-gold-400 font-semibold'
                        : 'text-espresso-800 hover:bg-cream-200/80'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-cream-300 flex justify-center">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-2.5 px-4 rounded-xl bg-espresso-950 text-gold-400 font-semibold text-sm flex items-center justify-center gap-2 border border-gold-500/30"
              >
                <span>Get In Touch</span>
                <Sparkles className="w-4 h-4 text-gold-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
