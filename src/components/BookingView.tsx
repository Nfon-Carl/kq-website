/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PACKAGES_DATA } from '../data';
import { ServiceType } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle,
  Trash2,
  HelpCircle,
  Info,
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface BookingViewProps {
  selectedPackageId: string | null;
  setSelectedPackageId: (id: string | null) => void;
  selectedServiceFilter: any;
  setServiceFilter: (serviceType: any) => void;
}

interface ContactInquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  message: string;
  contactPreference: 'phone' | 'email' | 'any';
  submittedTime: string;
  status: 'Received' | 'In Review' | 'Processed';
}

export default function BookingView({ 
  selectedPackageId, 
  setSelectedPackageId, 
  selectedServiceFilter, 
  setServiceFilter 
}: BookingViewProps) {
  // Inquiries Local History State
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  
  // Contact Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<string>('General Relocation Inquiry');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [contactPreference, setContactPreference] = useState<'phone' | 'email' | 'any'>('any');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newlyCreatedInquiry, setNewlyCreatedInquiry] = useState<ContactInquiry | null>(null);

  // Auto-fill form fields values if navigated from services or packages
  useEffect(() => {
    if (selectedPackageId) {
      const activePkg = PACKAGES_DATA.find(p => p.id === selectedPackageId);
      if (activePkg) {
        setInquiryType(`Relocation Quote: ${activePkg.title}`);
        setMessage(`Hello, I would like to receive an estimate for the ${activePkg.title} (${activePkg.priceDisplay}). Please provide availability for the preferred date.`);
      }
    } else if (selectedServiceFilter) {
      setInquiryType(`Service Inquiry: ${selectedServiceFilter}`);
      setMessage(`Hello, I am interested in your ${selectedServiceFilter} options. Please get in back touch.`);
    }
  }, [selectedPackageId, selectedServiceFilter]);

  // Read saved contact records on mount
  useEffect(() => {
    const saved = localStorage.getItem('kq-contact-inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (err) {
        console.error('Failed reading user contact logs browser storage', err);
      }
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !message) {
      alert('Please fill out all mandatory fields.');
      return;
    }

    setIsSubmitting(true);

    const generatedId = `KQ-MSG-${Math.floor(100 + Math.random() * 900)}`;
    const newInquiry: ContactInquiry = {
      id: generatedId,
      fullName,
      phone,
      email,
      serviceType: inquiryType,
      preferredDate: preferredDate || 'Immediate Callback',
      message,
      contactPreference,
      submittedTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Received'
    };

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          inquiry_id: generatedId,
          name: fullName,
          email: email,
          phone: phone,
          service_type: inquiryType,
          preferred_date: preferredDate || 'Immediate Callback',
          contact_preference: contactPreference,
          message: message,
        }),
      });
      if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
    } catch (err) {
      console.error('Form submission failed:', err);
      alert('There was a problem sending your message. Please call us directly at 443-324-7335.');
      setIsSubmitting(false);
      return;
    }

    const updatedList = [newInquiry, ...inquiries];
    setInquiries(updatedList);
    localStorage.setItem('kq-contact-inquiries', JSON.stringify(updatedList));
    setNewlyCreatedInquiry(newInquiry);
    setShowSuccessModal(true);

    setFullName('');
    setPhone('');
    setEmail('');
    setPreferredDate('');
    setMessage('');
    setContactPreference('any');
    setSelectedPackageId(null);
    setServiceFilter(null);
    setIsSubmitting(false);
  };

  const handleDeleteInquiry = (id: string) => {
    const list = inquiries.filter(item => item.id !== id);
    setInquiries(list);
    localStorage.setItem('kq-contact-inquiries', JSON.stringify(list));
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-gradient-to-br from-blue-700 to-sky-600 text-white rounded-3xl py-12 px-6 sm:px-12 text-center max-w-7xl mx-auto shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-92 h-92 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-200" /> Free Custom Estimate
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Connect With Our Team
          </h1>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
            Have a question, or planning your moving day? Fill out the form below. Our dispatchers will reply in minutes and answer any custom logistics queries.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT: FORM & INFO PANELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Polished Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950">
              Send a Secure Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Enter your details, choose your category, and describe your hauling requirements.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center">
                  <User className="h-3.5 w-3.5 mr-1 text-blue-500" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center">
                  <Phone className="h-3.5 w-3.5 mr-1 text-blue-500" /> Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(000) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Row 2: Email and Move/Contact date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center">
                  <Mail className="h-3.5 w-3.5 mr-1 text-blue-500" /> Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-blue-500" /> Preferred Service Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
                />
              </div>
            </div>

            {/* Row 3: Inquiry Category dropdown */}
            <div className="space-y-1">
              <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                Inquiry Topic / Moving Crew Select
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              >
                <option value="General Relocation Inquiry">General Relocation / Help Inquiry</option>
                <option value="Relocation Quote Request">Full-Service Moving Estimate (Truck Included)</option>
                <option value="Furniture Assembly Inquiry">Specialized Furniture Assembly & Tools Helper</option>
                <option value="Bulk Junk Disposal Inquiry">Bulky Item Hauling or Junk Disposal</option>
                <option value="Helpers and Labor Only">Labor-Only Crew (Loading / Unloading Helpers)</option>
                <option value="Commercial Business Moving Inquiry">Commercial or Office Business Moving</option>
                <option value="Other Service Request">Other Inquiry or Custom Request</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider flex items-center">
                <MessageSquare className="h-3.5 w-3.5 mr-1 text-blue-500" /> Message & Inquiry Details *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share detail parameters about your relocation. For example: pickup zip, delivery zip, large furniture pieces, stair flights, storage lockers, etc."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
              />
            </div>

            {/* Contact Preference Checkbox Row */}
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                Preferred Callback Method:
              </span>
              <div className="flex items-center space-x-3 text-xs font-bold text-slate-700">
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preference"
                    checked={contactPreference === 'any'}
                    onChange={() => setContactPreference('any')}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span>Either</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preference"
                    checked={contactPreference === 'phone'}
                    onChange={() => setContactPreference('phone')}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span>Phone Call</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="preference"
                    checked={contactPreference === 'email'}
                    onChange={() => setContactPreference('email')}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span>Email Only</span>
                </label>
              </div>
            </div>

            {/* Submission button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-sans font-extrabold py-3.5 rounded-xl text-xs tracking-widest uppercase shadow-lg disabled:opacity-50 hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? 'Transmitting Details...' : 'Send Inquiry Message'}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Office Info & Help Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Details Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-950 uppercase tracking-widest">
                K&Q Contact Office
              </h3>
              {/* Animated active online indicator block */}
              <div className="flex items-center space-x-1.5 bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-[10px] font-bold">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span>Active Dispatch</span>
              </div>
            </div>
            
            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center space-x-3">
                <div className="bg-sky-50 text-sky-600 p-2.5 rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-extrabold block uppercase tracking-wider">Phone Helpline</span>
                  <a href="tel:+14433247335" className="text-blue-600 hover:underline font-bold text-base block mt-0.5">443 324 7335</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-sky-50 text-sky-600 p-2.5 rounded-xl shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-extrabold block uppercase tracking-wider">Email Box</span>
                  <a href="mailto:achaking357@gmail.com" className="text-blue-600 hover:underline font-bold text-sm block mt-0.5">achaking357@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-sky-50 text-sky-600 p-2.5 rounded-xl shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-extrabold block uppercase tracking-wider">Operating Hours</span>
                  <span className="text-slate-900 block mt-0.5 text-sm font-bold">Mon - Sun: 7:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-sky-50 text-sky-600 p-2.5 rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-extrabold block uppercase tracking-wider">Mailing Address</span>
                  <span className="text-slate-800 text-xs block mt-0.5 leading-relaxed font-bold">6 Deveraux Ct, Gwyn Oak</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Core Values & Commitments Cards */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
            <h4 className="text-sm font-black uppercase text-indigo-400 tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5" /> Our Response Commitments
            </h4>
            <div className="space-y-3 font-semibold text-xs leading-normal text-slate-300">
              <p>
                🤝 <strong>Licensed & Insured:</strong> Full liability protection on all moving and hauling services across South Carolina.
              </p>
              <p>
                ⚡ <strong>15-Minute Response:</strong> Our scheduling agents review and reply to message inquiries within average working minutes.
              </p>
              <p>
                🏷️ <strong>Zero Hidden Fees:</strong> Quotes calculated based on your details are strictly locked in with transparent invoicing.
              </p>
            </div>
          </div>

          {/* Quick FAQ info block */}
          <div className="bg-blue-50/50 p-5 rounded-3xl border border-blue-100/50 flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest">Need Immediate Booking?</h5>
              <p className="text-[11px] text-slate-500 leading-normal font-medium">
                For prompt same-day service, extreme emergencies, or last-minute cancellation moves, please call our toll-free phone line directly at <strong>443 324 7335</strong>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. YOUR SENT INQUIRIES HISTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-t border-slate-100 pt-10 space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 flex items-center gap-2">
            <MessageSquare className="h-5.5 w-5.5 text-blue-600" /> My Transmitted Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Messages transmitted to K&Q. Submitted records are stored securely in your browser's local sandbox state.
          </p>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-slate-50 p-10 rounded-3xl text-center space-y-3 max-w-xl mx-auto border border-dashed border-slate-200">
            <HelpCircle className="h-9 w-9 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <h4 className="text-slate-900 font-bold text-sm">No Sent Messages Found</h4>
              <p className="text-slate-500 text-xs font-normal">Submit your contact query above. Sent items appear here instantly.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-100 p-5 sm:p-6 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl text-xs font-semibold">
                    <div>
                      <span className="text-blue-600 font-black block">{item.id}</span>
                      <span className="text-[10px] text-slate-400">{item.submittedTime}</span>
                    </div>
                    <span className="bg-blue-50 text-blue-600 border border-blue-100 font-extrabold px-2.5 py-0.5 rounded-full text-[9px] tracking-wider uppercase">
                      {item.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-600">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Name</span>
                      <span className="text-slate-900 mt-0.5 block font-bold">{item.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Contact Info</span>
                      <span className="text-slate-900 mt-0.5 block font-bold truncate">{item.email}</span>
                      <span className="text-xs text-slate-500 font-medium">{item.phone}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Inquiry Type</span>
                      <span className="text-blue-600 font-bold mt-0.5 block">{item.serviceType}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Message Details</span>
                      <p className="text-slate-700 mt-1 leading-relaxed font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100/40 text-[11px] whitespace-pre-wrap">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[10px] text-slate-400 font-bold">
                    PREFER CALBACK: <span className="text-slate-800 uppercase font-extrabold">{item.contactPreference}</span>
                  </div>

                  <button
                    onClick={() => handleDeleteInquiry(item.id)}
                    className="bg-red-50 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-lg transition-colors"
                    title="Delete log record"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. SUCCESS SUBMISSION MODAL */}
      <AnimatePresence>
        {showSuccessModal && newlyCreatedInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 space-y-5 shadow-2xl text-center border border-slate-100"
            >
              <div className="bg-green-50 text-green-600 p-3.5 rounded-full w-14 h-14 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="h-7 w-7 text-green-500" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-black text-slate-950">
                  Inquiry Submitted!
                </h3>
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-wider bg-blue-50 py-1 px-3 rounded-full inline-block">
                  Reference ID: {newlyCreatedInquiry.id}
                </span>
                <p className="text-xs text-slate-500 leading-normal pt-1 font-normal">
                  Thank you, <strong>{newlyCreatedInquiry.fullName}</strong>. Your message regarding <em>{newlyCreatedInquiry.serviceType}</em> was compiled locally on this screen. K&Q Dispatch agents are on it!
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl text-left text-[11px] space-y-1 text-slate-600 font-semibold border border-slate-100 leading-normal">
                <div className="flex justify-between">
                  <span>Callback preference:</span>
                  <span className="text-slate-900 uppercase font-black">{newlyCreatedInquiry.contactPreference}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Date:</span>
                  <span className="text-slate-900 font-bold">{newlyCreatedInquiry.preferredDate}</span>
                </div>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold py-3 rounded-xl text-xs tracking-wider uppercase transition-colors"
              >
                Close Receipt Overview
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
