import styled from "styled-components";

export const DrinksMenuContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  min-height: 100svh;
  gap: var(--spacing-md);
`;

export const DrinksMenuTitleStyles = styled.h1`
  text-align: center;
  margin: var(--spacing-md) 0;
`;

export const DescriptionStyles = styled.p`
  font-size: 1rem;
  color: var(--accent);
  text-align: center;
  max-width: 500px;
  margin-bottom: var(--spacing-md);
`;

export const DownloadButtonStyles = styled.a`
  display: inline-block;
  padding: 16px 32px;
  background-color: var(--accent);
  color: var(--text);
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--text-h);
    transform: scale(1.05);
  }
`;