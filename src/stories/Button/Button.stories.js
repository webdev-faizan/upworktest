import React from "react";
import Button from "../../atom/Button/Button";

const ButtonTemplate = (args) => <Button {...args} />;
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: "inline-radio",
      options: ["red", "yellow"],
    },
    scale: {
      control: "inline-radio",
    },
  },
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  primary: true,
  label: "button",
  size: "medium",
  backgroundColor: "red",
  children: "Hello Storybook",
};
