import { MutableRefObject, useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void): MutableRefObject<any> => {
  const domNode = useRef<any>(null);

  useEffect(() => {
    const funcHandler = (e: MouseEvent) => {
      if (!domNode.current?.contains(e.target as Node)) {
        handler();
      }
    };
    document.addEventListener('click', funcHandler);
    return () => document.removeEventListener('click', funcHandler);
  });

  return domNode;
};
