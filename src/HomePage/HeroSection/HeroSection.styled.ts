import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
`;

export const HeroTextContainer = styled.div`
  text-align: left;
  position: relative;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  position: absolute;
`;

export const HeroSectionImage = styled.img`
  width: 100%;
  opacity: 0.4;
`;

export const HeroImageGradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #121212cc, transparent);
`;