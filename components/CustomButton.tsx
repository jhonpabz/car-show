'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export const CustomButton = (props: CustomButtonProps) => {
  const {
    onClick,
    disabled = false,
    title,
    containerStyles,
    btnType = 'button',
    textStyles,
    rightIcon,
  } = props;
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
