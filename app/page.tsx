import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyAyric from "@/components/home/WhyAyric";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyAyric />
      <FinalCta />
    </main>
  );
}
