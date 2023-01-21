import React from 'react';
import { BaseSVGIcon } from './BaseSVGIcon';
import { IconProps } from '../icons.types';

import { COLOR_GREY_300 } from '../../colors';

export const SearchLogo: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24px"
    height="24px"
    fill="none"
    stroke={COLOR_GREY_300}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path xmlns="http://www.w3.org/2000/svg" d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
