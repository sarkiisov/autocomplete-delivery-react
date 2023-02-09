/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';

import useStyles from './Button.styles';

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  isDisabled
}) => {
  const classes = useStyles();

  return (
    <button className={clsx(classes.root, className)} disabled={isDisabled}>
      {children}
    </button>
  );
};
