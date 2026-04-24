import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const useMobileScreen = (breakpoint = MOBILE_BREAKPOINT) => {
  const getIsMobile = () => {
    if (typeof window === "undefined") {
      return false;
    }

    const isSmallWidth = window.innerWidth <= breakpoint;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasNoHover = window.matchMedia("(hover: none)").matches;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isSmallWidth || (hasTouch && (hasCoarsePointer || hasNoHover));
  };

  const [isMobileScreen, setIsMobileScreen] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(getIsMobile());
    };

    const coarsePointerMedia = window.matchMedia("(pointer: coarse)");
    const noHoverMedia = window.matchMedia("(hover: none)");

    window.addEventListener("resize", handleResize);
    coarsePointerMedia.addEventListener("change", handleResize);
    noHoverMedia.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      coarsePointerMedia.removeEventListener("change", handleResize);
      noHoverMedia.removeEventListener("change", handleResize);
    };
  }, [breakpoint]);

  return isMobileScreen;
};

export default useMobileScreen;
