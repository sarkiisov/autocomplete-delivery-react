import React from 'react';
import clsx from 'clsx';

import { addressBookSelectors } from '../../store/addressBook/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { XLogo } from '../../theme/icons/components';
import { removeBookItem } from '../../store/addressBook/reducer';

import useStyles from './Book.styles';

export interface BookProps {
  className?: string;
}

const itemsKeys = ['email', 'city', 'street', 'house'];

export const Book: React.FC<BookProps> = ({ className }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const addressBook = useAppSelector(addressBookSelectors.getAddresses);

  const handleRemoveBookItem = (id: string) => {
    dispatch(removeBookItem(id));
  };

  return (
    <div className={clsx(classes.root, className)}>
      {addressBook.length !== 0
        ? addressBook.map(({ id, details }, index) => (
          <div className={classes.item}>
            <div className={classes.header}>
              <div className={classes.headerInner}>
                <span className={classes.headerText}>
                  Адрес #
                  {index + 1}
                </span>
              </div>
              <button type="button" onClick={() => handleRemoveBookItem(id)} className={classes.deleteButton}>
                <XLogo width="24" height="24" />
              </button>
            </div>
            <div className={classes.body}>
              { itemsKeys.map((item) => <span key={item} className={classes.bodyText}>{details[item]}</span>) }
            </div>
          </div>
        ))
        : <span className={classes.emptyBookText}>Нет добавленных адресов</span>}
    </div>
  );
};
