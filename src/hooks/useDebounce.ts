import { useState, useCallback } from 'react';

type Callback = (...args: any[]) => void;

export const useDebounce = (callback: Callback, delay: number) => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const debouncedCallback = useCallback(((...args) => {
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    clearTimeout(timer);
    setTimer(newTimer);
  }) as Callback, [callback, delay]);

  return debouncedCallback;
};
