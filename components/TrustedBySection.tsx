export default function TrustedBySection() {
  const partners = [
    "DEFENSE INTELLIGENCE",
    "TIER-1 CYBERCOM",
    "AEROSPACE SYSTEMS",
    "GLOBAL FINANCE",
    "CYBER COMMAND",
    "NATIONAL INFRASTRUCTURE",
    "STRATEGIC OPERATIONS",
  ];

  // We triple the array so the marquee loops seamlessly
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="relative z-10 py-12 border-b border-white/10 bg-black/20 backdrop-blur-[2px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
          Trusted by Tier-1 Integrators & Enterprises
        </p>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center group hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, i) => (
            <div key={i} className="flex items-center justify-center px-10 md:px-16">
              <span className="text-sm font-medium tracking-[0.2em] text-white/30 transition-colors duration-500 hover:text-white/80 whitespace-nowrap cursor-default uppercase">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
