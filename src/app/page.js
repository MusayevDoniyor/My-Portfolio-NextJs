import AboutSection from "@/components/AboutSection/AboutSection";
import AchievementsSection from "@/components/AchievementsSection/Achievements";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen mt-36 px-4 md:px-16">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
