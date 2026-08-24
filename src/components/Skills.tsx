import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Cpu, Cloud, Layers, LucideIcon, Info } from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { SectionHeading } from './UI/SectionHeading';
import { AnimatedCounter } from './UI/AnimatedCounter';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Database,
  Cpu,
  Cloud,
  Layers,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-cream-50/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Technical Skills & Proficiencies"
          subtitle="Comprehensive technical competencies across software engineering, modern full-stack development, and AI/ML architectures."
        />

        {/* Disclaimer Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 p-3.5 rounded-xl bg-cream-200/60 border border-cream-300 flex items-center justify-center gap-2.5 text-xs text-espresso-700 font-medium text-center shadow-soft"
        >
          <Info className="w-4 h-4 text-caramel-600 shrink-0" />
          <span>
            Percentages represent demonstrated engineering proficiency and technical depth across projects and problem-solving, not years of experience.
          </span>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategoriesData.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  const IconComponent = iconMap[category.iconName] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-cream-300 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-cream-50/50 hover:border-gold-400"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-cream-300">
        <div className="w-12 h-12 rounded-2xl bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30 shadow-soft group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg text-espresso-950 group-hover:text-gold-700 transition-colors">
            {category.title}
          </h3>
          <span className="text-[11px] font-mono text-espresso-500">
            {category.skills.length} core competencies
          </span>
        </div>
      </div>

      {/* Skills Progress Bars */}
      <div className="space-y-4">
        {category.skills.map((skill, sIdx) => (
          <div key={skill.name} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-espresso-800 tracking-tight">
                {skill.name}
              </span>
              <span className="font-mono text-[11px] font-bold text-caramel-700">
                <AnimatedCounter to={skill.percentage} suffix="%" duration={1.5} />
              </span>
            </div>

            {/* Bar Container */}
            <div className="h-2 w-full bg-cream-200 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.1 + sIdx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full bg-gradient-to-r from-gold-500 via-caramel-500 to-espresso-900 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
