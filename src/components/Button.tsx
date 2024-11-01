import React from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type: "button" | "submit";
  filled?: boolean;
  variant?: "standard" | "next" | "previous" | "onFields";
  size?: "small" | "big";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  filled,
  size = "big",
  variant = "standard",
  disabled = false,
  ...rest
}) => {
  const colorSheet = {
    filled:
      "bg-primary-button hover:bg-primary-hover text-white focus:outline-none",
    filledDisabled: "bg-primary-disabled text-[#AEAEAE]",
    notFilled:
      "bg-transparent hover:bg-secondary-hover text-primary-button border-2 border-primary-button",
    notFilledDisabled:
      "bg-transparent border border-primary-disabled text-primary-disabled",
    onFields:
      "bg-secondary-fields hover:bg-secondary-hover text-white focus:outline-none",
  };

  const buttonStyle =
    variant === "onFields"
      ? colorSheet.onFields
      : filled
      ? disabled
        ? colorSheet.filledDisabled
        : colorSheet.filled
      : disabled
      ? colorSheet.notFilledDisabled
      : colorSheet.notFilled;

  const buttonSize = size === "big" ? "min-w-60" : "min-w-32";

  return (
    <button
      type={type}
      className={
        variant === "standard" || variant === "onFields"
          ? `${buttonStyle} ${buttonSize} font-bold py-2 px-4 rounded-full transition-all focus:shadow-outline`
          : ""
      }
      disabled={disabled}
      {...rest}
    >
      {children}
      {variant === "next" && (
        <BsArrowRightCircleFill className="text-primary-button hover:text-primary-hover size-9 mr-5" />
      )}
      {variant === "previous" && (
        <BsArrowLeftCircleFill className="text-primary-button hover:text-primary-hover size-9 mr-5" />
      )}
    </button>
  );
};

export default Button;
