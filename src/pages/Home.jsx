import { Layout } from "components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col">
          <div className="flex flex-col items-center md:flex-row md:gap-20 text-slate-50">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl">
                Hello! I'm <span className="text-yellow-400">Iván</span>. 👋
              </p>
              <span className="text-xl font-light text-rose-400 whitespace-nowrap">
                Software developer
              </span>
            </div>
            <picture className="profile">
              <source
                media="(min-width:640px)"
                srcSet={"./assets/img/sm-profile.png"}
              />
              <img src={"./assets/img/sm-profile.png"} alt="Rombos" />
            </picture>
          </div>
          <div className="hidden md:block ">
            <ul className="flex font-medium cursor-pointer gap-10 text-slate-50">
              <Link className="hover:bg-rose-400" to={"/about"}>
                About
              </Link>
              <Link to={"/skills"} className="hover:bg-rose-400">
                Skills
              </Link>
              <Link to={"/work"} className="hover:bg-rose-400">
                Work
              </Link>
              <Link to={"/contact"} className="hover:bg-rose-400">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
