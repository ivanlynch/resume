import { useEffect, useState } from "react";

const useActiveHash = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return { hash };
};

export { useActiveHash };
