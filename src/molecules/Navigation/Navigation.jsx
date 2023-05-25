import React from "react";
import Link from "../../atom/Link/Link";
import Button from "../../atom/Button/Button";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container">
      <ul className="navigation">
        <li>
          <Link url={"/"} content={"Home"} />
        </li>
        <li>
          <Link url={"/about"} content={"about"} />
        </li>
        <li>
          <Link url={"/contactus"} content={"contactus"} />
        </li>
      </ul>
      <Button children={"button"} sizes={"md"} variant={"primary"} />
    </div>
  );
};

export default Navigation;
