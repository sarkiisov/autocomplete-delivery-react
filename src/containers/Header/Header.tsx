import React from 'react';
import clsx from 'clsx';

import { useLocation, useNavigate } from 'react-router-dom';
import { routesConfig } from '../../config';

import useStyles from './Header.styles';

export interface LayoutProps {
  className?: string;
}

export const Header: React.FC<LayoutProps> = ({ className }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentRoute = (path: string) => location.pathname === path;

  const handleLinkButtonClick = (toRoute: string) => {
    navigate(toRoute);
  };

  return (
    <div className={clsx(classes.root, className)}>
      {routesConfig.map(({ label, path }) => (
        <button
          type="button"
          className={clsx(classes.linkButton, { [classes.linkButtonActive]: isCurrentRoute(path) })}
          onClick={() => handleLinkButtonClick(path)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
