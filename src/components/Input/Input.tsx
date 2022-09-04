import * as React from 'react';

import useStyles from './Input.styles';

export interface InputProps {
  labelText: string;
  placeholderText?: string;
  helperText?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  labelText,
  placeholderText,
  helperText,
  error
}) => {
  const classes = useStyles({ error });

  return (
    <div className={classes.root}>
      <p className={classes.labelText}>{labelText}</p>
      <input className={classes.input} placeholder={placeholderText} />
      <p className={classes.helperText}>{helperText}</p>
    </div>
  );
};