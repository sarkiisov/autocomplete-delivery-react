import React from 'react';
import clsx from 'clsx';

import useStyles from './Layout.styles';

import { Header } from '../Header/Header';

export interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  className,
  children
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Header />
      {children}
    </div>
  );
};
