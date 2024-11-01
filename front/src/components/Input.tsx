import React, { ChangeEvent, FocusEvent, useEffect } from "react";
import IMask from "imask";
import { BsPlusCircle } from "react-icons/bs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type?: "number" | "text" | "email" | "password";
  placeholder?: string;
  register?: any;
  name: string;
  errors?: any;
  disabled?: boolean;
  mask?: any;
  dynamicMask?: any;
  onBlur?: (ev: FocusEvent<HTMLInputElement>) => void;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  array?: boolean;
  addValue?: any;
  readonly?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  name,
  errors,
  disabled = false,
  mask,
  dynamicMask = "",
  onBlur,
  onChange,
  array = false,
  addValue,
  readonly = false,
  ...rest
}) => {
  useEffect(() => {
    if (mask) {
      const inputElement = document.getElementById(id) as HTMLInputElement;
      if (inputElement) {
        const dynamicMaskOptions = [{ mask }, { mask: dynamicMask }];

        let maskConfig;

        if (mask === "money") {
          maskConfig = {
            mask: Number,
            thousandsSeparator: ".",
            padFractionalZeros: true,
            min: 0,
          };
        } else {
          maskConfig = { mask: dynamicMaskOptions };
        }

        const maskInstance = IMask(inputElement, maskConfig);

        return () => {
          maskInstance.destroy();
        };
      }
    }
  }, [id, dynamicMask, mask]);

  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={id}
        className="block text-white whitespace-nowrap text-sm font-semibold mb-2"
      >
        {label}
      </label>
      <div className="relative flex items-center flex-end">
        {register !== undefined ? (
          <input
            type={type}
            readOnly={readonly}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full appearance-none rounded-xl h-10 px-3 text-[#000000] leading-none focus:outline-none focus:shadow-outline bg-[#E3F0F8] placeholder-[#656262] focus:bg-[#e0e6eb] transition-all" ${errors ? "border border-error-600" : "border-none"
              }`}
            {...register(name, {
              keepOriginalHandlers: true,
              onChange,
            })}
            {...rest}
            onBlur={onBlur}
          />
        ) : (
          <input
            type={type}
            readOnly={readonly}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full appearance-none rounded-xl h-10 px-3 text-[#000000] leading-tight focus:outline-none focus:shadow-outline bg-[#E3F0F8] placeholder-[#656262] focus:bg-[#e0e6eb] transition-all" ${errors ? "border border-error-600" : "border-none"
              }`}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
          />
        )}
        {array && (
          <BsPlusCircle
            onClick={addValue}
            className={`absolute w-5 h-5 right-3 text-[#656262] ${disabled ? "" : "hover:cursor-pointer"
              }`}
          />
        )}
      </div>
      {errors && (
        <span className="block mt-1 text-error-600 self-start">
          {errors.message && errors.message}
        </span>
      )}
    </div>
  );
};

export default Input;
