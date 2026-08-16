import mgaLogo from "../assets/MGA_logo.png";
import {
  ComingSoonContainerStyles,
  ContactDetailStyles,
  ContactDetailsStyles,
  ContactSectionStyles,
  DividerStyles,
  FooterTextStyles,
  LocationStyles,
  LogoStyles,
  SocialLinkStyles,
  SocialLinksStyles,
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

      <ContactSectionStyles>
        <LocationStyles>
          📍 Gbèna Sud, Ouidah - Bénin
        </LocationStyles>

        <ContactDetailsStyles>
          <ContactDetailStyles>
            📧{" "}
            <a href="mailto:mgaresidence@gmail.com">
              mgaresidence@gmail.com
            </a>
          </ContactDetailStyles>

          <ContactDetailStyles>
            📱 +229 (01) 62 31 35 65 • (01) 51 28 02 81
          </ContactDetailStyles>
        </ContactDetailsStyles>

        <SocialLinksStyles>
          <SocialLinkStyles
            href="https://www.instagram.com/residence_mga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </SocialLinkStyles>
          <SocialLinkStyles
            href="https://www.facebook.com/people/Residence-Mga/61589306677535"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </SocialLinkStyles>
        </SocialLinksStyles>
      </ContactSectionStyles>
    </ComingSoonContainerStyles>
  );
};

export default ComingSoon;
