import HeroIntro from "./../components/hero/HeroIntro";
import WhyStruggle from "./../components/hero/WhyStruggle";
import FeaturesGrid from "./../components/hero/FeaturesGrid";
import HowItWorks from "./../components/hero/HowItWorks";
import ContactSection from "./../components/hero/ContactSection";
import Footer from "./../components/hero/HeroFooter";

function HeroPage() {
  return (
    <main className="w-full">
      <HeroIntro />
      <WhyStruggle />
      <FeaturesGrid />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HeroPage;
