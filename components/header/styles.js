import css from "styled-jsx/css";

export const HeaderStyles = css`
  .header {
    display: flex;
    align-items: center;
    height: 64px;
    background-color: var(--accents-0);
    border-bottom: 1px solid var(--accents-4);
  }

  .header-navigation {
    display: flex;
  }

  .page__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavigationItemStyles = css`
  .header-navigation__item {
    padding: 0 10px;
    color: var(--accents-5);
    font-size: var(--fz-sm);
    transition: 0.25s;
    cursor: pointer;
  }

  .header-navigation__item:hover {
    color: var(--accents-9);
  }
`;
