/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, springBtn } from '../animations';
import { Truck, Phone, Mail, MapPin, Clock, ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleQuickLink = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kq-footer" className="bg-slate-900 text-slate-300 border-t-2 border-slate-800">
      {/* Upper Brand / Feature Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 py-8">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
        >
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-blue-600/15 p-3 rounded-full text-blue-400">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Call Our Support Desk</h4>
              <p className="text-slate-400 text-sm mt-0.5">Prompt, friendly support during office hours.</p>
              <a href="tel:+14433247335" className="text-blue-400 font-bold hover:underline block mt-1">
                443 324 7335
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-blue-600/15 p-3 rounded-full text-blue-400">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Email K&Q Hauling</h4>
              <p className="text-slate-400 text-sm mt-0.5">Send photo inventories or complex layout specs.</p>
              <a href="mailto:achaking357@gmail.com" className="text-blue-400 font-bold hover:underline block mt-1">
                achaking357@gmail.com
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-blue-600/15 p-3 rounded-full text-blue-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Operating Hours</h4>
              <p className="text-slate-400 text-sm mt-0.5">Crew dispatch 7 days a week.</p>
              <span className="text-slate-200 font-medium block mt-1 text-sm">
                Mon - Sun: 7:00 AM - 8:00 PM
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10"
        >
          
          {/* Company Bio */}
          <div className="lg:col-span-1.5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                K&Q <span className="text-blue-500">Moving</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              K&Q Moving & Hauling Services provides insured, ultra-professional shifting, logistics, hauling, and junk disposal values in suburban areas. Committed to careful carrying, transparent calculations, and top-tier customer reviews.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <motion.a
                href="https://www.facebook.com/share/1G3U72rHyh/"
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={springBtn}
                className="bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 p-2.5 rounded-lg"
                aria-label="Follow K&Q on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/kandqmovingandhauling/"
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={springBtn}
                className="bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-400 p-2.5 rounded-lg"
                aria-label="Follow K&Q on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={springBtn}
                className="bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-400 p-2.5 rounded-lg"
                aria-label="Follow K&Q on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleQuickLink('home')}
                  className="text-slate-400 hover:text-white transition-colors text-left flex items-center group"
                >
                  <span>Home Dashboard</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 ml-1 transition-opacity text-blue-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('services')}
                  className="text-slate-400 hover:text-white transition-colors text-left flex items-center group"
                >
                  <span>Services & Pack Details</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 ml-1 transition-opacity text-blue-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('gallery')}
                  className="text-slate-400 hover:text-white transition-colors text-left flex items-center group"
                >
                  <span>Galleries & Fleet</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 ml-1 transition-opacity text-blue-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('booking')}
                  className="text-slate-400 hover:text-white transition-colors text-left flex items-center group"
                >
                  <span>Contact Us / Inquiries</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 ml-1 transition-opacity text-blue-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-blue-500 pl-3">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleQuickLink('services')}>Residential Shifting</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleQuickLink('services')}>Commercial & Office Handlers</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleQuickLink('services')}>Furniture Assembly Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleQuickLink('services')}>Bulky & Safe Piano Relocation</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleQuickLink('services')}>Post-Construction Heavy Disposal</li>
            </ul>
          </div>

          {/* Location Area Coverage */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-l-2 border-blue-500 pl-3">
              Our Territory
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Proudly servicing standard 70-mile suburban radii and adjacent metropolitan regions. Highly efficient route times and fully secured coverage limit risk.
            </p>
            <div className="flex items-start space-x-2 text-sm text-slate-300">
              <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span>Headquarters: 6 Deveraux Ct, Gwyn Oak</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Deep Copyright section */}
      <div className="bg-slate-950 text-slate-500 text-xs py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} K&Q Moving & Hauling Services LLC. All rights reserved.
          </div>
          <div className="flex space-x-6 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Licensing & Insured Bonds</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
