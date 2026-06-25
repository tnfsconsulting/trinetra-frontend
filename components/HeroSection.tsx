import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative z-10 min-h-[90vh] w-full flex items-center justify-center px-6 md:px-12 pt-16">
      
      <div className="max-w-5xl w-full relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/20 bg-black/50 backdrop-blur-md text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase shadow-2xl">
          <span className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></span>
          National Defense System // Active
        </div>
        
        <h1 className="hero-text text-6xl md:text-8xl font-medium leading-[1.05] text-white tracking-tighter drop-shadow-2xl">
          Intelligence for <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            Decisive Action
          </span>
        </h1>
        
        <p className="hero-text text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-lg">
          Empowering the armed forces with autonomous intelligence, predictive workflows, and operational dominance across all strategic landscapes.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link href="#pillars" className="w-full sm:w-auto relative group overflow-hidden border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all duration-500 px-12 py-5 text-[12px] font-medium uppercase tracking-[0.2em] shadow-2xl">
            <span className="relative z-10">Initialize Protocol</span>
          </Link>
          <Link href="#ecosystem" className="w-full sm:w-auto border border-white/10 hover:border-white/40 text-white/60 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-500 px-12 py-5 text-[12px] font-medium uppercase tracking-[0.2em]">
            View Ecosystem
          </Link>
        </div>

      </div>
    </section>
  );
}