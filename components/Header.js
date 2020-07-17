import { useMemo } from "react";
import map from "lodash.map";

import { HeaderStyles, NavigationItemStyles } from "./header/styles";
import config from "./header/config";
import Button from "./Button";

export default function Header() {
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
  return (
    <header className="header">
      <div className="page__container">
        <ul className="header-navigation">{Navigation}</ul>
        <Button size="sm" variant="primary">
          Contact Me
        </Button>
      </div>
      <style jsx>{HeaderStyles}</style>
    </header>
  );
}
