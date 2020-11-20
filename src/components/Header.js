import logoPath from "../images/logo_mesto.svg";
import React from "react";

const Header = ({children}) => {
  return(
    <header className="header page__header">
      <picture className="logo header__logo">
        <img className="logo__img" src={logoPath} alt="логотип"/>
      </picture>
      {children}
    </header>
  );
}

export default Header;