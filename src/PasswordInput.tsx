import type { ChangeEvent } from "react";
import React, { useState } from "react";
import "./PasswordInput.css";

interface PasswordInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export function PasswordInput({
  placeholder = "Enter password",
  className = "",
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    onChange?.(value);
  };

  return (
    <div className={`password-input-container ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder={placeholder}
        className="password-input"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="password-toggle"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? "🙂" : "🙃"}
      </button>
    </div>
  );
}
