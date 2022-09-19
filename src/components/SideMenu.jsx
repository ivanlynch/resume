import React from "react";

function SideMenu({ isOpen, children }) {
  return (
    <div
      className={`flex fixed top-0 -z-10 bg-gray-800 h-screen w-screen left-100 transition  duration-700 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {children}
    </div>
  );
}

export default SideMenu;
