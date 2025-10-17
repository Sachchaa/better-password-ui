import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TextInput } from "../TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    onChange: fn(),
  },
};

export const LoginForm: Story = {
  args: {
    placeholder: "Enter your username or email",
    type: "text",
    onChange: fn(),
  },
};
