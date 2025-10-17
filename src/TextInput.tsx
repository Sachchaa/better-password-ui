import React, { useState, type ChangeEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  padding: 12px;
`;

const Input = styled.input`
  flex: 1 1 0%;
  font-size: 14px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  outline: none;
  border: none;
  &::placeholder {
    color: #94a3b8;
  }
`;

interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: "text" | "email" | "tel" | "url";
}

export function TextInput({
  placeholder = "Enter text",
  value,
  onChange,
  type = "text",
}: TextInputProps) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Container>
      <Input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
}
