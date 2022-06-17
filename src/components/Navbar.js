import { Bars, Language, Times, Theme } from "icons";
import { useState } from "react";
import { SideMenu } from "components";
import { useDevice } from 'hooks'
import { Link } from 'react-router-dom'

function Navbar() {

  const [isMenuClicked, setMenuClicked] = useState(false);
  const { isMobile } = useDevice()

  const handleClick = () => setMenuClicked(!isMenuClicked);

  return (
    <nav className="bg-transparent flex h-screen justify-end absolute right-0 top-0 w-full z-10 overflow-hidden">
      {isMobile ? (
        <>
          <div onClick={handleClick} className="mt-4 mr-4">
            {isMenuClicked ? <Times /> : <Bars />}
          </div>
          <SideMenu isOpen={isMenuClicked}>
            <ul className="flex flex-col justify-center items-center h-full w-full text-2xl text-white -z-20">
              <Link className="m-4" to='/' onClick={handleClick}>Home</Link>
              <Link className="m-4" to='/about' onClick={handleClick}>About me</Link>
              <Link className="m-4" to='/work' onClick={handleClick}>Work Experience</Link>
              <Link className="m-4" to='/skills' onClick={handleClick}>Skills</Link>
              <Link className="m-4" to='/contact' onClick={handleClick}>Contact</Link>
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
