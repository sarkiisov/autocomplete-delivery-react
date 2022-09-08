import { createUseStyles } from 'react-jss';

import { COLOR_WHITE, COLOR_BLACK, COLOR_GREY_300 } from './../../theme/colors/colors.constant';

export default createUseStyles({
  root: {
    width: '430px',
    height: '55px',
    color: COLOR_BLACK,
    border: '1px solid currentColor',
    backgroundColor: COLOR_WHITE,
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'oblique',
    transition: 'border .2s, color .2s, backgroundColor .2s',
    '&:disabled': {
      color: COLOR_GREY_300,
      cursor: 'not-allowed'
    },
    '&:hover:not([disabled])': {
      backgroundColor: COLOR_BLACK,
      color: COLOR_WHITE,
      cursor: 'pointer'
    }
  },
  '@media (max-width: 600px)': {
    root: {
      width: '100% !important'
    }
  }
});