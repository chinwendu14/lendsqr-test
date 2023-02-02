import React from "react";
import "./textField.scss";
interface Props {
  name?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  className?: string;
  onBlur?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  error?: string;
  value?: string;
}
const TextField: React.FC<Props> = ({
  name,
  placeholder,
  label,
  type,
  onBlur,
  error,
  onChange,
  className,
  value,
}) => {
  return (
    <div className={`formInput ${className ? className : ""}`}>
      {label && (
        <label className="formInput__label" id={name}>
          {label}
        </label>
      )}
      <div>
        <input
          name={name}
          id={name}
          onBlur={onBlur}
          type={type}
          className="formInput__input"
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>

      <div className="formInput__error">{error}</div>
    </div>
  );
};

export default TextField;
