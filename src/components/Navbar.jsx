import { Bars, Language, Times, Theme } from "icons";
import { useState } from "react";
import { SideMenu } from "components";
import { useDevice } from "hooks";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuClicked, setMenuClicked] = useState(false);
  const { isMobile } = useDevice();

  const handleClick = () => setMenuClicked(!isMenuClicked);

  return (
    <div>
      {isMobile && (
        <div className="relative top-0 z-50">
          <div
            onClick={handleClick}
            className="mt-4 mr-4 fixed top-0 right-0 z-[calc(9e999)]"
          >
            {isMenuClicked ? <Times /> : <Bars />}
          </div>
          <SideMenu isOpen={isMenuClicked}>
            <ul className="nav-links">
              <Link className="m-4" to="/" onClick={handleClick}>
                Home
              </Link>
              <Link className="m-4" to="/about" onClick={handleClick}>
                About me
              </Link>
              <Link className="m-4" to="/work" onClick={handleClick}>
                Work Experience
              </Link>
              <Link className="m-4" to="/skills" onClick={handleClick}>
                Skills
              </Link>
              <Link className="m-4" to="/contact" onClick={handleClick}>
                Contact
              </Link>
              <li className="m-4">Blog (Soon)</li>
              <li className="flex items-center justify-center m-4">
                <Language size={32} />
                <p className="px-4 whitespace-nowrap">Change Language</p>
              </li>
              <li className="flex items-center justify-center m-4">
                <Theme size={32} />
                <p className="px-4 whitespace-nowrap">Change Theme</p>
              </li>
            </ul>
          </SideMenu>
        </div>
      )}
    </div>
  );
}

export default Navbar;
