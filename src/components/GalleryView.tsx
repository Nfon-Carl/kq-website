/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Minimize2, ZoomIn } from 'lucide-react';
import { fadeUp, staggerContainer, springBtn } from '../animations';

export default function GalleryView({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [filter, setFilter] = useState<'all' | 'moving' | 'hauling' | 'packing' | 'assembly'>('all');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_DATA[0] | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'moving', label: 'Moving Fleet' },
    { id: 'hauling', label: 'Junk Hauling' },
    { id: 'packing', label: 'Packing Gear' },
    { id: 'assembly', label: 'Assembly Jobs' }
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <div className="space-y-12 pb-16">
      
      {/* HEADER HERO */}
      <section className="bg-linear-to-br from-blue-900 to-slate-900 text-white rounded-3xl py-12 px-6 sm:px-12 text-center max-w-7xl mx-auto shadow-md">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">
            Our Work in Action
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            K&Q Operations Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take an inside look at our pristine trucks, protective wrapping gear, furniture reconstruction expertise, and clean dump setups.
          </p>
        </motion.div>
      </section>

      {/* FILTER BUTTONS */}
      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="visible"
        viewport={{ once: false, margin: '-60px' }}
        className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto px-4"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            variants={fadeUp}
            onClick={() => setFilter(cat.id as any)}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={springBtn}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase ${
              filter === cat.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
            }`}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-slate-400 font-medium">
            No gallery images found for this category.
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="h-64 sm:h-72 relative overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover transparent overlay with magnifying eye icon */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md text-white p-3.5 rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Category Capsule Tag */}
                    <span className="absolute top-4 left-4 bg-slate-900/95 text-white text-[10px] font-extrabold uppercase py-1 px-3 rounded-full tracking-wider border border-white/10 select-none">
                      {item.category}
                    </span>
                  </div>

                  {/* Caption descriptor text */}
                  <div className="p-5 grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-950 capitalize group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* FULL SCALE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-slate-950/90 text-white p-2.5 rounded-full hover:bg-red-600 transition-colors z-10 border border-white/10"
                aria-label="Close Preview"
              >
                <Minimize2 className="h-5 w-5" />
              </button>

              {/* Responsive Layout inside zoom */}
              <div className="flex flex-col md:flex-row min-h-100">
                {/* Image */}
                <div className="md:w-3/5 bg-slate-950 flex items-center justify-center">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[75vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Sidebar descriptions */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold tracking-wider uppercase py-1 px-3 rounded-full border border-blue-100">
                      {selectedImage.category} Operations
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                      {selectedImage.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-normal font-normal">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 capitalize">
                      Our Service Guarantee
                    </h4>
                    <p className="text-xs text-slate-500">
                      We replicate this rigorous safety and equipment standards on every single client order. Licensed, bonded, and expert crews.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        setActiveTab('booking');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold py-3.5 rounded-xl text-xs tracking-wider uppercase transition-colors"
                    >
                      <span>Book Similar Services</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
