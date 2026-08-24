import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, ArrowDown, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './UI/BrandIcons';
import { personalData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemUpVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-caramel-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-espresso-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid lines background overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#1A120D 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Logo PG Badge */}
          <motion.div variants={itemUpVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cream-50/90 border border-gold-500/30 shadow-soft backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-espresso-800">
                Available for Engineering Roles
              </span>
              <span className="text-gold-600 font-bold">•</span>
              <span className="font-serif font-bold text-xs text-gold-600">PG</span>
            </div>
          </motion.div>

          {/* Large Hero Heading */}
          <motion.h1
            variants={itemUpVariants}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-espresso-950 leading-[1.08] mb-4"
          >
            {personalData.fullName}
          </motion.h1>

          {/* Designations Subtitle */}
          <motion.div variants={itemUpVariants} className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-medium text-espresso-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cream-200/70 border border-cream-300 text-espresso-900 font-semibold">
                <Code2 className="w-4 h-4 text-caramel-500" />
                Software Engineer
              </span>
              <span className="text-gold-500 font-serif">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cream-200/70 border border-cream-300 text-espresso-900 font-semibold">
                <Terminal className="w-4 h-4 text-espresso-600" />
                Full Stack Developer
              </span>
              <span className="text-gold-500 font-serif">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cream-200/70 border border-cream-300 text-espresso-900 font-semibold">
                <Cpu className="w-4 h-4 text-gold-600" />
                AI/ML Enthusiast
              </span>
            </div>
          </motion.div>

          {/* Introduction Paragraph */}
          <motion.p
            variants={itemUpVariants}
            className="max-w-3xl text-sm sm:text-base md:text-lg text-espresso-700 leading-relaxed sm:leading-loose text-justify sm:text-center font-normal mb-10 bg-cream-50/60 p-5 sm:p-6 rounded-2xl border border-cream-300/80 shadow-soft backdrop-blur-sm"
          >
            {personalData.heroIntroduction}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-espresso-950 text-gold-300 font-semibold text-sm sm:text-base shadow-soft hover:shadow-espresso-glow hover:bg-espresso-900 transition-all duration-300 hover:-translate-y-0.5 border border-gold-500/30 group"
            >
              <span>Learn More About Me</span>
              <ArrowDown className="w-4 h-4 text-gold-400 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cream-50 text-espresso-900 font-semibold text-sm sm:text-base shadow-soft hover:shadow-soft-lg hover:bg-cream-200/80 transition-all duration-300 hover:-translate-y-0.5 border border-espresso-300"
            >
              <span>Get In Touch</span>
              <Sparkles className="w-4 h-4 text-gold-600" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={containerVariants} className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-espresso-500 mr-2">
              Connect:
            </span>

            <motion.a
              variants={socialItemVariants}
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-cream-50 border border-cream-300 text-espresso-800 hover:text-gold-600 hover:border-gold-400 hover:bg-white shadow-soft transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              variants={socialItemVariants}
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-cream-50 border border-cream-300 text-espresso-800 hover:text-gold-600 hover:border-gold-400 hover:bg-white shadow-soft transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              variants={socialItemVariants}
              href={`mailto:${personalData.email}`}
              className="p-3 rounded-xl bg-cream-50 border border-cream-300 text-espresso-800 hover:text-gold-600 hover:border-gold-400 hover:bg-white shadow-soft transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
