import { createUseStyles } from 'react-jss';
import { COLOR_RED, COLOR_BLACK, COLOR_GREY_300, COLOR_GREY_400 } from './../../theme/colors/colors.constant';

export interface StyleProps {
  error?: boolean;
}

export default createUseStyles({
  root: {
    marginBottom: '20px'
  },
  labelText: {
    fontSize: '16px'
  },
  input: (props: StyleProps) => ({
    width: '430px',
    height: '55px',
    padding: '0px 16px',
    margin: '10px 0px',
    border: `1px solid ${ props.error ? COLOR_RED : COLOR_BLACK }`,
    outline: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'oblique',

    '&::placeholder': {
      color: COLOR_GREY_300
    }
  }),
  helperText: (props: StyleProps) => ({
    color: props.error ? COLOR_RED : COLOR_GREY_400,
    fontSize: '14px'
  }),

  '@media (max-width: 600px)': {
    input: {
      width: '100% !important'
    }
  }
});