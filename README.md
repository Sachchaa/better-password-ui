# Better Password Textfield

![npm](https://img.shields.io/npm/v/better-password-textfield)

A modern React component library that provides secure password inputs and matching text inputs with consistent styling for your authentication forms.

---

## 🌟 Why Choose Better Password Textfield?

- **Complete authentication form solution**: Includes both password and text input components with unified design
- **Smart password management**: Built-in show/hide toggle and secure password generator
- **Zero configuration**: Works out of the box with sensible defaults
- **Developer friendly**: TypeScript support with comprehensive type definitions
- **Security focused**: Encourages strong password practices through built-in generation
- **Production ready**: Actively maintained with regular updates and community support

**Key Features:** Password visibility toggle, secure password generator, consistent text inputs, TypeScript support.

---

## 📖 Live Storybook

[View the Storybook ↗](https://sachchaa.github.io/better-password-ui/)

---

## 🚀 Installation

```bash
pnpm add better-password-textfield
# or
npm install better-password-textfield
```

---

## 🛠 Getting Started

### Quick Setup

```tsx
import { TextInput, PasswordInput } from "better-password-textfield";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <TextInput
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
        type="email"
      />
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        showGenerator={false}
      />
    </div>
  );
}
```

### Authentication Forms

**Login Form** - Clean and minimal for existing users:

```tsx
<PasswordInput showGenerator={false} placeholder="Enter your password" />
```

**Signup Form** - Enhanced with password generation for new users:

```tsx
<PasswordInput showGenerator={true} placeholder="Create a password" />
```

### Input Types

The `TextInput` component supports various input types for different use cases:

```tsx
// Email addresses
<TextInput type="email" placeholder="Enter your email" />

// Usernames
<TextInput type="text" placeholder="Enter username" />

// Phone numbers
<TextInput type="tel" placeholder="Enter phone number" />

// URLs
<TextInput type="url" placeholder="Enter website URL" />
```

---

## ⚙️ API Reference

### PasswordInput

| Prop            | Type                      | Default            | Description                          |
| --------------- | ------------------------- | ------------------ | ------------------------------------ |
| `value`         | `string`                  | `""`               | Current password value               |
| `onChange`      | `(value: string) => void` | `undefined`        | Password change callback             |
| `placeholder`   | `string`                  | `"Enter password"` | Placeholder text                     |
| `showGenerator` | `boolean`                 | `true`             | Toggle password generator visibility |

### TextInput

| Prop          | Type                                  | Default        | Description           |
| ------------- | ------------------------------------- | -------------- | --------------------- |
| `value`       | `string`                              | `""`           | Current input value   |
| `onChange`    | `(value: string) => void`             | `undefined`    | Input change callback |
| `placeholder` | `string`                              | `"Enter text"` | Placeholder text      |
| `type`        | `"text" \| "email" \| "tel" \| "url"` | `"text"`       | HTML input type       |

---

## 📄 License

MIT © [Sachin Kanishka](https://github.com/sachchaa)

---

## 🙏 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/sachchaa/better-password-ui/issues).

---

**Made with ❤️ by [Sachin Kanishka](https://github.com/sachchaa)**
