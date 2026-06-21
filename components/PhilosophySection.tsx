export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative z-10 min-h-[60vh] bg-slate-50 border-y border-slate-200 flex items-center justify-center text-center px-8">
      <div className="max-w-4xl space-y-8">
        <p className="text-xs font-mono tracking-[0.2em] text-[#06B6D4] font-bold uppercase">The Trinetra Standard</p>
        <blockquote className="text-2xl md:text-5xl font-light text-slate-900 leading-tight tracking-tight">
          "Resilience is not a feature; it is the foundation. We engineer mission-critical intelligence designed to withstand the battlefield and scale the enterprise."
        </blockquote>
        <p className="text-slate-500 text-sm font-mono font-medium tracking-wide">— Trinetra Strategic Directive</p>
      </div>
    </section>
  );
}