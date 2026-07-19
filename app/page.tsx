import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AwardSection from "./components/AwardSection";
import ProblemSection from "./components/ProblemSection";
import ArchitectureFlow from "./components/ArchitectureFlow";
import CodeShowcase from "./components/CodeShowcase";
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
      <CodeShowcase />
      <TechStack />
      <BlogSection />
      <Footer />
    </main>
  );
}
