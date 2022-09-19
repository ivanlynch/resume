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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])
  

  return {
    isMobile
  }
}

export default useDevice;
