import drinksMenu from "../assets/drinks_menu.pdf";
import mgaLogo from "../assets/MGA_logo.png";
import {
  DescriptionStyles,
  DownloadButtonStyles,
  DrinksMenuContainerStyles,
  DrinksMenuTitleStyles,
} from "./DrinksMenu.styled";

const DrinksMenu = () => {
  return (
    <DrinksMenuContainerStyles>
      <img src={mgaLogo} alt="Résidence MGA" />
      <DrinksMenuTitleStyles>Carte des Boissons</DrinksMenuTitleStyles>
      <DescriptionStyles>
        Découvrez notre sélection de vins, cocktails et spiritueux
      </DescriptionStyles>
      <DownloadButtonStyles href={drinksMenu} download="carte_des_boissons.pdf">
        📥 Télécharger la carte (PDF)
      </DownloadButtonStyles>
    </DrinksMenuContainerStyles>
  );
};

export default DrinksMenu;
