import React from 'react';
import { toast } from 'react-toastify';
import { Toastify, ToastifyProps } from '../components/Toastify';

export const setNotification = (props: ToastifyProps) => {
  toast(<Toastify {...props} />);
};
