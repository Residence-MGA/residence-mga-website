import {
  BarImageContainer,
  BarSectionContainer,
  BarSectionImage,
  BarTextContainer,
} from "./BarSection.styled";
import barImage from "../../assets/bar_img.png";
import Link from "../../components/Link";

const BarSection = () => {
  return (
    <section>
      <BarSectionContainer>
        <BarImageContainer>
          <BarSectionImage src={barImage} alt="Bar et bouteilles" />
        </BarImageContainer>
        <BarTextContainer>
          <h3>Le bar lounge</h3>
          <p>
            Un havre de paix où les cocktails signature côtoient les grands
            crus. Notre bar vous accueille pour des soirées mémorables et des
            moments de détente tout au long de la journée.
          </p>
          <Link href="/drinks">Consulter la carte des boissons</Link>
        </BarTextContainer>
      </BarSectionContainer>
    </section>
  );
};

export default BarSection;
