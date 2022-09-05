import * as React from 'react';
import { BaseSVGIcon } from './BaseSVGIcon';
import { IconProps } from '../icons.types';

import { COLOR_GREY_300 } from '../../colors';

export const LoaderLogo: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24px"
    height="24px"
    fill= {COLOR_GREY_300}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M12 22C17.421 22 22 17.421 22 12H20C20 16.337 16.337 20 12 20C7.663 20 4 16.337 4 12C4 7.664 7.663 4 12 4V2C6.579 2 2 6.58 2 12C2 17.421 6.579 22 12 22Z"/>
  </BaseSVGIcon>
);
