import { createUseStyles } from 'react-jss';

import { COLOR_BLACK, COLOR_GREY_400 } from '../../theme/colors';

export default createUseStyles({
  root: {

  },
  item: {
    margin: '16px 0px',
    width: '100%',
    maxWidth: '430px',
    padding: '16px',
    border: `1px solid ${COLOR_BLACK}`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerInner: {
    textOverflow: 'clip',
    marginRight: '16px',
  },
  headerText: {
    whiteSpace: 'nowrap',
    fontSize: '16px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  body: {
    marginTop: '16px'
  },
  bodyText: {
    whiteSpace: 'nowrap',
    textOverflow: 'clip',
    display: 'block',
    fontSize: '16px',
    color: COLOR_GREY_400,
    '& + &': {
      marginTop: '8px'
    }
  },
  emptyBookText: {
    display: 'block',
    width: '100%',
    textAlign: 'center'
  },
  '@media (max-width: 600px)': {
    root: {
      maxWidth: 'none',
      width: '100%'
    }
  }
});
