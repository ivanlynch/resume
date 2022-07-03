import React from "react";
import Pane from "./Pane";
import Tab from "./Tab";

function Tabs({ data }) {
  const [tabs] = React.useState([...data]);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <div className="px-2 text-sm font-medium text-center  text-gray-500 border-b border-gray-200">
      <ul className="flex flex-nowrap overflow-scroll no-scrollbar -mb-px">
        {tabs.map(({ from, to }, index) => (
          <Tab
            key={`tab-${index}`}
            onClick={() => setActiveTabIndex(index)}
            title={`${from} - ${to}`}
            isActive={index === activeTabIndex}
          />
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <Pane key={`pane-${index}`} {...tab} isActive={index === activeTabIndex} />
      ))}
    </div>
  );
}

export default Tabs;
