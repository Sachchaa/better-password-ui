import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

const generatePassword = (
  length: number,
  useNumbers: boolean,
  useSymbols: boolean
) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let chars = letters;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  return pwd;
};

export function PasswordGeneratorPopup({
  onCancel,
  onUse,
}: {
  onCancel: () => void;
  onUse: (password: string) => void;
}) {
  const [length, setLength] = useState(20);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState(generatePassword(20, true, false));

  const regenerate = () => {
    setPassword(generatePassword(length, useNumbers, useSymbols));
  };

  return (
    <div className="pwgen-popup">
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}
      >
        <div className="pwgen-password" style={{ flex: 1 }}>
          {password}
        </div>
        <button
          type="button"
          aria-label="Regenerate password"
          onClick={regenerate}
          className="pwgen-regenerate"
        >
          <FaSyncAlt />
        </button>
      </div>
      <div className="pwgen-row">
        <label>Characters</label>
        <input
          type="range"
          min={6}
          max={32}
          value={length}
          onChange={(e) => {
            setLength(Number(e.target.value));
            setPassword(
              generatePassword(Number(e.target.value), useNumbers, useSymbols)
            );
          }}
          className="pwgen-slider"
        />
        <span className="pwgen-length">{length}</span>
      </div>
      <div className="pwgen-row">
        <label>Numbers</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
          checked={useNumbers}
          onChange={(e) => {
            setUseNumbers(e.target.checked);
            setPassword(generatePassword(length, e.target.checked, useSymbols));
          }}
        />
      </div>
      <div className="pwgen-row">
        <label>Symbols</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
          checked={useSymbols}
          onChange={(e) => {
            setUseSymbols(e.target.checked);
            setPassword(generatePassword(length, useNumbers, e.target.checked));
          }}
        />
      </div>
      <div className="pwgen-footer-divider" />
      <div className="pwgen-footer">
        <button className="pwgen-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="pwgen-use" onClick={() => onUse(password)}>
          Use
        </button>
      </div>
    </div>
  );
}
