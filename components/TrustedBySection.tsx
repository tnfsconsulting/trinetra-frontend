export default function TrustedBySection() {
  const partners = [
    "DEFENCE INTELLIGENCE",
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
    <section className="relative z-10 py-12 border-b border-slate-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
          Trusted by Tier-1 Integrators & Enterprises
        </p>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center group hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, i) => (
            <div key={i} className="flex items-center justify-center px-10 md:px-16">
              <span className="text-lg md:text-xl font-bold font-mono tracking-wider text-slate-300 transition-colors duration-300 hover:text-slate-900 whitespace-nowrap cursor-default">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
