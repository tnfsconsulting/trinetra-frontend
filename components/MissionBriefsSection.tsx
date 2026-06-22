"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DiffLine {
  id: number;
  type: string;
  text: string;
}

interface MissionBrief {
  id: number;
  type: string;
  brief_id: string;
  title: string;
  content?: string;
  metric?: string;
  subtext?: string;
  image?: string;
  accent: string;
  bg: string;
  diffLines?: DiffLine[];
}

export default function MissionBriefsSection() {
  const [briefs, setBriefs] = useState<MissionBrief[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/mission-briefs/`)
      .then((res) => res.json())
      .then((data) => setBriefs(data))
      .catch((err) => console.error("Error fetching mission briefs:", err));
  }, []);

  if (briefs.length === 0) {
    return <section className="overflow-hidden bg-[#0a0e17] py-24 text-white"><div className="text-center">Loading Mission Briefs...</div></section>;
  }

  return (
    <section className="overflow-hidden bg-[#0a0e17] py-24 text-white">
      <div className="mx-auto max-w-7xl px-8 md:px-20 mb-12">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">The Work</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Architected by Trinetra. <span className="text-slate-500">Secured globally.</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {[...briefs, ...briefs, ...briefs].map((brief, i) => (
            <div 
              key={i} 
              className={`w-72 md:w-[340px] h-[400px] shrink-0 overflow-hidden rounded-3xl text-left ring-1 ring-white/10 transition duration-300 hover:ring-2 hover:ring-white/30 hover:-translate-y-2 cursor-pointer flex flex-col ${brief.bg}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between bg-white/5 px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-white/60 border-b border-white/5 z-20 backdrop-blur-md">
                <span>{brief.brief_id} // {brief.type}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`size-1.5 animate-pulse rounded-full bg-current ${brief.accent}`}></span>
                  SECURE
                </span>
              </div>
              
              {/* Card Body - Unique per type */}
              <div className="relative flex-1 p-6 flex flex-col justify-center overflow-hidden">
                
                {/* 1. Terminal Layout */}
                {brief.type === "terminal" && (
                  <div className="font-mono text-xs text-green-500/80 leading-loose whitespace-pre-wrap">
                    {brief.content}
                    <span className="animate-pulse ml-1 inline-block w-2 h-3 bg-green-500"></span>
                  </div>
                )}

                {/* 2. Metric Layout */}
                {brief.type === "metric" && (
                  <div className="text-center space-y-2 relative z-10">
                    <div className={`text-6xl font-bold tracking-tighter ${brief.accent} drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]`}>
                      {brief.metric}
                    </div>
                    <div className="text-sm text-slate-400 font-mono uppercase tracking-widest">
                      {brief.subtext}
                    </div>
                  </div>
                )}

                {/* 3. Node Graph Layout (Abstract CSS) */}
                {brief.type === "graph" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-50">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-4 rounded-full border border-purple-400/40 animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
                      <div className="absolute inset-8 rounded-full border border-purple-300/50"></div>
                      {/* Nodes */}
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]"></div>
                      <div className="absolute bottom-4 right-2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]"></div>
                    </div>
                  </div>
                )}

                {/* 4. Diff Layout */}
                {brief.type === "diff" && (
                  <div className="font-mono text-[11px] leading-loose bg-black/40 p-4 rounded-xl border border-white/5 shadow-inner">
                    {brief.diffLines?.map((line, idx) => (
                      <div key={idx} className={`${line.type === 'rem' ? 'text-red-400 bg-red-900/20' : 'text-green-400 bg-green-900/20'} px-2 py-0.5 rounded-sm mb-1`}>
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Image Layout */}
                {brief.type === "image" && brief.image && (
                  <div className="absolute inset-0 opacity-40 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-700">
                    <Image src={brief.image} alt={brief.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                )}
                
                {/* Gradient Accents based on type */}
                <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 bg-current ${brief.accent} pointer-events-none`}></div>
              </div>

              {/* Card Footer */}
              <div className="relative z-20 bg-white/[0.02] p-5 border-t border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-white/90">{brief.title}</h3>
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-[1px] flex-1 bg-white/10 overflow-hidden">
                    <div className={`h-full w-1/3 bg-current ${brief.accent}`}></div>
                  </div>
                  <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Deployed</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
