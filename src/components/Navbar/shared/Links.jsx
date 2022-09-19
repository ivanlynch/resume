import React from "react";

function Links({ handleActiveLink, onClick: navTo }) {
  return (
    <ul className="nav-links">
      <li
        className={`links ${handleActiveLink("#home")}`}
        onClick={() => navTo("home")}
      >
        Home
      </li>
      <li
        className={`links ${handleActiveLink("#about")}`}
        onClick={() => navTo("about")}
      >
        About
      </li>
      <li
        className={`links ${handleActiveLink("#experience")}`}
        onClick={() => navTo("experience")}
      >
        Experience
      </li>
      <li
        className={`links ${handleActiveLink("#contact")}`}
        onClick={() => navTo("contact")}
      >
        Contact
      </li>
    </ul>
  );
}

export default Links;
