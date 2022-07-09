import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <nav className="flex font-medium cursor-pointer gap-10 text-slate-50">
      <Link
        type="button"
        className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
        to={"/about"}
      >
        About
      </Link>
      <Link
        type="button"
        to={"/skills"}
        className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
      >
        Skills
      </Link>
      <Link
        type="button"
        to={"/work"}
        className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
      >
        Work
      </Link>
      <Link
        type="button"
        to={"/contact"}
        className="hover:border-b-4 hover:-mb-1 hover:border-rose-400"
      >
        Contact
      </Link>
    </nav>
  );
}

export default index;
