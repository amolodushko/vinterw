import { useCallback, useRef } from 'react';

const useDebounce = (callback, delayMs) => {
  const timer = useRef(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delayMs);

      return () => timer.current && clearTimeout(timer.current);
    },
    [callback, delayMs]
  );
};

export default useDebounce;
