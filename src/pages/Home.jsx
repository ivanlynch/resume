import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button, Page } from "components";
function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/assets/resumes/ivanlynch-en.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ivanlynch-en.pdf";
        alink.click();
      });
    });
  };

  return (
    <Page id={"home"}>
      <div className="w-full landscape:mb-12 mt-20 h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-12 md:gap-4 w-full">
          <p className="title whitespace-nowrap col-span-full row-start-1 row-end-2 md:col-span-7 md:col-start-1 md:col-end-12 text-center md:text-left">
            Hello! I'm<span className="ml-2 text-yellow-400">Iván</span>. 👋
          </p>
          <p className="text-xl row-start-2 row-end-3 text-center md:text-left text-rose-400 whitespace-nowrap col-span-full md:col-start-1 md:col-end-7 md:col-span-7">
            I build things writing code.
          </p>
          <p className="md:col-start-1 row-start-4 row-end-5 md:row-start-3 md:row-end-4 md:col-span-7 md:col-end-7 col-span-full w-full text-center md:text-left paragraph">
            I'm self taught developer, Enthusiast, Curious, Dad, Husband,
            Argentinian.
          </p>
          <p className="md:col-span-7 justify-self-center md:justify-self-start col-span-full md:col-start-1 md:row-start-4 mt-4 w-2/3">
            <Button
              icon={<ArrowDownTrayIcon height={"1.1rem"} />}
              text="Get my resume"
              onClick={onButtonClick}
              outlined={true}
              fontSize={`text-lg`}
            />
          </p>
          <div className="md:col-start-8  justify-center md:flex row-start-3 col-start col-span-full md:col-end-12 md:col-span-5 md:row-start-1 md:row-end-6 flex w-full">
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
