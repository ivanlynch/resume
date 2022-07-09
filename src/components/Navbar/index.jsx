import Mobile from "./Mobile";
import { useDevice } from "hooks";

function Index() {
  const { isMobile } = useDevice();

  return <div>{isMobile && <Mobile />}</div>;
}

export default Index;
