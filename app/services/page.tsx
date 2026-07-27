import Hero from "../../components/services/Hero";
import Buying from "../../components/services/Buying";
import Selling from "../../components/services/Selling";
import Leasing from "../../components/services/Leasing";
import Investing from "../../components/services/Investing";
import WhyChooseMe from "../../components/services/WhyChooseMe";
import Process from "../../components/services/Process";
import CTA from "../../components/services/CTA";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Buying />
      <Selling />
      <Leasing />
      <Investing />
      <WhyChooseMe />
      <Process />
      <CTA />
    </>
  );
}