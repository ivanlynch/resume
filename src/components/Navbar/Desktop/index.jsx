import React from "react";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="w-full flex justify-center h-[10%]">
      <nav className="flex justify-between items-center font-medium cursor-pointer gap-10 text-slate-50">
        <Link
          type="button"
          className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
          to={"/"}
        >
          Home
        </Link>
        <Link
          type="button"
          className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
          to={"/about"}
        >
          About
        </Link>
        <Link
          type="button"
          to={"/experience"}
          className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
        >
          Experience
        </Link>
        <Link
          type="button"
          to={"/contact"}
          className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export { Desktop };
