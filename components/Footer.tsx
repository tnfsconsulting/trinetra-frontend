import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black text-white/50 py-16 px-8 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
        
        {/* LOGO & BRIEF */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/images/TNFS_NoBG.png" alt="TNFS Logo" width={80} height={80} className="w-20 h-20 object-contain scale-110 origin-left brightness-0 invert opacity-90" />
            <span className="text-3xl font-light tracking-widest text-white ml-1">TNFS</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 max-w-xs leading-loose">
            Next-generation AI solutions engineered for strategic defense intelligence and scalable enterprise operations.
          </p>
        </div>

        {/* SOLUTIONS */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#06B6D4]">Solutions</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em]">
            <li><Link href="#pillars" className="hover:text-white transition-colors duration-300">Strategic Defense</Link></li>
            <li><Link href="#other-industries" className="hover:text-white transition-colors duration-300">Enterprise AI</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Intelligence Operations</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Data Architectures</Link></li>
          </ul>
        </div>

        {/* PLATFORMS */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#06B6D4]">Platforms</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em]">
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Ecosystem Networks</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Security Infrastructure</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#06B6D4]">Company</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em]">
            <li><Link href="#about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link href="/newsroom" className="hover:text-white transition-colors duration-300">Newsroom</Link></li>
            <li><Link href="#blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors duration-300">Careers</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/30 font-medium uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Trinetra Consulting Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          <Link href="https://www.linkedin.com/company/tnfs-consulting" target="_blank" className="hover:text-white transition-colors duration-300">LinkedIn</Link>
          <Link href="https://instagram.com/tnfsfounders" target="_blank" className="hover:text-white transition-colors duration-300">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}