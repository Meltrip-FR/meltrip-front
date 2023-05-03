import React from "react"

export const FormItem = ({
  type = "text",
  name,
  value,
  label,
  onChange,
  style = "border-grey-light",
  disabled = false,
  required = false,
}: any) => {
  return (
    <input
      className={`${style} rounded w-full`}
      required={required}
      disabled={disabled}
      placeholder={label}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  );
};
