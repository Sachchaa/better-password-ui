import { generatePassword } from "@better-password/better-password";
import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

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
      {!isValid && (
        <div
          style={{
            color: "#d32f2f",
            background: "#fff0f0",
            borderRadius: "6px",
            padding: "8px 12px",
            margin: "10px 0",
            fontSize: "15px",
            fontWeight: 500,
            textAlign: "center",
            border: "1px solid #ffd6d6",
          }}
        >
          Please select at least one character type.
        </div>
      )}
      <div className="pwgen-row">
        <label>Characters</label>
        <input
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
          className="pwgen-slider"
        />
        <span className="pwgen-length">{length}</span>
      </div>

      <div className="pwgen-row">
        <label>Lowercase</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
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
      </div>
      <div className="pwgen-row">
        <label>Uppercase</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
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
      </div>
      <div className="pwgen-row">
        <label>Numbers</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
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
      </div>
      <div className="pwgen-row">
        <label>Symbols</label>
        <input
          type="checkbox"
          className="pwgen-checkbox"
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
