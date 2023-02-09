import { createUseStyles } from 'react-jss';
import { COLOR_BLACK } from '../../theme/colors';

export interface ToastifyStyleProps {
}

export default createUseStyles({
  root: {
  },
  toastText: {
    color: COLOR_BLACK,
    userSelect: 'none',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  '@global': {
    '.Toastify__toast': {
      padding: '16px',
      border: `1px solid ${COLOR_BLACK}`,
      borderRadius: 0,
    }
  }
});
