import {
  RestaurantImageContainer,
  RestaurantSectionContainer,
  RestaurantSectionImage,
  RestaurantTextContainer,
} from "./RestaurantSection.styled";
import restaurantImage from "../../assets/restaurant_img.png";
import Link from "../../components/Link";

const RestaurantSection = () => {
  return (
    <section>
      <RestaurantSectionContainer>
        <RestaurantTextContainer>
          <h3>Le restaurant</h3>
          <p>
            Notre restaurant vous accueille du matin jusqu'au soir pour des
            moments de détente et de saveurs. 
            Découvrez nos plats inspirés par les nombreux voyages du fondateur 
            et élaborés avec nos chefs.
          </p>
          <Link href="/menu">Consulter le menu</Link>
        </RestaurantTextContainer>
        <RestaurantImageContainer>
          <RestaurantSectionImage
            src={restaurantImage}
            alt="Restaurant et bar"
          />
        </RestaurantImageContainer>
      </RestaurantSectionContainer>
    </section>
  );
};

export default RestaurantSection;
