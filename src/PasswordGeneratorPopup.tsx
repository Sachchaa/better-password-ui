import { generatePassword } from "@better-password/better-password";
import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import styled from "styled-components";

const Popup = styled.div`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 20px 16px 10px 16px;
  margin: 0;
`;

const Password = styled.div`
  font-size: 14px;
  background: #f5f7fa;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: center;
  font-family: "Menlo", "Consolas", monospace;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
`;

const Label = styled.label`
  flex: 1;
  text-align: left;
  font-size: 14px;
`;

const Length = styled.span`
  min-width: 32px;
  text-align: right;
  font-size: 14px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #e6eafd;
  border-radius: 3px;
  outline: none;
  margin: 0 10px;
  transition: background 0.2s;
  position: relative;
  box-sizing: border-box;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #1976d2;
  border-radius: 4px;
  border: 1.5px solid #b0b8c1;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
  cursor: pointer;
  vertical-align: middle;
`;

const FooterDivider = styled.div`
  border-bottom: 2px solid #e2e8f0;
  margin: 10px 0 14px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CancelButton = styled.button`
  background: #f5f7fa;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const UseButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    background: #b0b8c1;
    cursor: not-allowed;
  }
`;

const RegenerateButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  color: #1976d2;
  transition:
    background 0.2s,
    color 0.2s;
  outline: none;
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 2px #1976d2;
  }
  &:active {
    background: #e3eafc;
  }
`;

const Error = styled.div`
  color: #d32f2f;
  background: #fff0f0;
  border-radius: 6px;
  padding: 8px 12px;
  margin: 10px 0;
  font-size: 15px;
  text-align: center;
`;

export function PasswordGeneratorPopup({
  onCancel,
  onUse,
}: {
  onCancel: () => void;
  onUse: (password: string) => void;
}) {
  const [length, setLength] = useState(16);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState(
    generatePassword({
      length: 16,
    })
  );

  const isValid = useLowercase || useUppercase || useNumbers || useSymbols;

  const regenerate = () => {
    if (!isValid) return;
    setPassword(
      generatePassword({
        length,
        uppercase: useUppercase,
        lowercase: useLowercase,
        symbols: useSymbols,
        numbers: useNumbers,
      })
    );
  };

  return (
    <Popup>
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}
      >
        <Password>{password}</Password>
        <RegenerateButton
          type="button"
          aria-label="Regenerate password"
          onClick={regenerate}
        >
          <FaSyncAlt />
        </RegenerateButton>
      </div>
      {!isValid && <Error>Please select at least one character type.</Error>}
      <Row>
        <Label>Characters</Label>
        <Slider
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={(e) => {
            setLength(Number(e.target.value));
            setPassword(
              generatePassword({
                length: Number(e.target.value),
                uppercase: useUppercase,
                lowercase: useLowercase,
                symbols: useSymbols,
                numbers: useNumbers,
              })
            );
          }}
        />
        <Length>{length}</Length>
      </Row>
      <Row>
        <Label>Lowercase</Label>
        <Checkbox
          type="checkbox"
          checked={useLowercase}
          onChange={(e) => {
            setUseLowercase(e.target.checked);
            setPassword(
              generatePassword({
                length,
                uppercase: useUppercase,
                lowercase: e.target.checked,
                symbols: useSymbols,
                numbers: useNumbers,
              })
            );
          }}
        />
      </Row>
      <Row>
        <Label>Uppercase</Label>
        <Checkbox
          type="checkbox"
          checked={useUppercase}
          onChange={(e) => {
            setUseUppercase(e.target.checked);
            setPassword(
              generatePassword({
                length,
                uppercase: e.target.checked,
                lowercase: useLowercase,
                symbols: useSymbols,
                numbers: useNumbers,
              })
            );
          }}
        />
      </Row>
      <Row>
        <Label>Numbers</Label>
        <Checkbox
          type="checkbox"
          checked={useNumbers}
          onChange={(e) => {
            setUseNumbers(e.target.checked);
            setPassword(
              generatePassword({
                length,
                uppercase: useUppercase,
                lowercase: useLowercase,
                symbols: useSymbols,
                numbers: e.target.checked,
              })
            );
          }}
        />
      </Row>
      <Row>
        <Label>Symbols</Label>
        <Checkbox
          type="checkbox"
          checked={useSymbols}
          onChange={(e) => {
            setUseSymbols(e.target.checked);
            setPassword(
              generatePassword({
                length,
                uppercase: useUppercase,
                lowercase: useLowercase,
                symbols: e.target.checked,
                numbers: useNumbers,
              })
            );
          }}
        />
      </Row>
      <FooterDivider />
      <Footer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <UseButton onClick={() => onUse(password)}>Use</UseButton>
      </Footer>
    </Popup>
  );
}
