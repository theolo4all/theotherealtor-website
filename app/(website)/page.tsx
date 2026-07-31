import Hero from "@/components/home/Hero";
import FeaturedListings from "@/components/home/FeaturedListings";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Neighborhoods from "@/components/home/Neighborhoods";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <FeaturedListings />
      <Services />
      <AboutPreview />
      <Neighborhoods />
      <ContactCTA />
    </main>
  );
}