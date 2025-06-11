# Better Password Textfield

![npm](https://img.shields.io/npm/v/better-password-textfield)

---

## 🌟 Why Use Better Password Textfield?

- Combines password input, show/hide toggle, and a secure password generator in a single, easy-to-use component.
- Plug & Play: Drop it into any React project—no complex setup required.
- Accessible by Design: Keyboard navigation, screen reader support, and ARIA labels out of the box.
- Customizable: Style it with your own classes or extend its functionality as needed.
- TypeScript First: Enjoy full type safety and autocompletion in your editor.
- Security Focused: Encourages strong password practices with a built-in generator.
- Open Source: Actively maintained and open to contributions.
- **Features:** Show/Hide Password, Built-in Password Generator, Accessibility, TypeScript support.

---

## 📖 Live Storybook

[View the Storybook ↗](https://sachchaa.github.io/better-password-ui/)

---

## 🚀 Installation

```bash
pnpm add better-password-textfield
# or
npm install better-password-textfield
# or
yarn add better-password-textfield
```

---

## 🛠 Usage

```tsx
import { PasswordInput } from "better-password-textfield";

export default function MyForm() {
  const [password, setPassword] = React.useState("");

  return (
    <PasswordInput
      value={password}
      onChange={setPassword}
      placeholder="Enter your password"
    />
  );
}
```

---

## ⚙️ Props

| Prop          | Type                      | Default            | Description                        |
| ------------- | ------------------------- | ------------------ | ---------------------------------- |
| `value`       | `string`                  | `""`               | The current password value         |
| `onChange`    | `(value: string) => void` | `undefined`        | Callback when the password changes |
| `placeholder` | `string`                  | `"Enter password"` | Input placeholder text             |

---

## 📄 License

MIT © [Sachin Kanishka](https://github.com/sachchaa)

---

## 🙏 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/sachchaa/better-password-ui/issues).
