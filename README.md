# Better Password Textfield

![npm](https://img.shields.io/npm/v/better-password-textfield)

---

## 📖 Live Storybook

[View the Storybook ↗](https://sachchaa.github.io/better-password-ui/)

---

## ✨ Features

- **Show/Hide Password**: Toggle password visibility with a single click.
- **Password Generator**: Built-in secure password generator popup.
- **Accessibility**: Keyboard and screen reader friendly.
- **TypeScript**: Fully typed for safety and autocompletion.

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
