import Link from "next/link";

export default function BookSessionCard() {
  return (
    <section className="relative z-10 py-24 bg-transparent flex justify-center px-4 md:px-8 border-y border-white/10">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl bg-black border border-white/10 p-10 md:p-16 overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#06B6D4]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
              Ready to secure your <span className="font-semibold">Infrastructure?</span>
            </h2>
            <p className="text-white/50 text-base font-light tracking-wide leading-relaxed">
              Book a session with our engineering and tactical teams to discuss how Trinetra can scale your defense and enterprise operations from day one.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link 
              href="#contact" 
              className="inline-flex items-center gap-4 bg-white hover:bg-white/90 px-10 py-5 text-[11px] font-bold text-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              Book a session
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
