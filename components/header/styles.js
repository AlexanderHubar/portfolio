import css from "styled-jsx/css";

export const HeaderStyles = css`
  .header {
    display: flex;
    align-items: center;
    //height: 64px;
    background-color: var(--accents-0);
    border-bottom: 1px solid var(--accents-4);
  }

  .header-navigation {
    display: none;
  }

  :global(.header-navigation_expanded) {
    display: flex;
    width: 100vw;
    padding: 0 1.5rem;
    height: calc(100vh - 70px);
    flex-direction: column;
  }

  .page__container_header {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: min-content 1fr auto;
    grid-gap: 1rem;
    align-items: center;
  }

  :global(.header-navigation_mobile) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  :global(.header-navigation_mobile .header-navigation__item) {
    text-align: center;
    font-size: 1.35rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--accents-3);
  }

  .logo {
    height: 26px;
    fill: var(--primary);
  }

  @media screen and (max-width: 1024px) {
    .header {
      flex-direction: column;
    }

    .page__container_header {
      justify-content: space-between;
      grid-template-columns: min-content min-content;
    }
  }

  @media screen and (max-width: 1024px) {
    .page__container_header {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    :global(.header__contact) {
      display: none;
    }

    :global(.header__contact_mobile) {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    .header-navigation,
    .button {
      display: flex;
    }
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
