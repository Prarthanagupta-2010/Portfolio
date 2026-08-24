import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30 z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 bg-espresso-950 text-cream-50 flex items-center justify-between border-b border-gold-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-espresso-900 text-gold-400 flex items-center justify-center border border-gold-500/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400">
                  {certificate.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
                  {certificate.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-cream-200 hover:text-white hover:bg-espresso-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Certificate Image View */}
          <div className="p-4 sm:p-6 bg-cream-100/60 max-h-[70vh] overflow-y-auto flex items-center justify-center">
            <img
              src={certificate.imagePath}
              alt={certificate.title}
              className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg border border-cream-300"
            />
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-300">
            <p className="text-xs sm:text-sm text-espresso-700 max-w-xl">
              {certificate.description}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-espresso-950 text-gold-400 hover:bg-espresso-900 text-xs font-semibold shadow-soft"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
