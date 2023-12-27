import { RefObject, useCallback, useEffect, useState } from "react";

const useIsVisible = (
  ref: RefObject<Element>,
  callback: VoidFunction,
  options: { once?: boolean } = {}
) => {
  const { once } = options;
  const [called, setCalled] = useState(false);

  const cb = useCallback(
    (elements: IntersectionObserverEntry[]) => {
      if (called && once) return;
      if (elements[0].isIntersecting) {
        callback();
        setCalled(true);
        return;
      }
    },
    [callback, called, once]
  );

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(cb, {
        rootMargin: "0px",
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref, callback, cb]);
};

export default useIsVisible;
