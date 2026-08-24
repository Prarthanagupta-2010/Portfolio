import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Code2 } from 'lucide-react';
import { GitHubIcon } from './UI/BrandIcons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeading } from './UI/SectionHeading';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & LLMs' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'enterprise', label: 'Enterprise & Desktop' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') return project.id === 'substream-ai' || project.id === 'clerkly';
    if (selectedFilter === 'fullstack') return project.id === 'smartattend' || project.id === 'vybechat' || project.id === 'library-management';
    if (selectedFilter === 'enterprise') return project.id === 'library-management' || project.id === 'substream-ai';
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-cream-100/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-caramel-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Featured Projects"
          subtitle="Engineered systems spanning real-time platforms, desktop AI media pipelines, and scalable enterprise architectures."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedFilter === cat.id
                  ? 'bg-espresso-950 text-gold-300 shadow-soft scale-105 border border-gold-500/40'
                  : 'bg-white text-espresso-700 hover:bg-cream-200/80 border border-cream-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-3xl bg-white border border-cream-300 shadow-soft-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* DARK LEFT PANEL with slide-in & blur-to-sharp animation */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-4 bg-espresso-950 text-cream-50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gold-500/20"
        >
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-caramel-500/10 rounded-full blur-xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-gold-400 tracking-wider">
                {project.number}
              </span>
              <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-espresso-900 border border-gold-500/30 text-gold-300">
                {project.type}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 tracking-tight group-hover:tracking-wide transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-espresso-200 leading-relaxed mt-4">
              {project.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-espresso-800/80 flex items-center justify-between">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 text-xs font-semibold transition-all duration-300 border border-gold-500/30"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs text-gold-400/80 font-mono font-medium">
                <Code2 className="w-3.5 h-3.5" />
                <span>Production Architecture</span>
              </div>
            )}

            <div className="w-8 h-8 rounded-lg bg-espresso-900 flex items-center justify-center text-gold-400/60 group-hover:text-gold-400 group-hover:bg-espresso-800 transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT PANEL (Fades in after 0.3s) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-cream-50/30"
        >
          {/* Key Outcomes Cards */}
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-espresso-950 mb-3.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-600" />
              Key Engineering Outcomes & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyOutcomes.map((outcome, oIdx) => (
                <motion.div
                  key={oIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + oIdx * 0.06 }}
                  className="p-3.5 rounded-xl bg-white border border-cream-300 shadow-soft flex items-start gap-2.5 hover:border-gold-400/60 hover:bg-cream-50/50 transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-caramel-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-espresso-800 leading-relaxed font-medium">
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Tags (Elastic entrance + shimmer effect) */}
          <div className="pt-4 border-t border-cream-300">
            <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-espresso-500 block mb-2.5">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                    delay: 0.1 + tIdx * 0.04,
                  }}
                  className="relative px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-cream-300 text-espresso-800 shadow-sm hover:border-gold-500/60 hover:text-espresso-950 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
