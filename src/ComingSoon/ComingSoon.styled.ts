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
