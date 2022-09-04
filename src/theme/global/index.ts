import { createUseStyles } from 'react-jss';

import { COLOR_WHITE, COLOR_BLACK } from '../colors';
import '@fontsource/inter';

export default createUseStyles({
  '@global': {
    body: {
      background: COLOR_WHITE,
      color: COLOR_BLACK,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 'bold',
      fontStyle: 'oblique'
    }
  }
});