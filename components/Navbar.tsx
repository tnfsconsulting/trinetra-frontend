"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl h-14 border border-slate-200 bg-white/80 backdrop-blur-lg rounded-full z-50 px-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      
      {/* 1. LOGO */}
      <Link href="/" className="flex items-center gap-3 relative z-50">
        <Image src="/images/TNFS_NoBG.png" alt="TNFS Logo" width={48} height={48} className="w-12 h-12 object-contain scale-125 origin-left" />
        <span className="text-xl font-bold tracking-wide text-slate-900 ml-1">TNFS</span>
      </Link>

      {/* 2. DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <Link href="#about" className="hover:text-slate-900 transition">About</Link>
        
        {/* SERVICES DROPDOWN */}
        <div className="relative group py-4">
          <button className="hover:text-slate-900 transition flex items-center gap-1 uppercase outline-none">
            Services <span className="text-[9px] opacity-60">▼</span>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <Link href="#pillars" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition">Defence AI</Link>
            <Link href="#other-industries" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition">Enterprise AI</Link>
          </div>
        </div>

        <Link href="#cases" className="hover:text-slate-900 transition">Cases</Link>
        <Link href="/newsroom" className="hover:text-slate-900 transition">Newsroom</Link>
      </nav>

      {/* 3. ACTIONS & MOBILE TOGGLE */}
      <div className="flex items-center gap-4 relative z-50">
        <Link 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Talk to us
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
        
        <button
          className="md:hidden text-slate-600 hover:text-slate-900 transition p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 4. MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl md:hidden flex flex-col items-center py-6 gap-6 text-sm font-semibold uppercase tracking-wider text-slate-500 shadow-2xl transition-all">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-slate-900 transition">About</Link>
          
          <div className="flex flex-col items-center gap-3 w-full">
            <span className="text-slate-400 border-b border-slate-200 pb-1 px-8">Services</span>
            <Link href="#pillars" onClick={() => setIsMobileMenuOpen(false)} className="text-xs hover:text-slate-900 transition">Defence AI</Link>
            <Link href="#other-industries" onClick={() => setIsMobileMenuOpen(false)} className="text-xs hover:text-slate-900 transition">Enterprise AI</Link>
          </div>

          <Link href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-slate-900 transition">Cases</Link>
          <Link href="/newsroom" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-slate-900 transition">Newsroom</Link>
          
          <Link 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-transform active:scale-95"
          >
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}