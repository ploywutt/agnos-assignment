import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  onClick,
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${disabled ? "btn-disabled" : "btn-primary"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
