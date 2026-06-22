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
    <section className="relative z-10 py-24 bg-[#0a0e17] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 mb-4">Mission Telemetry</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">absolute scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-4xl md:text-5xl font-light font-mono text-white mb-3 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
