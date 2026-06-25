import VideoBackground from "../components/VideoBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import PillarsSection from "../components/PillarsSection";
import TelemetrySection from "../components/TelemetrySection";
import EcosystemSection from "../components/EcosystemSection";
import MissionBriefsSection from "../components/MissionBriefsSection";
import PhilosophySection from "../components/PhilosophySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-transparent font-sans">
      <Navbar />
      <VideoBackground />
      <HeroSection />
      <TrustedBySection />
      <PillarsSection />
      <TelemetrySection />
      <EcosystemSection />
      <MissionBriefsSection />
      <PhilosophySection />
      <Footer />
    </main>
  );
}