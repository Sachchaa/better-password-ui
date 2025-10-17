import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { PasswordInput } from "../PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter password",
    onChange: fn(),
  },
};

export const LoginForm: Story = {
  args: {
    placeholder: "Enter your password",
    showGenerator: false,
    onChange: fn(),
  },
};

export const SignupForm: Story = {
  args: {
    placeholder: "Create a password",
    showGenerator: true,
    onChange: fn(),
  },
};
