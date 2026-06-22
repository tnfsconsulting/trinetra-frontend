"use client";

import { useEffect, useState } from "react";

interface PipelineStep {
  id: number;
  num: string;
  title: string;
  desc: string;
}

export default function DeploymentPipelineSection() {
  const [steps, setSteps] = useState<PipelineStep[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pipeline/`)
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error("Error fetching pipeline steps:", err));
  }, []);

  return (
    <section className="relative z-10 py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 space-y-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">The Pipeline</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">How we deploy.</h2>
            <p className="text-slate-500 leading-relaxed">
              We don't just build software. We architect engines of scale. Our 4-phase deployment pipeline ensures absolute security and unmatched speed to market.
            </p>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-light text-slate-300 font-mono mb-6">{step.num}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
