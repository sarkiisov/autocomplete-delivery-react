import { createUseStyles } from 'react-jss';

export default createUseStyles({
  form: {
    padding: '20px',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
    '& > form': {
      width: 'fit-content'
    }
  }
});