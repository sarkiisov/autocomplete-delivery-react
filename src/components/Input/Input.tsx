import React from 'react';

import useStyles from './Input.styles';

export interface InputProps {
  labelText: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  placeholderText?: string;
  helperText?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  labelText,
  name,
  onChange,
  onBlur,
  placeholderText,
  helperText,
  error
}) => {
  const classes = useStyles({ error });

  return (
    <div className={classes.root}>
      <p className={classes.labelText}>{labelText}</p>
      <input className={classes.input} placeholder={placeholderText} name={name} onChange={onChange} onBlur={onBlur} autoComplete="off"/>
      <p className={classes.helperText}>{helperText}</p>
    </div>
  );
};