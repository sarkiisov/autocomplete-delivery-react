import React from 'react';
import clsx from 'clsx';

import useStyles from './Input.styles';

export interface InputProps {
  className?: string;
  value: string;
  labelText: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  placeholderText?: string;
  helperText?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  value,
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
    <div className={clsx(classes.root, className)}>
      <p className={classes.labelText}>{labelText}</p>
      <input
        className={classes.input}
        placeholder={placeholderText}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      <p className={classes.helperText}>{helperText}</p>
    </div>
  );
};
