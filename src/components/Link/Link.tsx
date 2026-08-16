import type { ReactNode } from "react";
import { LinkStyled, SpanStyled } from "./Link.styled";

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <LinkStyled href={href} className="group">
      {children} 
      <SpanStyled className="transition-transform group-hover:translate-x-2">→</SpanStyled>
    </LinkStyled>
  );
}

export default Link;