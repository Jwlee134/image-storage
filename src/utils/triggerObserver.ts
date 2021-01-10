interface IProps {
  target: HTMLDivElement | null;
  callback: (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void;
}

const triggerObserver = ({ target, callback }: IProps) => {
  if (target !== null) {
    let observer = new IntersectionObserver(callback, {
      rootMargin: "1500px",
    });
    observer.observe(target);
  }
};

export default triggerObserver;
