import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useClickOutside = (handler: Dispatch<SetStateAction<boolean>>) => {
  const domNode = useRef<any>(null);

  useEffect(() => {
    const funcHandler = (e: MouseEvent) => {
      if (!domNode.current?.contains(e.target as Node)) {
        handler;
      }
    };
    document.addEventListener('click', funcHandler);
    return () => document.removeEventListener('click', funcHandler);
  });

  return domNode;
};
