/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import useStyles from './Toastify.styles';

export interface ToastifyProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export const Toastify: React.FC<ToastifyProps> = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.toastText}>{ message }</span>
    </div>
  );
};
