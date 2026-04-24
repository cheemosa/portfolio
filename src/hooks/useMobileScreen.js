import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const useMobileScreen = (breakpoint = MOBILE_BREAKPOINT) => {
  const getIsMobile = () => window.innerWidth <= breakpoint;

  const [isMobileScreen, setIsMobileScreen] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(getIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobileScreen;
};

export default useMobileScreen;
