import React, { useEffect } from "react";

const useIntersectionObserver = (
  target: React.RefObject<HTMLDivElement>,
  callback: (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void
) => {
  useEffect(() => {
    if (!target.current) return;
    let observer = new IntersectionObserver(callback, {
      rootMargin: "1500px",
    });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [callback, target]);
};

export default useIntersectionObserver;
