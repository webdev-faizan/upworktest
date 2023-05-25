import React from "react";
import PropTypes, { string } from "prop-types";
// import "./Button.css";
import "./Button.scss";

const Button = ({ variant, children, sizes, disabled }) => {
  return (
    <button disabled={disabled} className={`button ${variant + " " + sizes}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  children: PropTypes.node.isRequired,
  sizes: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  sizes: "lg",
  disabled: false,
};

export default Button;
