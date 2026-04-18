import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import EventSection from "@/components/EventSection";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <HeroSection />
      <USPSection />
      <EventSection />
      <MenuSection />
      <ServicesSection />
      <Footer />
      <MobileFAB />
    </main>
  );
}
