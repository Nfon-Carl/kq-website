/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { springBtn } from '../animations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'booking', label: 'Contact Us' }
  ];

  return (
    <>
      <nav
        id="kq-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-blue-100'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              onClick={() => setActiveTab('home')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={springBtn}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="bg-blue-600 text-white p-2 rounded-lg shadow-md">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-950 block leading-tight">
                  K&Q <span className="text-blue-600">Moving</span>
                </span>
                <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block -mt-1">
                  & Hauling Services
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springBtn}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right Action Trigger */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="tel:+14433247335"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={springBtn}
                className="flex items-center space-x-1.5 text-slate-700 hover:text-blue-600 font-semibold text-sm"
                id="tel-link"
              >
                <div className="bg-sky-50 text-sky-600 p-1.5 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <span>443 324 7335</span>
              </motion.a>
              <motion.button
                id="book-cta-nav"
                onClick={() => {
                  setActiveTab('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={springBtn}
                className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-sky-500 text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-wide shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contact Us</span>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <a
                href="tel:+14433247335"
                className="bg-sky-50 text-sky-600 p-2 rounded-full"
                aria-label="Call K&Q"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-blue-600 p-2 rounded-lg focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-slate-100 shadow-lg"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                  <div className="text-center text-xs text-slate-400 font-medium">
                    K&Q Moving & Hauling Services Office
                  </div>
                  <a
                    href="tel:+14433247335"
                    className="flex items-center justify-center space-x-2 bg-slate-50 text-slate-800 py-3 rounded-lg font-bold text-sm"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>443 324 7335</span>
                  </a>
                  <button
                    onClick={() => {
                      setActiveTab('booking');
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center justify-center space-x-2 bg-linear-to-r from-blue-600 to-sky-500 text-white py-3 rounded-lg font-bold text-sm shadow-md"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Get Free Estimate</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to push content down layout height */}
      <div className="h-18.25" />
    </>
  );
}
