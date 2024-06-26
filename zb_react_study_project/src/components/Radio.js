import React from "react";

export default function Radio({ name, value, label, checked, onChangeHandler }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <label>{label}</label>
    </>
  );
}
