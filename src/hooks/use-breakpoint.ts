import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setBreakpoint("xs");
    } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
      setBreakpoint("sm");
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setBreakpoint("md");
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      setBreakpoint("lg");
    } else {
      setBreakpoint("xl");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
