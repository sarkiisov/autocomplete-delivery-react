import { createUseStyles } from 'react-jss';

import { COLOR_WHITE, COLOR_BLACK } from '../colors';
import '@fontsource/inter';

export default createUseStyles({
  '@global': {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      fontFamily: '"Inter", sans-serif'
    },
    body: {
      background: COLOR_WHITE,
      color: COLOR_BLACK,
      fontWeight: 'bold',
      fontStyle: 'oblique'
    }
  }
});
