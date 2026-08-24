import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-cream-100/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Work Experience"
          subtitle="Professional engineering experience contributing to modern web architectures, code quality, and Agile workflows."
        />

        <div className="relative">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-soft-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              {/* Dark Left Side Curtain/Panel */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="lg:col-span-4 bg-espresso-950 text-cream-50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gold-500/20"
              >
                {/* Subtle background graphics */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-caramel-500/10 rounded-full blur-xl pointer-events-none" />

                <div>
                  {/* Company Badge with Subtle Glow Pulse */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-espresso-900 border border-gold-500/30 text-gold-400 text-xs font-mono font-semibold mb-6 shadow-sm animate-pulse-subtle">
                    <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                    <span>{experienceData.type}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 tracking-tight">
                    {experienceData.company}
                  </h3>
                  <p className="text-gold-400 font-semibold text-base sm:text-lg mt-1">
                    {experienceData.role}
                  </p>

                  <div className="mt-6 space-y-2 text-xs sm:text-sm text-espresso-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-400/80" />
                      <span>{experienceData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400/80" />
                      <span>{experienceData.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-espresso-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400/80 font-mono font-medium block">
                    Core Focus Area
                  </span>
                  <p className="text-xs text-espresso-200 mt-1">
                    Modern Web Technologies, SDLC Methodologies & Collaborative Agile Engineering
                  </p>
                </div>
              </motion.div>

              {/* Right Side Responsibilities & Achievements */}
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 bg-cream-50/40">
                {/* Key Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-caramel-600" />
                    <h4 className="font-serif font-bold text-lg text-espresso-950">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-3.5">
                    {experienceData.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-xs sm:text-sm text-espresso-800 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="pt-6 border-t border-cream-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-gold-600" />
                    <h4 className="font-serif font-bold text-lg text-espresso-950">
                      Key Engineering Outcomes
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {experienceData.achievements.map((ach, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                        className="p-4 rounded-xl bg-white border border-cream-300/80 shadow-soft flex items-start gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-espresso-800 leading-relaxed font-medium">
                          {ach}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
