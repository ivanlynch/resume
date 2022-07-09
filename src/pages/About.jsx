import { MobileNavbarHeader, MobilePage } from "components";

function About() {
  return (
    <div className=" select-text">
      <MobileNavbarHeader title={"About"} subtitle={"Who am i?"} />
      <MobilePage>
        <p className="font-semibold text-4xl pb-4">Hello again! 🙋</p>
        <figcaption className="text-sm font-light">
          This is me at 8:00 am 2022/06/22 😄
        </figcaption>
        <picture>
          <source media="(min-width:640px)" srcSet={"./assets/img/ivan.png"} />
          <source media="(min-width:640px)" srcSet={"./assets/img/ivan.png"} />
          <img
            src={"./assets/img/ivan.png"}
            alt="Rombos"
            className="rounded-lg mt-2"
          />
        </picture>
        <br />
        <p>
          I am a passionate{" "}
          <span className="text-yellow-400 font-regular">developer</span> who's
          always learning new things to bring my best professional version to my
          clients. I enjoy collaborating with others and create nice things that
          make users and companies life easier.
        </p>
        <p>
          <br />I am currently working in a small company based in Argentina as
          a variety of roles from Software Architect to Lead a small team of
          developers and coding the rest of the time.
        </p>
        <br />
      </MobilePage>
    </div>
  );
}

export default About;
