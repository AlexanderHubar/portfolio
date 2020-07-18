import { useState, useMemo, useCallback } from "react";
import map from "lodash.map";

import Button from "./Button";
import Logo from "./icon/Logo";
import Menu from "./icon/Menu";

import { HeaderStyles, NavigationItemStyles } from "./header/styles";

import config from "./header/config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigation = useMemo(
    () =>
      map(config.Navigation, (item, index) => {
        return (
          <li className="header-navigation__item" key={index}>
            <style jsx>{NavigationItemStyles}</style>
            {item}
          </li>
        );
      }),
    []
  );
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [
    setIsMenuOpen,
    isMenuOpen,
  ]);
  const renderMobileMenu = useMemo(() => {
    if (isMenuOpen) {
      return (
        <div className="header-navigation header-navigation_expanded">
          <ul className="header-navigation header-navigation_mobile">
            {Navigation}
          </ul>
          <Button
            className="header__contact header__contact_mobile"
            size="sm"
            variant="primary"
          >
            Contact Me
          </Button>
        </div>
      );
    }
    return null;
  }, [isMenuOpen, Navigation]);
  return (
    <header className="header">
      <div className="page__container page__container_header">
        <Logo />
        <ul className="header-navigation">{Navigation}</ul>
        <Button className="header__contact" size="sm" variant="primary">
          Contact Me
        </Button>
        <Menu open={isMenuOpen} handleClick={toggleMenu} />
      </div>
      {renderMobileMenu}
      <style jsx>{HeaderStyles}</style>
    </header>
  );
}
