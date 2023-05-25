import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ variant, children, sizes, disabled }) => {
  return (
    <button disabled={disabled} className={`button ${variant + " " + sizes}`}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Button;
