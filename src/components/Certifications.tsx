import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certificate } from '../types';
import { SectionHeading } from './UI/SectionHeading';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Cascading rotation offsets: -2deg, 0deg, +2deg
  const initialRotations = [-2, 1, 2];

  return (
    <section id="certifications" className="py-24 bg-cream-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          title="Verified Certifications"
          subtitle="Industry-recognized credentials across Machine Learning, Generative AI & Google Cloud, and Microsoft Fabric Data Engineering."
        />

        {/* Certificate Cards Waterfall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => {
            const rot = initialRotations[index % initialRotations.length];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, rotate: rot }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl bg-white border border-cream-300 shadow-soft-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-cream-50 hover:border-gold-400 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  {/* Certificate Image Preview Container */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-espresso-100 p-2.5 border-b border-cream-300">
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-espresso-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <div className="px-4 py-2 rounded-xl bg-gold-500 text-espresso-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>View Full Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-caramel-600 px-2.5 py-0.5 bg-caramel-100/70 rounded-md">
                        {cert.category}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso-950 leading-snug group-hover:text-gold-700 transition-colors">
                      {cert.title}
                    </h3>

                    {cert.provider && (
                      <p className="text-xs font-semibold text-gold-700 mt-1">
                        Issuing Organization: {cert.provider}
                      </p>
                    )}

                    <p className="text-xs text-espresso-600 leading-relaxed mt-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-cream-300/80 flex items-center justify-between text-xs font-semibold text-gold-700 group-hover:text-gold-800">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                      Verified Credential
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
