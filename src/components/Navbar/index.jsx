import { SideMenu } from "components";
import { useActiveHash, useDevice } from "hooks";
import { useState } from "react";
import {
  Bars3Icon as Bars,
  XMarkIcon as Times,
} from "@heroicons/react/24/outline";
import Links from "./shared/Links";

const Navbar = () => {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const { hash } = useActiveHash();
  const { isMobile } = useDevice();

  const handleMobileMenu = () => setMenuClicked(!isMenuClicked);

  const handleNavigation = (path) => {
    window.location.hash = `#${path}`;
    if (isMobile) {
      handleMobileMenu();
    }
  };

  const handleActiveLink = (path) => {
    if (hash === path) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`w-screen flex bg-slate-900 justify-center h-[10vh] fixed top-0 shadow-2xl z-[calc(9e998)]`}
    >
      <nav
        className="flex justify-end items-center pr-4 md:hidden w-full"
        onClick={handleMobileMenu}
      >
        <div>
          {isMenuClicked ? <Times height={40} /> : <Bars height={40} />}
        </div>
      </nav>
      <nav className="w-full hidden md:flex justify-between items-center font-medium cursor-pointer gap-10 text-slate-50">
        <Links handleActiveLink={handleActiveLink} onClick={handleNavigation} />
      </nav>
      <SideMenu isOpen={isMenuClicked}>
        <Links handleActiveLink={handleActiveLink} onClick={handleNavigation} />
      </SideMenu>
    </div>
  );
};

export { Navbar as default };
