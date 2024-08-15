import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  btnText: string;
  onClick: () => void;
  varient?: "filled" | "outline";
}

const Button = ({
  icon,
  btnText,
  onClick,
  varient = "filled",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 gap-1.5 min-w-20 ${
        varient === "filled"
          ? "bg-black text-white"
          : "border border-black text-black"
      }`}
    >
      {icon} {btnText}
    </button>
  );
};

export default Button;
