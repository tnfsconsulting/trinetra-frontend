"use client";

import Image from "next/image";
import { MISSION_BRIEFS } from "../lib/data";

export default function MissionBriefsSection() {
  const briefs = MISSION_BRIEFS;

  if (briefs.length === 0) {
    return <section className="overflow-hidden bg-transparent py-24 text-white"><div className="text-center text-[10px] text-white/50 uppercase tracking-[0.2em]">Loading Mission Briefs...</div></section>;
  }

  return (
    <section className="relative z-10 overflow-hidden bg-black/60 backdrop-blur-md py-24 text-white border-y border-white/10">
      <div className="mx-auto max-w-7xl px-8 md:px-20 mb-16">
        <p className="text-[10px] font-medium tracking-[0.3em] text-[#06B6D4] uppercase border border-white/10 inline-block px-4 py-1.5 bg-white/5 mb-6">The Work</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase">
          Architected by Trinetra. <br /><span className="font-semibold text-white/50">Secured globally.</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {[...briefs, ...briefs, ...briefs].map((brief, i) => (
            <div 
              key={i} 
              className={`w-72 md:w-[340px] h-[400px] shrink-0 overflow-hidden rounded-none text-left border border-white/10 transition duration-500 hover:border-white/30 cursor-pointer flex flex-col bg-[#050505]`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between bg-white/[0.02] px-5 py-4 text-[9px] uppercase tracking-[0.2em] text-white/60 border-b border-white/5 z-20">
                <span>{brief.brief_id} // {brief.type}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`size-1.5 animate-pulse bg-current ${brief.accent}`}></span>
                  SECURE
                </span>
              </div>
              
              {/* Card Body - Unique per type */}
              <div className="relative flex-1 p-6 flex flex-col justify-center overflow-hidden">
                
                {/* 1. Terminal Layout */}
                {brief.type === "terminal" && (
                  <div className="text-xs text-[#06B6D4]/80 leading-loose whitespace-pre-wrap font-mono">
                    {brief.content}
                    <span className="animate-pulse ml-1 inline-block w-2 h-3 bg-[#06B6D4]"></span>
                  </div>
                )}

                {/* 2. Metric Layout */}
                {brief.type === "metric" && (
                  <div className="text-center space-y-4 relative z-10">
                    <div className={`text-6xl font-light tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                      {brief.metric}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                      {brief.subtext}
                    </div>
                  </div>
                )}

                {/* 3. Node Graph Layout (Abstract CSS) */}
                {brief.type === "graph" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border border-white/30 animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-4 border border-white/40 animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
                      <div className="absolute inset-8 border border-white/50"></div>
                      {/* Nodes */}
                      <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_10px_white]"></div>
                      <div className="absolute bottom-4 right-2 w-1.5 h-1.5 bg-white shadow-[0_0_10px_white]"></div>
                    </div>
                  </div>
                )}

                {/* 4. Diff Layout */}
                {brief.type === "diff" && (
                  <div className="text-[10px] font-mono leading-loose bg-black p-4 border border-white/5 shadow-inner">
                    {brief.diffLines?.map((line, idx) => (
                      <div key={idx} className={`${line.type === 'rem' ? 'text-red-400/80 bg-red-900/10' : 'text-[#06B6D4]/80 bg-[#06B6D4]/10'} px-2 py-1 mb-1`}>
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Image Layout */}
                {brief.type === "image" && brief.image && (
                  <div className="absolute inset-0 opacity-40 mix-blend-luminosity hover:opacity-80 transition-all duration-700">
                    <Image src={brief.image} alt={brief.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                  </div>
                )}
                
                {/* Gradient Accents based on type */}
                <div className={`absolute -bottom-24 -right-24 w-48 h-48 blur-[100px] opacity-10 bg-current ${brief.accent} pointer-events-none`}></div>
              </div>

              {/* Card Footer */}
              <div className="relative z-20 bg-black/40 p-5 border-t border-white/5 backdrop-blur-md">
                <h3 className="text-sm font-medium uppercase leading-snug tracking-widest text-white/90">{brief.title}</h3>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-[1px] flex-1 bg-white/10 overflow-hidden">
                    <div className={`h-full w-1/3 bg-current ${brief.accent}`}></div>
                  </div>
                  <p className="text-[8px] tracking-[0.2em] text-white/40 uppercase">Deployed</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
