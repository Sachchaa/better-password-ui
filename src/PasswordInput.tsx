import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import { FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
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
  const [showWindow, setShowWindow] = useState(false);
  const [password, setPassword] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    onChange?.(value);
  };

  useEffect(() => {
    if (!showWindow) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowWindow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWindow]);

  return (
    <div
      className={`password-input-container ${className}`}
      style={{ position: "relative" }}
      ref={containerRef}
    >
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
        {showPassword ? <FaEye size={14} /> : <FaEyeSlash size={14} />}
      </button>
      <span className="password-divider" />
      <button
        type="button"
        className="password-toggle password-extra"
        aria-label="Extra action"
        onClick={() => setShowWindow((v) => !v)}
      >
        <FaKey size={14} />
      </button>
      {showWindow && (
        <div className="password-popup-window" ref={popupRef}>
          <p>Password generate will be here</p>
        </div>
      )}
    </div>
  );
}
