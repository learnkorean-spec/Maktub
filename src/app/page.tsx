import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { DialectSection } from "@/components/DialectSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MeetTutor } from "@/components/MeetTutor";
import { FAQ } from "@/components/FAQ";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-20 md:pb-0">
        <Hero />
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
