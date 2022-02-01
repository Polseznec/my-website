import React from "react";
import gsap from "gsap";

export const useGsapToggle = (options) => {
  const [open, setOpen] = React.useState(false);
  const [ref, setRef] = React.useState({});

  const { current: TL } = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    TL.to(ref, options);
  }, [ref, options, TL]);

  const animate = React.useCallback(() => {
    open ? TL.reverse() : TL.play();
    setOpen(!open);
  }, [open, TL]);

  return [setRef, animate];
};
