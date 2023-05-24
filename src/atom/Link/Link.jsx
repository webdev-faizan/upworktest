import React from "react";
import './Link.css'

const Link = ({ url, content }) => {
  return <a className="link" href={url}>{content}</a>;
};

export default Link;
