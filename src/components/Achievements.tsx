import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Globe2, Zap, Sparkles } from 'lucide-react';
import { statsData, achievementsData } from '../data/portfolioData';
import { Achievement } from '../types';
import { SectionHeading } from './UI/SectionHeading';
import { AnimatedCounter } from './UI/AnimatedCounter';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-cream-50/90 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          title="Achievements & Recognition"
          subtitle="Continuous learning, technical problem-solving, and hands-on engineering excellence."
        />

        {/* TOP FOUR ANIMATED STATISTIC COUNTERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 sm:p-7 rounded-3xl bg-espresso-950 text-cream-50 border border-gold-500/30 shadow-soft-lg flex flex-col justify-between relative overflow-hidden group hover:border-gold-400 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle gold glow inside */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-gold-500/20 transition-all" />

              <div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 tracking-tight mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <h4 className="font-sans font-bold text-sm sm:text-base text-cream-50">
                  {stat.label}
                </h4>
              </div>

              {stat.sublabel && (
                <p className="text-[11px] sm:text-xs text-espresso-200 mt-3 pt-3 border-t border-espresso-800 font-mono">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* ACHIEVEMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, idx) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const getIcon = () => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Globe2;
      case 2:
        return Zap;
      default:
        return Trophy;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.12,
      }}
      className="group relative rounded-3xl bg-white border border-cream-300 shadow-soft-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold-400"
    >
      {/* Animated amber border glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-gold-400/0 group-hover:border-gold-400/40 transition-colors pointer-events-none" />

      <div>
        {/* Top Badge & Icon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="w-12 h-12 rounded-2xl bg-espresso-950 text-gold-400 flex items-center justify-center border border-gold-500/30 shadow-soft"
          >
            <Icon className="w-6 h-6" />
          </motion.div>

          {achievement.badge && (
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-caramel-700 bg-caramel-100/80 px-3 py-1 rounded-full border border-caramel-200">
              {achievement.badge}
            </span>
          )}
        </div>

        {/* Optional Image / Badge with Ken Burns effect */}
        {achievement.imagePath && (
          <div className="mb-6 rounded-2xl overflow-hidden bg-cream-100 p-3 border border-cream-300 flex items-center justify-center">
            <img
              src={achievement.imagePath}
              alt={achievement.title}
              className="max-h-24 w-auto object-contain transform transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        )}

        <span className="text-[11px] font-mono uppercase tracking-wider text-espresso-500 font-semibold block mb-1">
          {achievement.category}
        </span>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950 leading-snug group-hover:text-gold-700 transition-colors">
          {achievement.title}
        </h3>

        <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed mt-3">
          {achievement.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-cream-300 flex items-center gap-2 text-xs font-semibold text-gold-700">
        <Sparkles className="w-3.5 h-3.5 text-gold-500" />
        <span>Demonstrated Technical Excellence</span>
      </div>
    </motion.div>
  );
};
