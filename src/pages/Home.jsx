import { Avatar, Button, Tags } from "components";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="flex items-center justify-center h-[90%] w-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:flex-row md:gap-20 text-slate-50">
          <div className="flex flex-col gap-10 items-center md:items-start">
            <div>
              <p className="title">
                Hello! I'm <span className="text-yellow-400">Iván</span>. 👋
              </p>
              <span className="info text-rose-400 whitespace-nowrap">
                I build things on the internet
              </span>
            </div>
            <div className="hidden mt-2 md:flex items-center md:items-start flex-col">
              <p className="info">Currently working with:</p>
              <Tags
                tagColor={`bg-gray-800`}
                data={["React", "Tailwind", "GraphQL", "React-Native"]}
              />
            </div>
          </div>
          <div>
            <Avatar src={"./assets/images/sm-profile.png"} />
          </div>
        </div>
        <div className="text-slate-50 md:hidden flex mt-2 items-center md:items-start flex-col">
          <p>Currently working with:</p>
          <Tags
            tagColor={`bg-gray-600`}
            data={["React", "Tailwind", "GraphQL", "NodeJS"]}
          />
        </div>
        <div className="hidden w-1/2 md:flex mt-8 md:gap-2 md:items-center box-border">
          <Button
            icon={<ArrowDownTrayIcon height={18} width={18} />}
            text="Get my resume"
            outlined={true}
            fontSize={`text-xl`}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
