"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DOCTRINES } from "../lib/data";

export default function EcosystemSection() {
  const methods = DOCTRINES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (methods.length === 0 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % methods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [methods.length, isHovered]);

  const handlePrev = () => {
    if (methods.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + methods.length) % methods.length);
  };

  const handleNext = () => {
    if (methods.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % methods.length);
  };

  if (methods.length === 0) {
    return <section id="ecosystem" className="relative z-10 py-32 bg-transparent border-t border-white/10 overflow-hidden"><div className="text-center text-white/50 text-[10px] uppercase tracking-[0.2em]">Loading Ecosystem...</div></section>;
  }

  const method = methods[currentIndex];

  return (
    <section id="ecosystem" className="relative z-10 py-32 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none"></div>

      {/* SECTION HEADER */}
      <div className="text-center space-y-6 mb-16 px-6 relative z-10">
        <p className="text-[10px] font-medium tracking-[0.3em] text-[#06B6D4] uppercase border border-white/10 inline-block px-4 py-1.5 bg-black/50">Core Doctrine</p>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">Operational <span className="font-semibold">Methodology</span></h2>
      </div>

      {/* SINGLE WIDE CARD CAROUSEL */}
      <div 
        className="relative max-w-6xl mx-auto px-4 z-10 flex items-center justify-center min-h-[400px]"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Left Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 md:left-8 z-50 p-4 border border-white/20 bg-black/80 hover:bg-white/10 text-white/50 hover:text-white transition-colors backdrop-blur-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* The Card */}
        <div className="w-full max-w-4xl bg-[#050505]/90 backdrop-blur-xl border border-white/20 overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-500">
          
          {/* Left Side: Image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/10 overflow-hidden bg-black">
            <Image 
              src={method.image} 
              alt={method.title}
              fill
              className="object-cover opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            />
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
          </div>

          {/* Right Side: Content */}
          <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col justify-center relative">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-3">
              <span className="w-2 h-2 bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]"></span>
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#06B6D4] opacity-90">
                {method.label}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-white mb-6">
              {method.title}
            </h3>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-light tracking-wide">
              {method.desc}
            </p>
          </div>
        </div>

        {/* Right Button */}
        <button 
          onClick={handleNext}
          className="absolute right-2 md:right-8 z-50 p-4 border border-white/20 bg-black/80 hover:bg-white/10 text-white/50 hover:text-white transition-colors backdrop-blur-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-3 mt-8 relative z-10">
        {methods.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}