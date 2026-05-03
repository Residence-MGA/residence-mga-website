import { HeaderStyles } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <h1>La Résidence MGA</h1>
      </div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/">L'hôtel</a>
        <a href="/">Le restaurant</a>
        <a href="/">Le bar</a>
        <a href="/">La boutique</a>
        <a href="/">Contact</a>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
