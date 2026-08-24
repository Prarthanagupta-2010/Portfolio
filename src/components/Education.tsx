import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-cream-50/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Education"
          subtitle="Rigorous academic foundations combining Electronics & Communication Engineering with practical Computer Science excellence."
        />

        <div className="relative">
          {/* Main Education Card with Drop and Subtle Rotation */}
          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl bg-white p-6 sm:p-10 border border-cream-300 shadow-soft-lg transition-all duration-500 hover:shadow-2xl hover:border-gold-400"
          >
            {/* Animated subtle gold border trace */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gold-400/0 group-hover:border-gold-400/60 transition-colors duration-500 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-cream-300">
              <div className="flex items-start gap-4">
                {/* Toss icon animation on hover */}
                <motion.div
                  whileHover={{ y: -8, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30 shadow-soft cursor-pointer"
                >
                  <GraduationCap className="w-7 h-7" />
                </motion.div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-caramel-600 font-semibold block mb-1">
                    Undergraduate Degree
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 leading-tight">
                    {educationData.institution}
                  </h3>
                  <p className="text-sm sm:text-base text-gold-700 font-semibold mt-1">
                    {educationData.degree}
                  </p>
                </div>
              </div>

              {/* Status and CGPA Badges */}
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5 shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-espresso-700 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-espresso-600" />
                  <span>{educationData.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-espresso-950 text-gold-400 border border-gold-500/40 shadow-soft">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span className="font-mono font-bold text-sm tracking-wide">
                    CGPA: {educationData.cgpa}
                  </span>
                </div>
                <span className="text-[11px] text-espresso-500 font-medium md:text-right">
                  Mode: {educationData.mode}
                </span>
              </div>
            </div>

            {/* Rising Highlights Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gold-600" />
                <h4 className="font-serif font-bold text-base sm:text-lg text-espresso-950">
                  Key Academic Highlights & Engineering Focus
                </h4>
              </div>

              <div className="space-y-3">
                {educationData.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                    className="p-4 rounded-xl bg-cream-100/60 border border-cream-300/80 flex items-start gap-3 hover:bg-white hover:border-gold-400/40 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-espresso-800 leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
