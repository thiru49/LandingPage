import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ icon, name, color, style }) => {
  return (
    <button
      className={`button ${color === "black" ? "black" : "white"}`}
      style={style}
    >
      {name && <span>{name}</span>}
      {icon}
    </button>
  );
};

Button.prototype = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "white"]),
  style: PropTypes.object,
};

export default Button;
