import React, { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="bg-[#DCEF64] w-[156px] h-[51px]">
      <span className="font-medium">
				{text}
			</span>
    </button>
  );
};
