import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";
import { faqItems } from "@/content/faq";

import Hero from "@/components/home/Hero";
import WhyIric from "@/components/home/WhyIric";
import ServicesPreview from "@/components/home/ServicesPreview";
import Consultation from "@/components/home/Consultation";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Process from "@/components/home/Process";
import BusinessSolutions from "@/components/home/BusinessSolutions";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = generateMetadata({
  title: "چاپ تخصصی سیلک و DTF",
  description:
    "چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد؛ با تمرکز بر کیفیت، اجرای دقیق و مشاوره قبل از سفارش.",
  path: "/",
});

export default function HomePage() {
  const faqSchema = {
    items: faqItems.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  };

  return (
    <>
      <JsonLd type="faq" data={faqSchema} />

      <Hero />

      <WhyIric />

      <ServicesPreview />

      <Consultation />

      <ProjectsPreview />

      <Process />

      <BusinessSolutions />

      <FaqSection />

      <FinalCta />
    </>
  );
}
