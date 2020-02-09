import { RefObject, useEffect, useState } from 'react';
import debounce from 'lodash/debounce'

export interface State {
  x: number;
  y: number;
}

const useDebouncedScroll = (ref: RefObject<HTMLElement>, time: number): State => {

  const [state, setState] = useState<State>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        });
      }
    };

    const debouncedHandler = debounce(handler, time)

    if (ref.current) {
      ref.current.addEventListener('scroll', debouncedHandler, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', debouncedHandler);
      }
    };
  }, [ref]);

  return state;
};

export default useDebouncedScroll;
