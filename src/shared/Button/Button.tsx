import { ComponentProps } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  variant: ButtonVariant;
}
export const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.btn, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
