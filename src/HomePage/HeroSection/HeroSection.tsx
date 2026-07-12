import {
  HeroImageContainer,
  HeroImageGradientOverlay,
  HeroSectionContainer,
  HeroSectionImage,
  HeroTextContainer,
} from "./HeroSection.styled";
import heroImage from "../../assets/hero_img.png";

const HeroSection = () => {
  return (
    <section>
      <HeroSectionContainer>
        <HeroImageContainer>
          <HeroSectionImage src={heroImage} alt="La Résidence MGA" />
          <HeroImageGradientOverlay />
        </HeroImageContainer>
        <HeroTextContainer>
          <h1>La Résidence MGA</h1>
          <h2>L'écrin de votre séjour à Ouidah</h2>
          <p>
            L'élégance d'une maison de famille, le prestige d'un hôtel de luxe.
          </p>
        </HeroTextContainer>
      </HeroSectionContainer>
    </section>
  );
};

export default HeroSection;
