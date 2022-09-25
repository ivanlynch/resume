import React, { useState } from "react";
import { Tabs, Page } from "components";
import { useWork } from "hooks";

const Work = () => {
  const [work] = useState(useWork());

  return (
    <Page id={"experience"}>
      <div className="landscape:my-16 h-screen md:flex md:flex-col md:justify-center md:items-center pt-20 sm:pt-0">
        <Tabs data={work} />
      </div>
    </Page>
  );
};

export { Work as default };
