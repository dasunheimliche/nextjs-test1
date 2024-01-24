import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const isServer = typeof window === "undefined";

  const [isMobile, setIsMobile] = useState(
    isServer ? false : window.innerWidth <= 640
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isServer]);

  return isMobile;
};
