export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative z-10 min-h-[60vh] bg-transparent flex items-center justify-center text-center px-8">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none"></div>

      <div className="max-w-5xl space-y-12 relative z-10">
        <p className="text-[10px] tracking-[0.3em] text-white/40 font-medium uppercase">The Trinetra Standard</p>
        <blockquote className="text-4xl md:text-6xl font-light text-white leading-[1.2] tracking-tighter drop-shadow-2xl">
          "Resilience is not a feature; it is the foundation. We engineer mission-critical intelligence designed to withstand the battlefield and scale the enterprise."
        </blockquote>
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">— Trinetra Strategic Directive</p>
      </div>
    </section>
  );
}