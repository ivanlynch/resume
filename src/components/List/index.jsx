import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { nanoid } from "nanoid";
import React from "react";

function List({ items }) {
  return (
    <ul className="text-lg flex flex-wrap justify-center items-center">
      {items.map((item) => (
        <li
          key={nanoid(4)}
          className="flex items-center mt-2 gap-1 basis-1/2 text-slate-400"
        >
          <ChevronRightIcon className="h-3 w-3 text-teal-400 stroke-[4]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
