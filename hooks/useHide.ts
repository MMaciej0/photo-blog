import { MutableRefObject, useEffect, useRef } from 'react';

export const useHide = (
  scrollValue: number,
  sign: 'higher' | 'lower'
): MutableRefObject<any> => {
  const domNode = useRef<any>(null);
  useEffect(() => {
    const handler = () => {
      if (domNode.current) {
        if (sign === 'higher') {
          if (window.scrollY > scrollValue) {
            domNode.current.classList.add('invisible');
          } else {
            domNode.current.classList.remove('invisible');
          }
        } else if (sign === 'lower') {
          if (window.scrollY < scrollValue) {
            domNode.current.classList.add('invisible');
          } else {
            domNode.current.classList.remove('invisible');
          }
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
  return domNode;
};
