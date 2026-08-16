import {
  HotelImageContainer,
  HotelSectionContainer,
  HotelSectionImage,
  HotelTextContainer,
} from "./HotelSection.styled";
import hotelImage from "../../assets/hotel_img.png";
import Link from "../../components/Link";

const HotelSection = () => {
  return (
    <section>
      <HotelSectionContainer>
        <HotelImageContainer>
          <HotelSectionImage src={hotelImage} alt="Décoration des chambres" />
        </HotelImageContainer>
        <HotelTextContainer>
          <h3>L'hôtel</h3>
          <p>
            Chaque chambre est unique, un fragment de voyage soigneusement
            décoré pour vous recevoir comme l'un des nôtres.
          </p>
          <Link href="/rooms">Découvrer les chambres</Link>
        </HotelTextContainer>
      </HotelSectionContainer>
    </section>
  );
};

export default HotelSection;
