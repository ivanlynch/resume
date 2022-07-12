import React from "react";
import { Title, Tabs, Page } from "components";
import { useDevice, useWork } from "hooks";

function Work() {
  const [work] = React.useState(useWork());
  const { isMobile } = useDevice();

  return (
    <Page
      isMobile={isMobile}
      header={<Title title={"Work"} subtitle={"My working experience"} />}
      content={<Tabs data={work} />}
    />
  );
}

export default Work;
