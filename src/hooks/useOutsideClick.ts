import React, { useEffect } from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void, excludeElements?: React.RefObject<HTMLElement>[]) => {
  useEffect(() => {
    function isExcluded(element: HTMLElement) {
      if (!excludeElements) {
        return false;
      }
      for (const curElement of excludeElements) {
        if (curElement.current == null) {
          continue;
        }
        if (curElement.current === element || curElement.current.contains(element)) {
          return true;
        }
      }
      return false;
    }

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !isExcluded(<HTMLElement>event.target) && !ref.current.contains(<HTMLElement>event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
