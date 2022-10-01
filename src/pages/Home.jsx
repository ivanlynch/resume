import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button, Page } from "components";
function Home() {
  const onButtonClick = () => {
    fetch("/assets/resumes/ivanlynch-en.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ivanlynch-en.pdf";
        alink.click();
      });
    });
  };

  return (
    <Page id={"home"}>
      <div className="h-screen w-full landscape:mb-12 flex flex-col justify-center items-center">
        <div className="flex p-12 md:p-0 w-full md:w-[90%] md:h-[50%] justify-center items-center overflow-hidden gap-y-4 flex-col landscape:flex-wrap md:flex-wrap">
          <div className="md:w-[49%] landscape:w-[49%] order-1">
            <p className="title whitespace-nowrap md:text-left">
              Hello! I'm<span className="ml-2 text-yellow-400">Iván</span>. 👋
            </p>
            <p className="text-xl text-center md:text-left text-rose-400 whitespace-nowrap">
              I build things writing code.
            </p>
          </div>
          <p className="md:w-[49%] landscape:w-[49%] w-full order-2 text-center md:text-left paragraph">
            I'm self taught developer, Enthusiast, Curious, Dad, Husband,
            Argentinian.
          </p>
          <p className="md:w-[49%] landscape:w-[49%] w-full order-4 landscape:order-3 md:order-3 mt-4">
            <Button
              icon={<ArrowDownTrayIcon height={"1.1rem"} />}
              text="Get my resume"
              onClick={onButtonClick}
              outlined={true}
              fontSize={`text-lg`}
            />
          </p>
          <div className="md:w-[30%] landscape:w-[40%] order-3 landscape:order-3 md:order-4">
            <picture>
              <source
                media="(min-width:640px)"
                srcSet="./assets/images/profile-640.png"
              />
              <source
                media="(min-width:768px)"
                srcSet="./assets/images/profile-947.png"
              />
              <source
                media="(min-width:1024px)"
                srcSet="./assets/images/profile-1169.png"
              />
              <source
                media="(min-width:1280px)"
                srcSet="./assets/images/profile-1383.png"
              />
              <source
                media="(min-width:1536px)"
                srcSet="./assets/images/profile-1536.png"
              />
              <img
                className="rounded-full border-8 border-slate-800 my-8"
                src="./assets/images/profile-1169.png"
                alt="Me"
              />
            </picture>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
