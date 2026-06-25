"use client";

import { useEffect, useState } from "react";

export default function HUDOverlay() {
  const [dataStream, setDataStream] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataStream(prev => {
        const newLine = Math.random().toString(16).substr(2, 8).toUpperCase() + 
                       " :: SECURE_NODE_" + Math.floor(Math.random() * 999) + 
                       " :: [ACTIVE]";
        const newStream = [...prev, newLine];
        if (newStream.length > 20) newStream.shift();
        return newStream;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden font-mono text-[#06B6D4] opacity-50 select-none">
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#06B6D4]/50 shadow-[0_0_10px_#06B6D4] animate-[scan_4s_linear_infinite]"></div>
      
      {/* Corner Targeting Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#06B6D4]/40"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#06B6D4]/40"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#06B6D4]/40"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#06B6D4]/40"></div>

      {/* Radar / Compass Overlay (Submarine Vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#06B6D4]/10 flex items-center justify-center opacity-20">
        <div className="w-[400px] h-[400px] rounded-full border border-[#06B6D4]/20 animate-[spin_20s_linear_infinite]">
          <div className="w-1/2 h-full border-r border-[#06B6D4]/40"></div>
        </div>
        <div className="absolute w-2 h-2 rounded-full bg-red-500 top-1/4 left-1/4 animate-ping"></div>
        <div className="absolute w-1 h-1 rounded-full bg-[#06B6D4] bottom-1/3 right-1/4"></div>
      </div>

      {/* Hex Data Stream */}
      <div className="absolute top-1/3 right-12 w-48 text-[9px] leading-tight text-green-500/60 hidden md:block">
        <p className="mb-2 border-b border-green-500/30 pb-1">UPLINK ESTABLISHED</p>
        {dataStream.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-12 left-12 text-[10px] tracking-widest flex flex-col gap-1">
        <span>LAT: 28°36'50"N</span>
        <span>LNG: 77°12'32"E</span>
        <span className="text-white/60">SYS: OPERATIONAL</span>
      </div>

      {/* Glitch Overlay (CSS class handles animation) */}
      <div className="absolute inset-0 bg-[#06B6D4]/5 mix-blend-overlay animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100vh); }
        }
      `}} />
    </div>
  );
}
