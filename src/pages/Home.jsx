import { Avatar, Button, Page, List, Text } from "components";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <Page id={"home"}>
      <div className="screen-container pt-16 mt-[-40] w-full ">
        <div className="flex flex-col md:flex-row md:gap-20 w-full justify-center items-center  text-slate-50">
          <div className="flex flex-col gap-2 sm:gap-10 items-start w-full">
            <div>
              <p className="title whitespace-nowrap w-full ">
                Hello! I'm <span className="text-yellow-400">Iván</span>. 👋
              </p>
              <span className="info text-rose-400 whitespace-nowrap">
                I build things writing code.
              </span>
            </div>
            <div className="w-full flex justify-start sm:hidden">
              <Avatar src={"./assets/images/sm-profile.png"} />
            </div>
            <Text>
              I'm a Developer, Enthusiast, Curious, Dad, Self taught,
              Argentinian.
            </Text>
            <div className="w-full portrait:hidden hidden sm:block">
              <Button
                icon={<ArrowDownTrayIcon height={18} width={18} />}
                text="Get my resume"
                outlined={true}
                fontSize={`text-xl`}
              />
            </div>
          </div>
          <div className="w-full hidden sm:block">
            <Avatar src={"./assets/images/sm-profile.png"} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
