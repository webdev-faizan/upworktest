import React from "react";
import Button from "../../atom/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  primary: true,
  label: "button",
  children: "Hello Storybook",
  style: {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    width:"60px"
  },
};
Primary.argTypes = {
  background: {
    control: "inline-radio",
    options: ["red", "yellow"],
  },
};