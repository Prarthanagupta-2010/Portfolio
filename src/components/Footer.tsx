import React from 'react';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './UI/BrandIcons';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream-50 pt-16 pb-12 border-t border-gold-500/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-espresso-800">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-espresso-900 border border-gold-500/40 flex items-center justify-center text-gold-400 font-serif font-bold text-base">
                {personalData.initials}
              </div>
              <span className="font-serif text-2xl font-bold text-cream-50 tracking-tight">
                {personalData.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-espresso-200 max-w-md font-normal leading-relaxed">
              {personalData.tagline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 border border-gold-500/30 transition-all duration-300 hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 border border-gold-500/30 transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 border border-gold-500/30 transition-all duration-300 hover:scale-105"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-6 w-px bg-espresso-800 mx-1" />

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 border border-gold-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-espresso-200 gap-4">
          <p>© 2026 {personalData.fullName}. Built with passion for software and intelligent systems.</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-gold-400/80">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Clean Architecture · React · Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
