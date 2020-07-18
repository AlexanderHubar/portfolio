import css from "styled-jsx/css";

export default css`
  .menu {
    display: none;
    width: auto;
    border: none;
    overflow: hidden;
    background-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    .menu {
      display: block;
    }
  }

  .menu__icon {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
  }

  .menu__icon.open {
    transform: rotate(45deg);
  }

  .menu__icon-bar {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: var(--primary);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-dasharray: 40, 121;
  }

  .menu__icon.open .top,
  .menu__icon.open .bottom {
    stroke-dashoffset: -68px;
  }
`;
