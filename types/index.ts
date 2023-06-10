import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnType?: 'button' | 'submit';
}
