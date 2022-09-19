import React, { useState } from "react";
import { Tabs, Page } from "components";
import { useWork } from "hooks";

const Work = () => {
  const [work] = useState(useWork());

  return (
    <Page id={"experience"}>
      <div className="h-screen md:flex md:flex-col md:justify-center md:items-center">
        <Tabs data={work} />
      </div>
    </Page>
  );
};

export { Work as default };
