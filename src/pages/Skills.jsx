import React from "react";
import { Page, Title } from "components";
import { useDevice } from "hooks";

function Skills() {
  const { isMobile } = useDevice();
  return (
    <Page
      isMobile={isMobile}
      header={<Title title={"Skills"} subtitle={"What can i do"} />}
      content={<div>Skills</div>}
    />
  );
}

export default Skills;
