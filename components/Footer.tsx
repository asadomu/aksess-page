/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone as PhoneIcon } from 'lucide-react';

const AksessLogoWhite = () => (
  <div className="flex items-center">
     <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 text-white"> {/* Slightly larger logo */}
      <path d="M16 0L32 9.33333V22.6667L16 32L0 22.6667V9.33333L16 0Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M16.0001 4.66663L28.0001 11.6666V18.6666L16.0001 25.6666L4.00008 18.6666V11.6666L16.0001 4.66663Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21.3333L8 16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21.3333V25.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16.6666L16 21.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 11.6666L16 18.6666L28 11.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-3xl font-bold text-white">Aksess</span> {/* Slightly larger text */}
  </div>
);


export default function Footer() {
  const footerLinkClasses = "hover:text-purple-300 transition-colors duration-200 text-sm";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10"> {/* Dark Donker Blue, increased padding */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Column 1: Logo & Contact */}
          <div className="lg:col-span-1 space-y-4">
            <AksessLogoWhite />
            <p className="text-sm font-semibold mt-1.5">PT. Asia Karya Lumina</p>
            <p className="text-xs leading-relaxed opacity-80"> {/* Slightly more transparent */}
              Jl. Gotong Royong I No.50 RT.004/01, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550
            </p>
          </div>

          {/* Column 2: Apa itu Aksess */}
          <div>
            <h4 className="font-bold text-md mb-5">Apa itu Aksess</h4> {/* Increased margin-bottom */}
            <ul className="space-y-3"> {/* Increased spacing */}
              <li><a href="#" className={footerLinkClasses}>Tentang Aksess</a></li>
              <li><a href="#" className={footerLinkClasses}>Partnership</a></li>
              <li><a href="#" className={footerLinkClasses}>Syarat & Ketentuan</a></li>
              <li><a href="#" className={footerLinkClasses}>FAQ Aksess</a></li>
              <li><a href="#" className={footerLinkClasses}>Laporan & Pengaduan</a></li>
            </ul>
          </div>

          {/* Column 3: Tentang Event */}
          <div>
            <h4 className="font-bold text-md mb-5">Tentang Event</h4>
            <ul className="space-y-3">
              <li><a href="#" className={footerLinkClasses}>Buat Event</a></li>
              <li><a href="#" className={footerLinkClasses}>Biaya</a></li>
              <li><a href="#" className={footerLinkClasses}>Tips Membuat Event</a></li>
              <li><a href="#" className={footerLinkClasses}>Artikel Untuk-mu</a></li>
            </ul>
          </div>

          {/* Column 4: Follow us */}
          <div>
            <h4 className="font-bold text-md mb-5">Follow us</h4>
            <div className="space-y-3.5"> {/* Increased spacing */}
              <div className="flex space-x-5"> {/* Increased icon spacing */}
                <a href="#" aria-label="Instagram" className="hover:text-purple-300 transition-colors">
                  <Instagram size={22} /> {/* Slightly larger icons */}
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-purple-300 transition-colors">
                  <Facebook size={22} />
                </a>
                <a href="#" aria-label="TikTok (placeholder)" className="hover:text-purple-300 transition-colors">
                  <Youtube size={22} /> {/* Placeholder for TikTok */}
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-purple-300 transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
              <div className="flex items-center text-sm opacity-90 pt-1"> {/* Added padding-top */}
                <PhoneIcon size={18} className="mr-2.5 flex-shrink-0" /> {/* Slightly larger icon & margin */}
                <span>081213957471</span>
              </div>
              <div className="flex items-center text-sm opacity-90">
                <Mail size={18} className="mr-2.5 flex-shrink-0" />
                <span>asiakaryalumina@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-700 opacity-50 my-10" /> {/* Adjusted color and margin */}

        <div className="text-center md:text-left"> {/* Centered on small, left on medium+ */}
          <p className="text-xs opacity-70">&copy; {new Date().getFullYear()} AKAAL.id, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}