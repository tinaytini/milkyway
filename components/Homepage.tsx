import { OurService } from "./OurService";
import { PopularTours } from "./PopularTours";
import { WhoWeareSection } from "./WhoWeareSection";
import { Features } from "./Features";
import { Statistics } from "./Statistics";
import { HeroSlider } from "./HeroSlider";
import { Contacts } from "./Contacts";


export default function Homepage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <HeroSlider />
        </div>
      </section>
      {/* Who We Are Section */}
      <div id="about">
        <WhoWeareSection />
      </div>
      {/* Popular Tours Section */}
      <div id="tours">
        <PopularTours />
      </div>
      {/* Our Services Section */}
      <div id="services">
        <OurService />
      </div>
      {/* Features Section */}
      <Features />
      {/* Statistics Section */}
      <Statistics />

      {/* Contact Section */}
      <Contacts />
    </main>
  );
}