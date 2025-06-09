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
