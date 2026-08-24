import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-12 sm:mb-16 ${alignmentClasses} ${className}`}
    >
      {number && (
        <span className="font-mono text-xs uppercase tracking-widest text-gold-600 mb-2 font-semibold flex items-center gap-2">
          <span className="w-6 h-px bg-gold-400 inline-block"></span>
          {number}
          <span className="w-6 h-px bg-gold-400 inline-block"></span>
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${
          light ? 'text-cream-50' : 'text-espresso-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? 'text-espresso-200' : 'text-espresso-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-0.5 w-16 bg-gradient-to-r from-gold-400 to-caramel-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
