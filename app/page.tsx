import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyIric from "@/components/home/WhyIric";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyIric />
      <FinalCta />
    </main>
  );
}
