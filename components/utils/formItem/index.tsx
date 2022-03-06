import React from "react";

export const FormItem = ({
  type = "text",
  name,
  value,
  label,
  onChange,
  disabled = false,
  required = false,
}: any) => {
  return (
    <div className="border border-grey-light p-1 rounded">
      <input
        required={required}
        disabled={disabled}
        placeholder={label}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
