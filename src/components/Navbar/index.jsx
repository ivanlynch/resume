import { useDevice } from "hooks";
import { Desktop } from "./Desktop";
import Mobile from "./Mobile";

export default function Navbar() {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <Mobile />;
  }

  return <Desktop />;
}
