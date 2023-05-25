import React from "react";
// import './Button.css'

const Button = ({style,label,backgroundColor}) => {
  return <button style={{ ...style, backgroundColor }}>{label}</button>;

};

export default Button;
