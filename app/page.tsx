import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import Neighborhoods from "@/components/Neighborhoods";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Neighborhoods />
      <ContactCTA />
    </>
  );
}
