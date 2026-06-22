import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0F172A] text-slate-300 py-16 px-8 md:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
        
        {/* LOGO & BRIEF */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/images/TNFS_NoBG.png" alt="TNFS Logo" width={80} height={80} className="w-20 h-20 object-contain scale-110 origin-left" />
            <span className="text-3xl font-bold tracking-wide text-white ml-1">TNFS</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Next-generation AI solutions engineered for strategic defence intelligence and scalable enterprise operations.
          </p>
        </div>

        {/* SOLUTIONS */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Solutions</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="#pillars" className="hover:text-white transition">Strategic Defence</Link></li>
            <li><Link href="#other-industries" className="hover:text-white transition">Enterprise AI</Link></li>
            <li><Link href="#" className="hover:text-white transition">Intelligence Operations</Link></li>
            <li><Link href="#" className="hover:text-white transition">Data Architectures</Link></li>
          </ul>
        </div>

        {/* PLATFORMS */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Platforms</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition">Shastra Engine</Link></li>
            <li><Link href="#" className="hover:text-white transition">Ecosystem Networks</Link></li>
            <li><Link href="#" className="hover:text-white transition">Security Infrastructure</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/newsroom" className="hover:text-white transition">Newsroom</Link></li>
            <li><Link href="#blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Trinetra Consulting Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}