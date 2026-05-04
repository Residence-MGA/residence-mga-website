import mgaLogo from "../assets/MGA_logo.png";
import {
  ComingSoonContainerStyles,
  DividerStyles,
  FooterTextStyles,
  LogoStyles,
  SubtitleStyles,
} from "./ComingSoon.styled";

const ComingSoon = () => {
  return (
    <ComingSoonContainerStyles>
      <LogoStyles src={mgaLogo} alt="Résidence MGA" />
      <DividerStyles />

      <h1>Bientôt</h1>
      <SubtitleStyles>
        Hôtel • Restaurant • Bar lounge • Boutique
      </SubtitleStyles>

      <FooterTextStyles>
        L'excellence se prépare. Suivez-nous pour l'ouverture du site.
      </FooterTextStyles>
    </ComingSoonContainerStyles>
  );
};

export default ComingSoon;
