import { RefCallback, useCallback, useEffect, useState } from "react";

export interface RectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

type Element = HTMLElement | SVGElement | null;

const useMeasure = (): [RefCallback<Element>, RectReadOnly] => {
  const [element, setElement] = useState<Element>(null);
  const [currentRect, setCurrentRect] = useState<RectReadOnly>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const ref = useCallback((node: Element) => {
    setElement(node);
  }, []);

  useEffect(() => {
    // if !element exit
    if (!element) return;
    // create resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      setCurrentRect(entries[0].contentRect);
    });
    // observer start
    resizeObserver.observe(element);

    // cleanup
    return () => {
      resizeObserver.unobserve(element);
    };
  }, [element]);

  return [ref, currentRect];
};

export default useMeasure;
