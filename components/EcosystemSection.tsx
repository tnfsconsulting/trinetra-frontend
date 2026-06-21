"use client";

import { useState } from "react";
import Image from "next/image";

export default function EcosystemSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const methods = [
    {
      label: "DOCTRINE 01",
      title: "Tactical Agility & Engineering",
      desc: "Rapid deployment cycles. We apply battlefield-tested adaptability to commercial product development for unmatched speed to market.",
      image: "/images/agile_engineering_1782072161001.png",
    },
    {
      label: "DOCTRINE 02",
      title: "Mission-Critical Analytics",
      desc: "From defence threat-detection logic to enterprise growth metrics, our data strategies ensure precise, high-stakes decision making.",
      image: "/images/data_strategy_1782072175430.png",
    },
    {
      label: "DOCTRINE 03",
      title: "Zero-Trust Architecture",
      desc: "Military-grade cybersecurity frameworks meticulously tailored to protect both national defence networks and sensitive corporate assets.",
      image: "/images/enterprise_security_1782072186176.png",
    },
    {
      label: "DOCTRINE 04",
      title: "Resilient Infrastructure",
      desc: "Hardened, highly scalable cloud systems designed to withstand high-stress environments, cyber threats, and massive traffic spikes.",
      image: "/images/scalable_architecture_1782072197619.png",
    },
    {
      label: "DOCTRINE 05",
      title: "Autonomous Systems & AI",
      desc: "Deploying intelligent automation everywhere—scaling seamlessly from autonomous defence operations to complex enterprise workflows.",
      image: "/images/intelligent_automation_1782072210060.png",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % methods.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + methods.length) % methods.length);
  };

  return (
    <section id="ecosystem" className="relative z-10 py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* ORIGINAL SECTION HEADER */}
      <div className="text-center space-y-4 mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Core Operational Doctrine</h2>
        <p className="text-slate-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
          Our methodology bridges the gap between high-stakes military precision and enterprise scalability. We build hybrid, mission-ready systems that dominate in both defence and commercial sectors.
        </p>
      </div>

      {/* OVERLAPPED CAROUSEL WITH SIDE BUTTONS */}
      <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[500px]">
        
        {/* Previous Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-50 p-4 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-blue-500 hover:border-blue-200 hover:scale-110 transition-all duration-300"
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full max-w-3xl h-[450px] flex justify-center items-center perspective-[1200px]">
          {methods.map((method, index) => {
            // Calculate relative position based on infinite loop wrap-around
            let diff = index - currentIndex;
            const length = methods.length;
            
            // Normalize diff for seamless loop (e.g., if array has 5 items, -3 becomes 2)
            if (diff > Math.floor(length / 2)) diff -= length;
            if (diff < -Math.floor(length / 2)) diff += length;

            const isCenter = diff === 0;
            const translateX = diff * 200; // Shift pixels based on distance (increased for wider cards)
            const scale = 1 - Math.abs(diff) * 0.15; // Scale down distant cards
            const zIndex = 50 - Math.abs(diff); // Center is top, edges go back
            const opacity = Math.abs(diff) > 2 ? 0 : 1 - (Math.abs(diff) * 0.2); // Fade distant cards
            
            return (
              <div 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`absolute w-full max-w-[320px] md:max-w-[480px] lg:max-w-[550px] h-[450px] bg-white rounded-3xl border ${isCenter ? 'border-slate-200 shadow-2xl' : 'border-slate-200/50 shadow-md'} overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isCenter ? 'cursor-default' : 'cursor-pointer hover:-translate-y-4'}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents: Math.abs(diff) > 2 ? 'none' : 'auto'
                }}
              >
                {/* Image Container */}
                <div className="relative h-[50%] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={method.image} 
                    alt={method.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dark overlay for inactive cards */}
                  {!isCenter && <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] transition-all duration-500" />}
                </div>
                
                {/* Text Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-white relative z-10">
                  <div className="text-xs font-mono mb-2 font-bold text-blue-600 tracking-widest">
                    {method.label}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight ${!isCenter && 'text-slate-500'}`}>
                    {method.title}
                  </h3>
                  
                  {isCenter && (
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mt-2">
                      {method.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-50 p-4 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 hover:text-blue-500 hover:border-blue-200 hover:scale-110 transition-all duration-300"
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