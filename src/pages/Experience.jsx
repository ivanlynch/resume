import React from "react";
import { Title, Tabs } from "components";
import { useWork } from "hooks";
import { Size } from "constants";

const Work = () => {
  const [work] = React.useState(useWork());

  return (
    <div>
      <Title size={Size.H1}>Where I've Worked</Title>
      <Tabs className={"mt-8"} data={work} />
    </div>
  );
};

export { Work as default };
