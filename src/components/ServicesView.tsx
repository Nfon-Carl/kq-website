/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, springBtn } from '../animations';
import { PACKAGES_DATA, FAQ_DATA } from '../data';
import {
  Truck,
  Users,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus,
  MessageSquare
} from 'lucide-react';

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
  onSelectPackage: (packageId: string) => void;
}

export default function ServicesView({
  setActiveTab,
  onSelectPackage,
}: ServicesViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HEADER HERO */}
      <section className="bg-linear-to-br from-slate-900 to-slate-950 text-white rounded-3xl py-12 px-6 sm:px-12 text-center max-w-7xl mx-auto shadow-lg">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
            Transparent Rates & Dedicated Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Services & Rates Packages
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose from comprehensive full-truck moves or flexible hourly labour helper units. No hidden fees. Certified handlers.
          </p>
        </div>
      </section>

      {/* 1. PRICING PACKAGES AS CARDS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Our Packages & Rates
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Transparent hourly pricing. Pick the crew size that fits your move.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="space-y-8"
        >
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.id === 'pkg-2';
            return (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                className={`bg-white rounded-3xl border overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  isPopular
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-blue-500/10'
                    : 'border-slate-100'
                }`}
              >
                {/* Left — image */}
                <div className="lg:w-1/3 min-h-55 lg:min-h-full relative overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                  {isPopular && (
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                      Best Value
                    </span>
                  )}
                </div>

                {/* Right — details */}
                <div className="p-6 sm:p-8 lg:w-2/3 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-blue-600 font-extrabold uppercase tracking-wider text-xs">
                      <div className="bg-blue-50 p-2.5 rounded-xl">
                        {pkg.hasTruck ? <Truck className="h-6 w-6" /> : <Users className="h-6 w-6" />}
                      </div>
                      <span>{pkg.title}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {pkg.details.map((detail, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="font-semibold leading-normal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 font-medium">
                      {pkg.durationText}
                    </div>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                    >
                      <motion.button
                        onClick={() => {
                          const msg = encodeURIComponent(
                            `Hi K&Q! I'm interested in the "${pkg.title}" package (${pkg.priceDisplay}). Could you please provide more information and let me know your availability?`
                          );
                          window.open(`https://wa.me/14433247335?text=${msg}`, '_blank');
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        transition={springBtn}
                        className="bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-md"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Book Now</span>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center justify-center space-x-2">
            <HelpCircle className="h-7 w-7 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Quick, solid answers regarding transit liability, packaging setups, and dynamic travel charges.
          </p>
        </motion.div>

        {/* FAQs list */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="space-y-4"
        >
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                  aria-label={`${openFaqIndex === idx ? 'Collapse' : 'Expand'} answer for: ${faq.question}`}
                  className="w-full flex justify-between items-center p-5 text-left font-sans text-sm sm:text-base font-bold text-slate-950 focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 bg-slate-50 p-1.5 rounded-lg border border-slate-100 shrink-0 text-slate-500">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal border-t border-slate-50/60">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

    </div>
  );
}
