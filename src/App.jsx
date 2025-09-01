import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />

      {/* Diners Benefits */}
      <BenefitsSection
        id="diners"
        title="For Diners"
        subtitle="Discover, taste &amp; share"
        points={[
          "Explore restaurants based on your preferences and location",
          "Discover featured dishes and menus around you",
          "Read reviews, rankings &amp; popularity analyses for dishes"
        ]}
        image={{
          src: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800",
          alt: "Diner browsing dishes"
        }}
      />

      {/* Restaurants Benefits */}
      <BenefitsSection
        id="restaurants"
        title="For Restaurants"
        subtitle="Boost sales &amp; optimize operations"
        points={[
          "Competitor pricing intelligence &amp; dish ranking",
          "Advanced sentiment analysis from reviews",
          "Heatmaps of diner interest &amp; smart AI notifications",
          "Weekly executive reports delivered to your inbox"
        ]}
        image={{
          src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800",
          alt: "Restaurant dashboard"
        }}
        cta={{ text: "Subscribe to Pro Plan", link: "#contact" }}
        reverse
      />

      <Testimonials />
      <Footer />
    </div>
  );
}
