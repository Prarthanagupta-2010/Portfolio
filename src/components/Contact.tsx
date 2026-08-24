import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './UI/BrandIcons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C5A059', '#8C5835', '#231812', '#F5EFE0'],
      });
    } catch {
      // Confetti fallback if disabled
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const contactItems = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      copyable: true,
      isBrand: false,
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone.replace(/\s+/g, '')}`,
      copyable: true,
      isBrand: false,
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: undefined,
      copyable: false,
      isBrand: false,
    },
    {
      id: 'linkedin',
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prarthana-gupta',
      href: personalData.linkedin,
      copyable: false,
      isBrand: true,
    },
    {
      id: 'github',
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'github.com/Prarthanagupta-2010',
      href: personalData.github,
      copyable: false,
      isBrand: true,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream-100/80 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          title="Let's Build Something Meaningful"
          subtitle="Have an idea, opportunity, or challenging problem? Let's connect and build something impactful together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT COLUMN — SEND ME A MESSAGE (Interactive Form) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel-600">
                  Direct Channel
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="floating-input peer w-full bg-cream-50/50 px-4 pt-5 pb-2 text-sm text-espresso-950 rounded-xl border border-cream-300 focus:border-gold-500 focus:bg-white focus:outline-none transition-all"
                  />
                  <label
                    htmlFor="name"
                    className="floating-label absolute left-4 top-3.5 text-xs text-espresso-500 pointer-events-none transition-all duration-200"
                  >
                    Full Name *
                  </label>
                  <div className="underline-bar h-0.5 w-0 bg-gold-500 mx-auto transition-all duration-300" />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="floating-input peer w-full bg-cream-50/50 px-4 pt-5 pb-2 text-sm text-espresso-950 rounded-xl border border-cream-300 focus:border-gold-500 focus:bg-white focus:outline-none transition-all"
                  />
                  <label
                    htmlFor="email"
                    className="floating-label absolute left-4 top-3.5 text-xs text-espresso-500 pointer-events-none transition-all duration-200"
                  >
                    Email Address *
                  </label>
                  <div className="underline-bar h-0.5 w-0 bg-gold-500 mx-auto transition-all duration-300" />
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="floating-input peer w-full bg-cream-50/50 px-4 pt-5 pb-2 text-sm text-espresso-950 rounded-xl border border-cream-300 focus:border-gold-500 focus:bg-white focus:outline-none transition-all"
                  />
                  <label
                    htmlFor="subject"
                    className="floating-label absolute left-4 top-3.5 text-xs text-espresso-500 pointer-events-none transition-all duration-200"
                  >
                    Subject *
                  </label>
                  <div className="underline-bar h-0.5 w-0 bg-gold-500 mx-auto transition-all duration-300" />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="floating-input peer w-full bg-cream-50/50 px-4 pt-5 pb-2 text-sm text-espresso-950 rounded-xl border border-cream-300 focus:border-gold-500 focus:bg-white focus:outline-none transition-all resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="floating-label absolute left-4 top-3.5 text-xs text-espresso-500 pointer-events-none transition-all duration-200"
                  >
                    Your Message *
                  </label>
                  <div className="underline-bar h-0.5 w-0 bg-gold-500 mx-auto transition-all duration-300" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden py-4 px-6 rounded-xl bg-espresso-950 text-gold-300 font-semibold text-sm shadow-soft hover:shadow-gold-glow hover:bg-espresso-900 border border-gold-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 shimmer-sweep transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <span className="relative z-10">
                    {submitted ? 'Opening Email Client...' : 'Send Message'}
                  </span>
                  <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </form>
            </div>

            <p className="text-[11px] text-espresso-500 text-center mt-6">
              Messages launch your default email client addressed to{' '}
              <span className="font-semibold text-espresso-800">{personalData.email}</span>.
            </p>
          </motion.div>

          {/* RIGHT COLUMN — CONTACT INFORMATION (Dark Brown Espresso Panel) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 bg-espresso-950 text-cream-50 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-soft-lg flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-caramel-500/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
                  Quick Communication
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 mb-6">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-espresso-200 leading-relaxed mb-8">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub. I respond promptly to engineering inquiries and collaboration opportunities.
              </p>

              {/* Contact rows */}
              <div className="space-y-3.5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const isCopied = copiedField === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="group p-3.5 rounded-2xl bg-espresso-900/80 hover:bg-espresso-800/90 border border-gold-500/20 hover:border-gold-400/50 flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30 group-hover:scale-105 group-hover:text-gold-300 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 block font-semibold">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm font-medium text-cream-100 hover:text-gold-300 truncate block transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-xs sm:text-sm font-medium text-cream-100 truncate block">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action buttons (Copy or Visit) */}
                      <div className="shrink-0 ml-2">
                        {item.copyable ? (
                          <button
                            type="button"
                            onClick={() => handleCopy(item.value, item.id)}
                            className="p-2 rounded-lg bg-espresso-950 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 transition-colors border border-gold-500/20"
                            title={`Copy ${item.label}`}
                            aria-label={`Copy ${item.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        ) : item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-espresso-950 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 transition-colors border border-gold-500/20 inline-block"
                            title={`Visit ${item.label}`}
                            aria-label={`Visit ${item.label}`}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : null}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom status badge */}
            <div className="mt-8 pt-6 border-t border-espresso-800/80 flex items-center justify-between text-xs text-espresso-200">
              <span className="font-mono text-[11px] text-gold-400">Gorakhpur, UP, India</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active & Responsive
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
