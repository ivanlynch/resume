import { Bars, Language, Times, Theme } from "icons";
import { useEffect, useRef, useState } from "react";
import { SideMenu } from "components";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuClicked, setMenuClicked] = useState(false);
  const isMounted = useRef(false);

  const checkResolution = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleClick = () => setMenuClicked(!isMenuClicked);

  useEffect(() => {
    isMounted.current = true;

    if (isMounted.current) {
      window.addEventListener("resize", checkResolution);
    }

    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", checkResolution);
    };
  }, [isMobile]);

  return (
    <nav className="bg-transparent flex justify-end absolute right-0 top-0 w-full z-10">
      {isMobile ? (
        <>
          <div onClick={handleClick} className="mt-4 mr-4">
            {isMenuClicked ? <Times /> : <Bars />}
          </div>
          <SideMenu isOpen={isMenuClicked}>
            <ul className="flex flex-col justify-center items-center w-full text-2xl text-white">
              <li className="m-4">About me</li>
              <li className="m-4">Work Experience</li>
              <li className="m-4">Skills</li>
              <li className="m-4">Contact</li>
              <li className="m-4">Blog (Soon)</li>
              <li className="m-4 flex justify-center items-center">
                <Language size={32} />
                <p className="px-4 whitespace-nowrap">Change Language</p>
              </li>
              <li className="m-4 flex justify-center items-center">
                <Theme size={32} />
                <p className="px-4 whitespace-nowrap">Change Theme</p>
              </li>
            </ul>
          </SideMenu>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
