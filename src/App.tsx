/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import BookingView from './components/BookingView';
import { ServiceType } from './types';

const VALID_TABS = new Set(['home', 'services', 'gallery', 'booking']);

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedServiceFilter, setSelectedServiceFilter] = useState<ServiceType | null>(null);

  // Sync initial tab from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const initial = VALID_TABS.has(hash) ? hash : 'home';
    setActiveTab(initial);
    window.history.replaceState({ tab: initial }, '', `#${initial}`);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const tab = e.state?.tab ?? window.location.hash.slice(1);
      if (VALID_TABS.has(tab)) setActiveTab(tab);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    // Automatically match the associated service type for the package
    if (packageId === 'pkg-4') {
      setSelectedServiceFilter(ServiceType.LABOUR);
    } else {
      setSelectedServiceFilter(ServiceType.MOVING);
    }
    setActiveTab('booking');
  };

  const handleSelectService = (serviceType: ServiceType) => {
    setSelectedServiceFilter(serviceType);
    // Clear packaging state to allow fresh selections
    setSelectedPackageId(null);
  };

  // Sync tab state with browser history
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState({ tab }, '', `#${tab}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Header Sticky Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      {/* Main Container with Page Route Fade Transitions */}
      <main className="grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            id="page-content-wrapper"
            className={`w-full ${activeTab === 'home' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12'}`}
          >
            {activeTab === 'home' && (
              <HomeView 
                setActiveTab={handleSetActiveTab} 
                onSelectService={handleSelectService} 
              />
            )}
            
            {activeTab === 'services' && (
              <ServicesView
                setActiveTab={handleSetActiveTab}
                onSelectPackage={handleSelectPackage}
              />
            )}
            
            {activeTab === 'gallery' && (
              <GalleryView setActiveTab={handleSetActiveTab} />
            )}
            
            {activeTab === 'booking' && (
              <BookingView 
                selectedPackageId={selectedPackageId}
                setSelectedPackageId={setSelectedPackageId}
                selectedServiceFilter={selectedServiceFilter}
                setServiceFilter={setSelectedServiceFilter}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer setActiveTab={handleSetActiveTab} />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/14433247335"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with K&Q on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-green-500/40"
        style={{ backgroundColor: '#25D366' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

    </div>
  );
}
