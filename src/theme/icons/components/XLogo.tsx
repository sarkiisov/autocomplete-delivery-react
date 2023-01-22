import React from 'react';
import { BaseSVGIcon } from './BaseSVGIcon';
import { IconProps } from '../icons.types';

import { COLOR_GREY_300 } from '../../colors';

export const XLogo: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24px"
    height="24px"
    fill="none"
    stroke={COLOR_GREY_300}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M21.3333 2.66667L2.66663 21.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path xmlns="http://www.w3.org/2000/svg" d="M2.66663 2.66667L21.3333 21.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
