"use client";

import { useEffect, useState } from "react";

interface TelemetryStat {
  id: number;
  value: string;
  label: string;
}

export default function TelemetrySection() {
  const [stats, setStats] = useState<TelemetryStat[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/telemetry/`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching telemetry stats:", err));
  }, []);

  return (
    <section className="relative z-10 py-24 bg-transparent text-white border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 mb-4 inline-block border border-white/10 px-4 py-1.5 bg-white/5">Mission Telemetry</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
            Engineered for <span className="font-semibold">Absolute Scale</span>
          </h2>
        </div>

        {/* STATIC GRID LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4 group">
              <div className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tighter transition-all duration-500 group-hover:scale-105 group-hover:text-[#06B6D4]">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
