import { Navbar } from "components";
import { ThemeContextProvider } from "contexts";


function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
     
      <div className="dark:bg-gray-900 min-h-screen flex items-center justify-center flex-col">
        <div className="flex">
          <div className="text-slate-50 font-sans font-semibold h-full flex items-center flex-col">
            <p className="leading-snug text-4xl text-center">
              Hello there 🙋‍♂️, <br />
              I'm <span className="text-yellow-400">Iván Lynch</span>, a<br />
              <span className="text-rose-400 whitespace-nowrap">
                Javascript Developer
              </span>
            </p>
            <picture className="profile">
              <source
                media="(min-width:640px)"
                srcSet={"./assets/img/sm-profile.png"}
              />
              <img src={"./assets/img/sm-profile.png"} alt="Rombos" />
            </picture>
          </div>
        </div>
        <div className="w-4/6 sm:invisible">
          <ul className="flex gap-10 font-medium text-slate-50 cursor-pointer hidden">
            <li className="hover:bg-rose-400">About</li>
            <li className="hover:bg-rose-400">Skills</li>
            <li className="hover:bg-rose-400">Work</li>
            <li className="hover:bg-rose-400">Contact</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 animate-pulse">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={"./assets/img/sm-simple.svg"}
          />
          <img src={"./assets/img/sm-simple.svg"} alt="Rombos" />
        </picture>
      </div>
      <div className="absolute top-0 left-0 animate-pulse">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={"./assets/img/sm-doble.svg"}
          />
          <img src={"./assets/img/sm-doble.svg"} alt="Rombos" />
        </picture>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
