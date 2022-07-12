import Mobile from "./Mobile";

export default function Navbar({ isMobile }) {
  return <>{isMobile && <Mobile />}</>;
}
