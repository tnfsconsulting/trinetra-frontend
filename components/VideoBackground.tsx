"use client";

import { useEffect, useRef } from "react";
import HUDOverlay from "./HUDOverlay";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Intentionally omitting .load() as it interrupts the autoPlay attribute on mount
      videoRef.current.play().catch(e => {
        if (e.name !== 'AbortError') {
          console.error("Video autoplay blocked", e);
        }
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 bg-black overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.4] mix-blend-luminosity grayscale contrast-125"
        src="/videos/warship.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for base readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-[#050505]/95 pointer-events-none"></div>
      
      {/* Matrix / Palantir grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Advanced Hacking / Targeting HUD Overlay */}
      <HUDOverlay />
    </div>
  );
}
