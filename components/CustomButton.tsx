'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export const CustomButton = (props: CustomButtonProps) => {
  const { onClick, disabled = false, title, containerStyles } = props;
  return (
    <button
      disabled={disabled}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
