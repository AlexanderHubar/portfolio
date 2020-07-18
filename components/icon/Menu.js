import PropTypes from "prop-types";
import MenuStyles from "./menu/styles";

export default function Menu({ open, handleClick }) {
  return (
    <button type="button" className="menu" onClick={handleClick}>
      <svg
        className={`menu__icon ${open ? "open" : ""}`}
        viewBox="20 20 60 60"
        width="50"
        aria-hidden="true"
      >
        <path
          className="menu__icon-bar top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="menu__icon-bar middle" d="m 70,50 h -40" />
        <path
          className="menu__icon-bar bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
      <style jsx>{MenuStyles}</style>
    </button>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
