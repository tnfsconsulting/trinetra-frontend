"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 border-b border-white/10 bg-black/60 backdrop-blur-xl z-50 px-6 lg:px-12 flex items-center justify-between font-sans">

      {/* 1. LOGO */}
      <Link href="/" className="flex items-center gap-3 relative z-50 group">
        {/* We can invert the logo if it's black text, or keep it if it's white. Assuming it looks okay, we'll keep the image but maybe add brightness/invert if needed. We'll use CSS filter invert if it was dark. */}
        <Image
          src="/images/TNFS_NoBG.png"
          alt="TNFS Logo"
          width={48}
          height={48}
          className="w-10 h-10 object-contain scale-125 origin-left drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-[1.3]"
        />
        <span className="text-lg font-medium tracking-[0.2em] text-white ml-2 uppercase">Trinetra</span>
      </Link>

      {/* 2. DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
        <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
        {/* <Link href="/#about" className="hover:text-white transition-colors duration-300">Platform</Link> */}
        {/* <div className="relative group py-6"> ... Capabilities ... </div> */}
        <Link href="/#cases" className="hover:text-white transition-colors duration-300">Case Studies</Link>
        <Link href="/newsroom" className="hover:text-white transition-colors duration-300">Newsroom</Link>
      </nav>

      {/* 3. ACTIONS & MOBILE TOGGLE */}
      <div className="flex items-center gap-6 relative z-50">
        <button
          className="md:hidden text-white/70 hover:text-white transition p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 4. MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 shadow-2xl transition-all">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Home</Link>
          {/* <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Platform</Link> */}
          <Link href="/#cases" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Case Studies</Link>
          <Link href="/newsroom" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Newsroom</Link>
        </div>
      )}
    </header>
  );
}