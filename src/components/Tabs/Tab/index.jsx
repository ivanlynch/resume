import React from "react";

function Tab({ title, isActive, onClick }) {
  return (
    <li className="mr-2 w-full">
      <button
        onClick={onClick}
        className={`p-4 w-full rounded-t-lg border-b-2 whitespace-nowrap ${
          isActive
            ? "text-teal-400 border-teal-400 border-b-[4px]"
            : "text-slate-400 opacity-70"
        } `}
      >
        {title.toUpperCase()}
      </button>
    </li>
  );
}

export default Tab;
