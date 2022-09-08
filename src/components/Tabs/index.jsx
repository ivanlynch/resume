import React from "react";
import Pane from "./Pane";
import Tab from "./Tab";
import { nanoid } from "nanoid";

function Tabs({ data, className }) {
  const [tabs] = React.useState([...data]);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <div
      className={`px-2 text-sm font-medium text-left  text-gray-500  w-full ${className}`}
    >
      <ul className="flex flex-nowrap overflow-scroll no-scrollbar -mb-px w-full">
        {tabs.map(({ company }, index) => (
          <Tab
            key={nanoid(4)}
            onClick={() => setActiveTabIndex(index)}
            title={`${company}`}
            isActive={index === activeTabIndex}
          />
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <Pane key={nanoid(4)} {...tab} isActive={index === activeTabIndex} />
      ))}
    </div>
  );
}

export default Tabs;
