import Button from "../../atom/Button/Button";

import React from "react";

export default {
  title: "Button",
  component: Button,
  args: {
    // variant: "danger Button",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["danger Button", "primary Button", "Secondary Button"],
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },

    sizes: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary Button",
  children: "Primary Button",
  sizes: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary Button",

  children: "Secondary Button",
  sizes: "md",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger Button",
  children: "Danger Button",
  sizes: "lg",
};
