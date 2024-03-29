import React, { useState } from "react";

function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue, // Used for most inputs
  updateType,
  onChange, // New prop for direct onChange handling (e.g., confirm password)
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value); // Update local state
    if (onChange) {
      onChange(e); // Directly call provided onChange if exists
    } else if (updateFormValue) {
      updateFormValue({ updateType, value }); // Fallback to updateFormValue if provided
    }
  };

  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default InputText;
