import css from "styled-jsx/css";

export default css`
  .logo {
    height: 35px;
    fill: var(--primary);
  }

  @media screen and (min-width: 1024px) {
    .logo {
      height: 26px;
    }
  }
`;
