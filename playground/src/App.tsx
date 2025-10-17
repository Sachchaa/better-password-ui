import React, { useState } from "react";
import { PasswordInput, TextInput } from "../../src";

export function App() {
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Better Password Textfield</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Login Form</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextInput
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
            type="email"
          />
          <PasswordInput
            value={loginPassword}
            onChange={setLoginPassword}
            placeholder="Enter your password"
            showGenerator={false}
          />
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Signup Form</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextInput
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
            type="email"
          />
          <PasswordInput
            value={signupPassword}
            onChange={setSignupPassword}
            placeholder="Create a password"
            showGenerator={true}
          />
        </div>
      </section>
    </div>
  );
}
