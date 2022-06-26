import React from "react";
import { MobileNavbarHeader } from "components";
import { useWork } from "hooks";

function Work() {
  const work = useWork();

  return (
    <div>
      <MobileNavbarHeader title={"Work"} subtitle={"My working experience"} />
      {work.map(({ company }, index) => (
        <ul>
          <li>{company}</li>
        </ul>
      ))}
    </div>
  );
}

export default Work;
