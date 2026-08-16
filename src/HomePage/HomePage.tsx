import BarSection from "./BarSection";
import HeroSection from "./HeroSection/HeroSection";
import HotelSection from "./HotelSection/HotelSection";
import RestaurantSection from "./RestaurantSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <h2>Votre expérience à la Résidence MGA</h2>
      <HotelSection />
      <RestaurantSection />
      <BarSection />
    </>
  );
};

export default HomePage;
