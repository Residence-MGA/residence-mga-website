import styled from "styled-components";

export const LogoStyles = styled.img`
  width: 180px; /* Taille raffinée */
  height: auto;
  margin-bottom: var(--spacing-md);
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5));
`;

export const ComingSoonContainerStyles = styled.div`
  text-align: center;
  padding: var(--spacing-md);
  max-width: 600px;
  animation: fadeIn 2s ease-in-out;
`;

export const DividerStyles = styled.div`
  width: 40px;
  height: 1px;
  background-color: var(--accent-color);
  margin: 0 auto var(--spacing-md) auto;
`;

export const SubtitleStyles = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.5rem;
  color: var(--accent-color);
  text-transform: uppercase;
  margin-bottom: var(--spacing-xl);
  font-weight: 400;
`;

export const FooterTextStyles = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1rem;
`;

export const ContactSectionStyles = styled.div`
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LocationStyles = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-md);
  font-weight: 300;
  letter-spacing: 0.05rem;
`;

export const ContactDetailsStyles = styled.div`
  margin: var(--spacing-md) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const ContactDetailStyles = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  
  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const SocialLinksStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`;

export const SocialLinkStyles = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
  }
`;