/* eslint-disable react/button-has-type */
import React from 'react';

import useStyles from './Button.styles';

export interface ButtonProps {
  innerText: string;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  innerText,
  isDisabled
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.root}
      disabled={isDisabled}
    >
      {innerText}
    </button>
  );
};
