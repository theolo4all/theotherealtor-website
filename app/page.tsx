import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Neighborhoods from "@/components/home/Neighborhoods";
import ContactCTA from "@/components/home/ContactCTA";

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
