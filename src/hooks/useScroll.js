import { useEffect, useState } from "react";

/*
  * useScroll
  return {}
*/
function useScroll() {
  const [previousScrollValue, setPreviousScrollValue] = useState(
    window.scrollY
  );
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    function checkScrollDirection({ currentTarget: { scrollY } }) {
      if (previousScrollValue > scrollY) {
        setIsScrollingDown(false);
      } else if (previousScrollValue < scrollY) {
        setIsScrollingDown(true);
      }
      setPreviousScrollValue(scrollY);
    }

    window.addEventListener("scroll", checkScrollDirection);
    return () => window.removeEventListener("scroll", checkScrollDirection);
  }, [previousScrollValue]);

  return { isScrollingDown };
}

export { useScroll };
