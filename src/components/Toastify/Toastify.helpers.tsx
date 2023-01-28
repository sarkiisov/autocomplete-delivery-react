import React from 'react';
import { ToastContainerProps, CloseButtonProps, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { XLogo } from '../../theme/icons/components';
import useStyles from './Toastify.styles';

export const CloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => {
  const classes = useStyles();

  return (
    <button type="button" onClick={closeToast} className={classes.closeButton}>
      <XLogo width="16" height="16" />
    </button>
  );
};

export const toastContainerProps: ToastContainerProps = {
  autoClose: 4000,
  pauseOnHover: false,
  newestOnTop: true,
  draggable: false,
  limit: 3,
  hideProgressBar: true,
  closeButton: CloseButton,
  transition: Slide,
};
