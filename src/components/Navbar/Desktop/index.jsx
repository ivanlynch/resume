import React from "react";
import { Link } from "react-router-dom";

const Desktop = ({ pathname }) => {
  const handleActiveLink = (path) => {
    if (pathname === path) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="w-full flex justify-center h-[10%]">
      <nav className="flex justify-between items-center font-medium cursor-pointer gap-10 text-slate-50">
        <Link
          type="button"
          className={`links ${handleActiveLink("/")}`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          type="button"
          className={`links ${handleActiveLink("/about")}`}
          to={"/about"}
        >
          About
        </Link>
        <Link
          type="button"
          to={"/experience"}
          className={`links ${handleActiveLink("/experience")}`}
        >
          Experience
        </Link>
        <Link
          type="button"
          to={"/contact"}
          className={`links ${handleActiveLink("/contact")}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export { Desktop };
