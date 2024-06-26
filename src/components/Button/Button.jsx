import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ icon, name, color, style,className }) => {
  return (
    <button
      className={`button ${color === "black" ? "black" : "white"} ${className}`}
      style={style}
    >
      {name && <span>{name}</span>}
      {icon === "leftArrow" ? <p>&larr;</p> : <p>&rarr;</p> }
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "white"]),
  style: PropTypes.object,
};

export default Button;
