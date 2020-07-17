import css from "styled-jsx/css";

export default function getButtonStyles(variant, size) {
  const isPrimary = variant === "primary";
  const isMediumSize = size === "md";
  return css`
    .button {
      height: ${isMediumSize ? 50 : 32}px;
      border-radius: var(--radius);
      width: auto;
      padding: 0 ${isMediumSize ? 20 : 12}px;
      font-size: ${isMediumSize ? "var(--fz-md)" : "var(--fz-sm)"};
      color: ${isPrimary ? "var(--accents-9)" : "var(--accents-5)"};
      border: 1px solid ${isPrimary ? "var(--primary)" : "var(--accents-4)"};
      background-color: ${isPrimary ? "var(--primary)" : "var(--accents-0)"};
      cursor: pointer;
      transition: 0.25s;
    }

    .button:hover {
      background-color: ${isPrimary ? "transparent" : "var(--accents-8)"};
      box-shadow: 0px 0px 10px
        ${isPrimary
          ? "var(--box-shadow-primary)"
          : "var(--box-shadow-secondary)"};
      color: ${isPrimary ? "var(--primary)" : "var(--accents-0)"};
    }
  `;
}
