import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AwardSection from "./components/AwardSection";
import ArchitectureFlow from "./components/ArchitectureFlow";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import CodeShowcase from "./components/CodeShowcase";
import ResourcesSection from "./components/ResourcesSection";
import TechStack from "./components/TechStack";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-20">
      <LoadingScreen />
      <Header />
      <HeroSection />
      <AwardSection />
      <ProblemSection />
      <ArchitectureFlow />
      <HowItWorks />
      <CodeShowcase />
      <ResourcesSection />
      <TechStack />
      <BlogSection />
      <Footer />
    </main>
  );
}
