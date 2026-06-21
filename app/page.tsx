import ThreeBackground from "../components/ThreeBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import PillarsSection from "../components/PillarsSection";
import TelemetrySection from "../components/TelemetrySection";
import EcosystemSection from "../components/EcosystemSection";
import DeploymentPipelineSection from "../components/DeploymentPipelineSection";
import MissionBriefsSection from "../components/MissionBriefsSection";
import PhilosophySection from "../components/PhilosophySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ThreeBackground />
      <HeroSection />
      <TrustedBySection />
      <PillarsSection />
      <TelemetrySection />
      <EcosystemSection />
      <DeploymentPipelineSection />
      <MissionBriefsSection />
      <PhilosophySection />
      <Footer />
    </main>
  );
}