import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { LearnPromo } from "@/components/LearnPromo";
import { DialectSection } from "@/components/DialectSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MeetTutor } from "@/components/MeetTutor";
import { FAQ } from "@/components/FAQ";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-20 md:pb-0">
        <Hero />
        <LearnPromo />
        <DialectSection />
        <HowItWorks />
        <MeetTutor />
        <FAQ />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  );
}
