import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const ButtonSocial: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='border-[1.5px] border-[#242424] w-[69px] h-[51px] flex items-center justify-center'>
      {children || 'Button'}
    </button>
  );
};