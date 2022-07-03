import { Layout } from "components";

function Home() {
  return (
    <Layout>
      <div className="dark:bg-gray-900 h-screen flex items-center justify-center flex-col">
        <div className="flex">
          <div className="text-slate-50 font-sans font-semibold h-full flex items-center flex-col">
            <p className="leading-snug font-light text-4xl text-center">
              Hello! I'm <span className="text-yellow-400">Iván</span>. 👋
            </p>
            <span className="text-rose-400 whitespace-nowrap text-xl font-light">
              Software developer
            </span>
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
    </Layout>
  );
}

export default Home;
