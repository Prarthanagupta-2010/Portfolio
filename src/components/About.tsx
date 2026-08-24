import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, ArrowRight, Briefcase, GraduationCap, FolderGit2, Wrench, Award, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

const quickNavLinks = [
  { name: 'Work Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Certifications', href: '#certifications', icon: Award },
];

export const About: React.FC = () => {
  const [missionFlipped, setMissionFlipped] = useState(false);
  const [visionFlipped, setVisionFlipped] = useState(false);

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-cream-50/70 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-caramel-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Engineering scalable software architectures and bridging modern engineering with intelligent AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN — Profile Photograph & Highlight Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative gold/caramel frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold-500/30 via-caramel-500/20 to-espresso-900/10 rounded-3xl blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-xl opacity-75" />

              {/* Main Card Container */}
              <div className="relative bg-white p-3 rounded-2xl border border-cream-300 shadow-soft-lg overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-espresso-100">
                  <img
                    src={personalData.profilePhoto}
                    alt={personalData.fullName}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-medium tracking-wide">
                      Prarthana Gupta · Software Engineer
                    </p>
                  </div>
                </div>

                {/* Bottom Quick Badge */}
                <div className="mt-3 p-3 bg-cream-100/80 rounded-xl border border-cream-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-espresso-800">
                      B.Tech ECE · MMMUT
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-caramel-600 px-2 py-0.5 bg-caramel-100 rounded-md">
                    CGPA 8.24
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Biography, Mission & Vision, and Navigation Quick Jumps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Bio Paragraph */}
            <div className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-cream-300/80 shadow-soft backdrop-blur-sm">
              <p className="text-espresso-800 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                {personalData.aboutBio}
              </p>
            </div>

            {/* Mission and Vision 3D Flip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mission Card with 3D Flip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="perspective-1000 h-44 cursor-pointer"
                onClick={() => setMissionFlipped(!missionFlipped)}
              >
                <motion.div
                  animate={{ rotateY: missionFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full transform-style-3d shadow-soft rounded-2xl"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-white p-5 rounded-2xl border border-cream-300 flex flex-col justify-between hover:border-gold-400 transition-colors">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gold-100/80 text-gold-700 flex items-center justify-center mb-3">
                        <Target className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-espresso-950">
                        Our Mission
                      </h4>
                      <p className="text-xs text-espresso-500 mt-1">
                        Click or tap to view mission statement
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-gold-600 flex items-center gap-1">
                      Flip to explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-espresso-950 text-cream-50 p-5 rounded-2xl border border-gold-500/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-400" />
                        <span className="font-serif font-semibold text-gold-400 text-sm">
                          Core Mission
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-espresso-100">
                        {personalData.mission}
                      </p>
                    </div>
                    <span className="text-[10px] text-gold-500/80 uppercase tracking-wider">
                      Engineering with purpose
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Vision Card with 3D Flip (0.2s delay) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="perspective-1000 h-44 cursor-pointer"
                onClick={() => setVisionFlipped(!visionFlipped)}
              >
                <motion.div
                  animate={{ rotateY: visionFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full transform-style-3d shadow-soft rounded-2xl"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-white p-5 rounded-2xl border border-cream-300 flex flex-col justify-between hover:border-gold-400 transition-colors">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-caramel-100/80 text-caramel-700 flex items-center justify-center mb-3">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-espresso-950">
                        Long-Term Vision
                      </h4>
                      <p className="text-xs text-espresso-500 mt-1">
                        Click or tap to view engineering vision
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-caramel-600 flex items-center gap-1">
                      Flip to explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-espresso-950 text-cream-50 p-5 rounded-2xl border border-gold-500/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-400" />
                        <span className="font-serif font-semibold text-gold-400 text-sm">
                          Strategic Vision
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-espresso-100">
                        {personalData.vision}
                      </p>
                    </div>
                    <span className="text-[10px] text-gold-500/80 uppercase tracking-wider">
                      Future-focused innovation
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* "View My Work" Navigation Buttons */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-espresso-500 mb-3">
                Explore Sections:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {quickNavLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      onClick={() => handleScrollTo(link.href)}
                      className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-cream-200/70 border border-cream-300 text-xs font-semibold text-espresso-800 shadow-soft transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Icon className="w-3.5 h-3.5 text-gold-600 transition-transform group-hover:translate-x-0.5" />
                      <span>{link.name}</span>
                      {/* Left-to-right underline on hover */}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gold-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
