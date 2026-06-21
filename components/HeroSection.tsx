import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative z-10 min-h-screen max-w-7xl mx-auto px-8 md:px-20 flex items-center pt-20">
      <div className="max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/60 text-xs font-semibold tracking-widest text-slate-600 uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping"></span>
          Defence AI Core Active
        </div>
        <h1 className="hero-text text-4xl md:text-6xl font-bold leading-[1.15] text-slate-900">
          Next-Gen AI Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-blue-600">Strategic Defence</span> & Enterprise Operations
        </h1>
        <p className="hero-text text-slate-600 text-lg max-w-xl leading-relaxed">
          Built upon the tactical architecture of the <span className="text-slate-900 font-semibold">Shastra Decision Engine</span> to anchor mission-critical operational governance and predictive data streams across critical landscapes.
        </p>
        <div className="hero-text flex items-center gap-4 pt-4">
          <Link href="#pillars" className="bg-slate-900 hover:bg-slate-800 text-white transition-all px-8 py-3.5 rounded-full font-medium text-sm shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.2)] transform hover:-translate-y-0.5 duration-300">
            Explore Defence Offerings
          </Link>
          <Link href="#ecosystem" className="border border-slate-200 bg-white/60 backdrop-blur-sm hover:bg-slate-50 transition-all px-8 py-3.5 rounded-full font-medium text-sm text-slate-700 hover:text-slate-900 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-300">
            Commercial Frameworks
          </Link>
        </div>
      </div>
    </section>
  );
}