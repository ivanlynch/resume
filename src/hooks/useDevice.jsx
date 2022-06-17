import { useState, useEffect } from "react";
import { useWindowDimensions } from "hooks";

function useDevice() {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimensions();

  const handleResize = () => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize()
  }, [width])
  

  return {
    isMobile
  }
}

export default useDevice;
