import React from "react";
import { MobileNavbarHeader, Tabs } from "components";
import { useWork } from "hooks";

function Work() {
  const [work] = React.useState(useWork());

  return (
    <div className="bg-gray-900">
      <MobileNavbarHeader title={"Work"} subtitle={"My working experience"} />
      <Tabs data={work} />
    </div>
  );
}

export default Work;
