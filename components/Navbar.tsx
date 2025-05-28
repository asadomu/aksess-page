/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Search, Plus, Phone, Menu, X } from 'lucide-react';

const AksessLogo = () => (
  <div className="flex items-center">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-[#915EFF]">
      <path d="M16 0L32 9.33333V22.6667L16 32L0 22.6667V9.33333L16 0Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M16.0001 4.66663L28.0001 11.6666V18.6666L16.0001 25.6666L4.00008 18.6666V11.6666L16.0001 4.66663Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21.3333L8 16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21.3333V25.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16.6666L16 21.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 11.6666L16 18.6666L28 11.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold text-gray-800">Aksess</span>
  </div>
);


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20"> {/* Adjusted height for mobile */}
          {/* Left Side: Logo and Search */}
          <div className="flex items-center">
            <AksessLogo />
            <div className="hidden md:flex items-center ml-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Cari Event"
                  className="pl-10 pr-4 py-2.5 w-64 rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#915EFF] focus:border-[#915EFF] transition-colors text-sm"
                  aria-label="Cari Event"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Side: Nav Links and Buttons (Desktop) */}
          <nav className="hidden md:flex items-center space-x-5">
            <a href="#" className="text-gray-600 hover:text-[#915EFF] transition-colors text-sm font-medium">Tiketku</a>
            <button
              type="button"
              className="flex items-center bg-[#915EFF] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7e4fe1] transition-colors"
              aria-label="Buat Event"
            >
              <Plus size={18} className="mr-1.5" />
              Buat Event
            </button>
            <button
              type="button"
              className="flex items-center text-[#915EFF] border border-[#915EFF] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#915EFF] hover:text-white transition-colors"
              aria-label="Hubungi Kami"
            >
              <Phone size={16} className="mr-1.5" />
              Hubungi Kami
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#915EFF] focus:outline-none p-2 -mr-2" // Added padding for easier touch
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 sm:top-20 left-0 right-0 z-40 pb-6"> {/* Adjusted top based on navbar height */}
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 space-y-4"> {/* Also apply max-w-6xl here for consistency */}
            <div className="relative">
              <input
                type="search"
                placeholder="Cari Event"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#915EFF] focus:border-[#915EFF] transition-colors text-sm"
                aria-label="Cari Event Mobile"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <a href="#" className="block text-gray-700 hover:text-[#915EFF] transition-colors py-2 text-base font-medium">Tiketku</a>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-[#915EFF] text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-[#7e4fe1] transition-colors"
              aria-label="Buat Event Mobile"
            >
              <Plus size={20} className="mr-2" />
              Buat Event
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center text-[#915EFF] border border-[#915EFF] px-5 py-3 rounded-full text-base font-semibold hover:bg-[#915EFF] hover:text-white transition-colors"
              aria-label="Hubungi Kami Mobile"
            >
              <Phone size={18} className="mr-2" />
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </header>
  );
}