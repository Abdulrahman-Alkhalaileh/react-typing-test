import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children,className, ...props }) => {
  return (
    <button
    {...props}
    className={"bg-secondary text-white px-3 py-1 rounded hover:opacity-75 transition-all "+className}
    >
      {children}
    </button>
  );
};

export default Button;
