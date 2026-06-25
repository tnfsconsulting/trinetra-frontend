"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Capability {
  id: number;
  cap_id: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

export default function PillarsSection() {
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/capabilities/`)
      .then((res) => res.json())
      .then((data) => setCapabilities(data))
      .catch((err) => console.error("Error fetching capabilities:", err));
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (capabilities.length === 0 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % capabilities.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [capabilities.length, isHovered]);

  const handlePrev = () => {
    if (capabilities.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const handleNext = () => {
    if (capabilities.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
  };

  if (capabilities.length === 0) {
    return <section id="pillars" className="relative z-10 py-32 bg-transparent overflow-hidden"><div className="text-center text-white/50 tracking-[0.2em] uppercase text-xs">Loading Modules...</div></section>;
  }

  const cap = capabilities[currentIndex];

  return (
    <section id="pillars" className="relative z-10 py-32 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>
      
      {/* SECTION HEADER */}
      <div className="space-y-6 max-w-7xl mx-auto mb-16 px-8 relative z-10 text-center">
        <p className="text-[10px] font-medium tracking-[0.3em] text-[#06B6D4] uppercase border border-white/10 inline-block px-4 py-1.5 bg-black/50">Core Capabilities</p>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase max-w-2xl mx-auto leading-[1.1]">
          Strategic Defense & Commercial <span className="font-semibold">Scaling</span>
        </h2>
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
              src={cap.image} 
              alt={cap.title}
              fill
              className="object-cover opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            />
            {/* Corner Bracket */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#06B6D4]/50"></div>
            
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#06B6D4]/80">{cap.cap_id}</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#06B6D4]/20 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#06B6D4]/20 opacity-50"></div>

            <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-white mb-6">
              {cap.title}
            </h3>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 font-light tracking-wide">
              {cap.desc}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {cap.tags.map(tag => (
                <span key={tag} className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1.5 bg-white/[0.02]">
                  {tag}
                </span>
              ))}
            </div>
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
        {capabilities.map((_, idx) => (
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