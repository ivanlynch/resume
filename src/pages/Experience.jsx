import React from "react";
import { Tabs } from "components";
import { useWork } from "hooks";

const Work = () => {
  const [work] = React.useState(useWork());

  return (
    <div>
      <Tabs className={"mt-8"} data={work} />
    </div>
  );
};

export { Work as default };
