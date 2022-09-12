import { useDevice } from "hooks";
import { Desktop } from "./Desktop";
import Mobile from "./Mobile";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { isMobile } = useDevice();
  const { pathname } = useLocation();

  if (isMobile) {
    return <Mobile pathname />;
  }

  return <Desktop pathname={pathname} />;
}
