import {styled} from "styled-components";

export const LinkButtonStyles = styled.a`
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
