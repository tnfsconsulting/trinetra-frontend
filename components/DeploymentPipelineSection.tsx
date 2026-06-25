"use client";

import { PIPELINE_STEPS } from "../lib/data";

export default function DeploymentPipelineSection() {
  const steps = PIPELINE_STEPS;

  return (
    <section className="relative z-10 py-32 bg-transparent">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 space-y-8">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#06B6D4] uppercase border border-white/10 inline-block px-4 py-1.5 bg-white/5">The Pipeline</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase">How we <span className="font-semibold">Deploy</span></h2>
            <p className="text-white/50 leading-relaxed font-light tracking-wide">
              We don't just build software. We architect engines of scale. Our 4-phase deployment pipeline ensures absolute security and unmatched speed to market.
            </p>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative p-8 rounded-none bg-[#050505] border border-white/10 hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300">
                  <div className="text-5xl font-light text-white/20 mb-8">{step.num}</div>
                  <h3 className="text-xl font-medium text-white mb-4 tracking-tight uppercase">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
