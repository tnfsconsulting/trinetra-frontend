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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [capabilities, setCapabilities] = useState<Capability[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/capabilities/`)
      .then((res) => res.json())
      .then((data) => setCapabilities(data))
      .catch((err) => console.error("Error fetching capabilities:", err));
  }, []);

  const handleNext = () => {
    if (capabilities.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
  };

  const handlePrev = () => {
    if (capabilities.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  if (capabilities.length === 0) {
    return <section id="pillars" className="relative z-10 py-32 bg-white overflow-hidden"><div className="text-center">Loading Capabilities...</div></section>;
  }

  return (
    <section id="pillars" className="relative z-10 py-32 bg-white overflow-hidden">
      {/* ORIGINAL SECTION HEADER */}
      <div className="space-y-4 max-w-3xl mb-16 text-center mx-auto px-6">
        <p className="text-xs font-bold tracking-widest text-[#06B6D4] uppercase">Core Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Strategic Defence & Commercial Scaling</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Our dual-track infrastructure provides highly classified tactical systems for national security alongside scalable, modern software architectures for the commercial sector.
        </p>
      </div>

      {/* OVERLAPPED CAROUSEL WITH SIDE BUTTONS */}
      <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[500px]">
        
        {/* Previous Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-50 p-4 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-cyan-500 hover:border-cyan-200 hover:scale-110 transition-all duration-300"
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full max-w-3xl h-[450px] md:h-[400px] flex justify-center items-center perspective-[1200px]">
          {capabilities.map((cap, index) => {
            // Calculate relative position based on infinite loop wrap-around
            let diff = index - currentIndex;
            const length = capabilities.length;
            
            // Normalize diff for seamless loop (e.g., if array has 4 items, -3 becomes 1)
            if (diff > Math.floor(length / 2)) diff -= length;
            if (diff < -Math.floor(length / 2)) diff += length;

            const isCenter = diff === 0;
            const translateX = diff * 200; // Shift pixels based on distance (increased for wider cards)
            const scale = 1 - Math.abs(diff) * 0.15; // Scale down distant cards
            const zIndex = 50 - Math.abs(diff); // Center is top, edges go back
            const opacity = Math.abs(diff) > 2 ? 0 : 1 - (Math.abs(diff) * 0.2); // Fade distant cards
            
            return (
              <div 
                key={cap.id} 
                onClick={() => setCurrentIndex(index)}
                className={`absolute w-full max-w-[320px] md:max-w-[500px] lg:max-w-[580px] bg-white rounded-3xl border ${isCenter ? 'border-slate-200 shadow-2xl' : 'border-slate-200/50 shadow-md'} overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isCenter ? 'cursor-default' : 'cursor-pointer hover:-translate-y-4'}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents: Math.abs(diff) > 2 ? 'none' : 'auto'
                }}
              >
                {/* Image Container */}
                <div className="relative h-[200px] w-full overflow-hidden bg-slate-50">
                  <Image 
                    src={cap.image} 
                    alt={cap.title}
                    fill
                    className="object-cover"
                  />
                  {isCenter && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 font-mono shadow-sm">
                      {cap.cap_id}
                    </div>
                  )}
                  {/* Dark overlay for inactive cards */}
                  {!isCenter && <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] transition-all duration-500" />}
                </div>
                
                {/* Text Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cap.iconBg} flex items-center justify-center ${cap.iconColor} shadow-sm text-xl`}>
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{cap.title}</h3>
                  </div>
                  
                  {isCenter && (
                    <>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                        {cap.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cap.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-50 p-4 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-cyan-500 hover:border-cyan-200 hover:scale-110 transition-all duration-300"
          aria-label="Next card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}