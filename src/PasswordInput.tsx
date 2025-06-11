import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import { FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import styled from "styled-components";
import { PasswordGeneratorPopup } from "./PasswordGeneratorPopup";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
  transition: all 0.2s ease;
  padding: 12px;
`;

const Input = styled.input`
  flex: 1 1 0%;
  font-size: 14px;
  background-color: white;
  transition: all 0.2s ease;
  outline: none;
  border: none;
  &::placeholder {
    color: #94a3b8;
  }
`;

const ToggleButton = styled.button`
  position: static;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #64748b;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    color: #3b82f6;
    outline: none;
  }
`;

const Divider = styled.span`
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #e2e8f0;
  margin: 0 8px;
  border-radius: 1px;
`;

const PopupWindow = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 1000;
  min-width: 340px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
`;

interface PasswordInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function PasswordInput({
  placeholder = "Enter password",
  value,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [password, setPassword] = useState(value || "");

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
    <Container ref={containerRef}>
      <Input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <ToggleButton
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaEye size={14} /> : <FaEyeSlash size={14} />}
      </ToggleButton>
      <Divider />
      <ToggleButton
        type="button"
        aria-label="Extra action"
        onClick={() => setShowWindow((v) => !v)}
      >
        <FaKey size={14} />
      </ToggleButton>
      {showWindow && (
        <PopupWindow ref={popupRef}>
          <PasswordGeneratorPopup
            onCancel={() => setShowWindow(false)}
            onUse={(password) => {
              setPassword(password);
              setShowWindow(false);
            }}
          />
        </PopupWindow>
      )}
    </Container>
  );
}
