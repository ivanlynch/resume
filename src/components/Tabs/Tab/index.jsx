import React from "react";

function Tab({ title, isActive, onClick }) {
  return (
    <li className="mr-2 w-full">
      <button
        onClick={onClick}
        className={`transition-colors duration-300 inline-block p-4 w-full rounded-t-lg border-b-2 border-transparent whitespace-nowrap ${
          isActive
            ? "text-slate-400 border-slate-400 "
            : "text-slate-500 opacity-50"
        } `}
      >
        {title.toUpperCase()}
      </button>
    </li>
  );
}

export default Tab;
