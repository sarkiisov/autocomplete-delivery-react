import React from 'react';

import { SearchLogo } from '../../theme/icons/components/SearchLogo';
import { LoaderLogo } from '../../theme/icons/components/LoaderLogo';

import { InputStatus } from '../../types/form';

const iconDefaultProps = {
  width: '24',
  height: '24'
};

export const IconsHelper: {
  [key in InputStatus]: React.ReactNode;
} = {
  'INITIAL': <SearchLogo {...iconDefaultProps} />,
  'FETCHING': <LoaderLogo {...iconDefaultProps} />
};