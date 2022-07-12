import { Link } from "react-router-dom";
import {
  HomeIcon,
  IdentificationIcon,
  BriefcaseIcon,
  SparklesIcon,
  DeviceMobileIcon,
} from "@heroicons/react/solid";

const links = [
  { link: "/", description: "Home", icon: <HomeIcon className="h-8" /> },
  {
    link: "/about",
    description: "About",
    icon: <IdentificationIcon className="h-8" />,
  },
  {
    link: "/work",
    description: "Work Experience",
    icon: <BriefcaseIcon className="h-8" />,
  },
  {
    link: "/skills",
    description: "Skills",
    icon: <SparklesIcon className="h-8" />,
  },
  {
    link: "/contact",
    description: "Contact",
    icon: <DeviceMobileIcon className="h-8" />,
  },
];

export default function Layout({ header, content }) {
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-900">
      <div className="col-span-2 pt-4 px-4">
        <div className="bg-gray-800 h-full rounded-xl grid grid-rows-6">
          <header className="row-span-1 flex flex-col items-left justify-center pl-4">
            {header}
          </header>
          <nav className="bg-gray-700 row-span-5 rounded-2xl shadow-2xl flex flex-col items-left pt-16 pl-8 text-slate-50">
            {links.map(({ link, description, icon }, index) => (
              <Link
                className="text-xl py-1 hover:text-rose-400 hover:animate-pulse"
                to={link}
                key={index}
              >
                <div className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span>{description}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <main class="col-span-10 overflow-auto">{content}</main>
    </div>
  );
}
