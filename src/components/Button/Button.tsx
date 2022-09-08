import * as React from 'react';

import useStyles from './Button.styles';

export interface ButtonProps {
  innerText: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  innerText,
  type,
  isDisabled
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.root}
      type={type}
      disabled={isDisabled}
    >
      {innerText}
    </button>
  );
};