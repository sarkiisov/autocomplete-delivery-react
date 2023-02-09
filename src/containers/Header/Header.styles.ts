import { createUseStyles } from 'react-jss';

export interface HeaderStyleProps {

}

export default createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0px 48px 0px'
  },
  linkButton: {
    padding: '8px',
    margin: '0px 8px',
    outline: 'none',
    border: 'none',
    background: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'oblique',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  linkButtonActive: {
    textDecoration: 'underline'
  }
});
