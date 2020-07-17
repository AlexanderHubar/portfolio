import { useMemo } from "react";
import PropTypes from "prop-types";
import getButtonStyles from "./button/styles";

export default function Button({
  className,
  variant,
  size,
  onClick,
  children,
}) {
  const styles = useMemo(() => getButtonStyles(variant, size), [variant]);
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      <style jsx>{styles}</style>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  variant: "primary",
  size: "md",
  onClick: (f) => f,
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
