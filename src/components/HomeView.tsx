/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, springBtn } from '../animations';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../data';
import { ServiceType } from '../types';
import { 
  Truck, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  UserCheck, 
  ArrowRight, 
  Star, 
  Award,
  ThumbsUp,
  MapPin,
  MessageSquare,
  Users,
  Heart,
  Instagram,
  Facebook
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onSelectService: (serviceType: any) => void;
}

export default function HomeView({ setActiveTab, onSelectService }: HomeViewProps) {
  const titles = useMemo(
    () => ['Hauling', 'Assembly', 'Junk Removal', 'Heavy Lifting', 'Relocation'],
    []
  );
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: 'Fully Licensed & Insured',
      description: 'Your valuables are protected by comprehensive transit coverage. Move with absolute peace of mind.'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: 'No Hidden Surcharges',
      description: 'Transparent hourly rates. Fast, honest estimates with all materials, tolls, and travel declared upfront.'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Always On-Time Crews',
      description: 'We respect your moving windows. Our polite helpers arrive prepared, packed, and prompt.'
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: 'Expert Moving Specialists',
      description: 'Trained to carry bulky objects down tricky corridors without scratching hardwood floors or drywall.'
    }
  ];

  const stats = [
    { number: '2000+', label: 'Homes Moved' },
    { number: '99.4%', label: 'Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Yelp Review' },
    { number: '10+', label: 'Years of Experience' }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center text-center">
        {/* Background Image with Dark Linear Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/KQ truck image.png"
            alt="K&Q Moving and Hauling Heavy Truck"
            className="w-full h-full object-cover object-center opacity-70 select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-10 pb-24 md:pt-14 md:pb-32 w-full flex justify-center">
          <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-xs font-bold tracking-wider uppercase mx-auto"
            >
              <Award className="h-4 w-4 shrink-0 text-blue-400 animate-pulse" />
              <span>Top Rated Local Moving & Hauling Crew</span>
            </motion.div>

            {/* Headline with animated cycling word */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white text-center"
            >
              <span className="block leading-none">K&amp;Q Moving &amp;</span>
              <span className="relative flex w-full justify-center overflow-hidden h-[1.2em] mt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-black bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: '0%', opacity: 1 }
                        : { y: titleNumber > index ? '-150%' : '150%', opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-slate-300 mt-2 tracking-wide">
                Services
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-center max-w-2xl"
            >
              Dependable local moving of houses, apartments, and offices. Plus expert furniture assembly, junk cleanup, and heavy lifting. Connect with us for a fast, free custom estimate!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
                className="w-full sm:w-auto"
              >
                <motion.button
                  onClick={() => document.getElementById('services-teaser')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={springBtn}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold tracking-wide shadow-lg shadow-blue-600/30 text-center flex items-center justify-center space-x-2 w-full"
                >
                  <span>Book Our Services</span>
                </motion.button>
              </motion.div>
              <motion.button
                onClick={() => { setActiveTab('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={springBtn}
                className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-white px-8 py-4 rounded-xl text-base font-bold text-center w-full sm:w-auto flex items-center justify-center"
              >
                Give us a Call
              </motion.button>
            </motion.div>

            {/* Social Icons in Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center space-x-4 pt-4"
            >
              <motion.a
                href="https://www.instagram.com/kandqmovingandhauling/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.18, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={springBtn}
                className="bg-gradient-to-tr from-orange-500 to-pink-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Follow K&Q on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1G3U72rHyh/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.18, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                transition={springBtn}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Follow K&Q on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Features Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8 pt-12 border-t border-slate-800/80 w-full max-w-xl text-slate-300 mx-auto justify-center justify-items-center"
            >
              <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
                <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
                <span>Licensed & Insured</span>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
                <Clock className="h-5 w-5 text-blue-400 shrink-0" />
                <span>7 Days a Week</span>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm font-semibold col-span-2 md:col-span-1">
                <ThumbsUp className="h-5 w-5 text-blue-400 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES TEASER */}
      <section id="services-teaser" className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            How We Can Help You Today
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Professional carrying, strapping, dismantling, and dumping solutions suited to any property.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {SERVICES_DATA.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2.5 rounded-xl shadow-md">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>
                <div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                  >
                    <motion.button
                      onClick={() => {
                        if (service.type === ServiceType.ASSEMBLY) {
                          window.location.href = 'https://schedulebility.com/KQMovingHauling?iframe=1&category=17959';
                        } else if (service.type === ServiceType.HEAVY_ITEM) {
                          window.location.href = 'https://schedulebility.com/KQMovingHauling?iframe=1&category=17960';
                        } else if (service.type === ServiceType.JUNK_REMOVAL) {
                          window.open('https://wa.me/14433247335', '_blank');
                        } else {
                          onSelectService(service.type);
                          setActiveTab('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      transition={springBtn}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white font-bold text-sm tracking-wide px-5 py-2.5 rounded-xl shadow-md"
                    >
                      <span>{service.type === ServiceType.JUNK_REMOVAL ? 'Contact Us' : 'Book Service'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springBtn}
            className="inline-flex items-center space-x-2 text-slate-900 font-extrabold text-sm tracking-wider uppercase border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-xl transition-colors"
          >
            <span>Browse All Service Options</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* 3. WHY CHOOSE US STATS */}
      <section className="bg-gradient-to-br from-blue-600 to-sky-500 text-white rounded-3xl max-w-7xl mx-4 sm:mx-6 lg:mx-8 xl:mx-auto px-6 sm:px-12 py-12 shadow-xl relative overflow-hidden">
        {/* Abstract shapes inside */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 rounded-full blur-2xl" />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className={`${i >= 2 ? 'pt-6 lg:pt-0' : ''} ${i !== 0 && i !== 2 ? 'lg:border-l lg:border-white/10' : ''}`}>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight">{stat.number}</h3>
              <p className="text-slate-100 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE US GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Our Clients Trust K&Q Moving
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are not just helper hands. We are licensed, trained logistics professionals committed to safety and smiles.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT K&Q SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-video lg:aspect-square shadow-xl group border border-slate-100">
              <img
                src="/images/Moving Items 2.png"
                alt="K&Q Moving crew at work"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              {/* Established Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                <Award className="h-4 w-4 text-blue-400" />
                <span>Est. 2011</span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <p className="text-slate-600 text-xs sm:text-sm font-medium italic leading-relaxed">
                "Our mission is simple: to offer premium, careful, and fully transparent moving and hauling that removes every ounce of stress from your big day."
              </p>
              <span className="text-slate-900 text-xs font-bold block">— K&Q Dispatch Team</span>
            </div>
          </motion.div>

          {/* Right Column: Content & Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users className="h-3.5 w-3.5 text-blue-600" />
                <span>Our Story & Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Family Owned & Operated <br />
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Commitment to Care</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                What began over a decade ago with a single dependable hauling truck and two pairs of energetic hands has evolved into South Carolina's premier local moving and assembly crews. K&Q Moving & Hauling is founded on absolute honesty and pristine work ethics.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We believe in serving our neighborhoods with meticulous handling—treating every flat screen, heirloom piano, and office filing cabinet as if it were our own. From local studio apartments to corporate warehouse transitions, your peace of mind is our highest priority.
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-2 rounded-xl shrink-0">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide">Community First</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">Founded here in Columbia, we treat every client like our next-door neighbor.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-2 rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide">Safe Transit</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">Premium loading gear, protective blankets, and licensed transport experts.</p>
                </div>
              </div>
            </div>

            {/* Get to know us CTA */}
            <div className="pt-4">
              <motion.button
                onClick={() => { setActiveTab('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={springBtn}
                className="bg-slate-900 text-white font-sans font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase inline-flex items-center space-x-2"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="bg-slate-900 text-white rounded-3xl max-w-7xl mx-4 sm:mx-6 lg:mx-8 xl:mx-auto overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/images/IMG-20260527-WA0060.jpg" alt="" loading="lazy" className="w-full h-full object-cover opacity-10" aria-hidden="true" />
        </div>
        <div className="relative p-8 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-60px' }}
            className="space-y-3 max-w-2xl text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              See Our Work in Action
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Browse real photos from our moves, hauls, and assembly jobs. See the care and professionalism we bring to every job.
            </p>
          </motion.div>
          <motion.button
            onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={springBtn}
            className="shrink-0 bg-blue-600 text-white font-bold h-14 px-8 rounded-xl tracking-wide flex items-center justify-center space-x-2 shadow-xl shadow-blue-600/30"
          >
            <ArrowRight className="h-5 w-5" />
            <span>View Our Gallery</span>
          </motion.button>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-4 sm:mx-6 lg:mx-8 xl:mx-auto px-4 sm:px-8 bg-slate-50 py-16 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
            <span>Over 1,200 Five-Star Stories</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Loved By Families & Businesses
          </h2>
        </div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {TESTIMONIALS_DATA.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-amber-400 shrink-0" />
                  ))}
                </div>
                {/* Text quote */}
                <p className="text-slate-600 text-sm leading-relaxed italic font-normal">
                  "{t.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-xs text-slate-400">
                <div>
                  <h4 className="text-slate-900 font-bold text-sm block leading-none">{t.name}</h4>
                  <span className="text-slate-500 font-medium block mt-1 flex items-center">
                    <MapPin className="h-3 w-3 text-slate-400 mr-1" /> {t.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sky-600 font-bold block bg-sky-50 px-2 py-1 rounded">
                    {t.service}
                  </span>
                  <span className="text-slate-400 font-medium block mt-1">{t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
