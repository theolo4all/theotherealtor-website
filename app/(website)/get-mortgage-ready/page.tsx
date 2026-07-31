import Hero from "@/components/mortgage/Hero";
import Benefits from "@/components/mortgage/Benefits";
import FormSection from "@/components/mortgage/FormSection";
import Process from "@/components/mortgage/Process";
import FAQ from "@/components/mortgage/FAQ";
import CTA from "@/components/mortgage/CTA";

export default function MortgageReadyPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <FormSection />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}