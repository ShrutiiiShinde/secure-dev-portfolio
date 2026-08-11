import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
