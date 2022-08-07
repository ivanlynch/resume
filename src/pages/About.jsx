import { Title, Page } from "components";
import { useDevice } from "hooks";

function About() {
  const { isMobile } = useDevice();

  return (
    <Page
      isMobile={isMobile}
      header={
        <Title isMobile={isMobile} title={"About"} subtitle={"Who am i?"} />
      }
      content={
        <div className="h-full">
          <span className="mb-2 text-sm leading-6 font-semibold text-rose-400">About</span>
          <p className="title">A little bit of me</p>


          <br />
          <p className="prose-slate text-slate-400">
            I was always curious about practically everything. It started as a kid disassembling toys with batteries and engines, trying to create new things with his parts. Some years after, I moved the focus to my first computer, which I broke many times just trying to improve. As a teenager, I started learning basic programming skills in books when the Internet was expensive (dial-up connection). Some years after working as a freelancer finally got my first experience in a startup at the age of 23, where I was so excited to learn more and work with experienced people.
          </p>
          <p>
            <br />Years later, after working on many projects without focusing on a role and doing many things, I took a breath to focus my career on Mobile and Web development.

          </p>
          <br />
          <p>In 2018 i traveled to Sao Paulo, Brazil, for a project where it was a life changer for me</p>
          <div className="rounded-full mt-2 object-fill object-center">
            <picture>
              <source
                media="(min-width:640px)"
                srcSet={"./assets/img/ivan.png"}
              />
              <img
                src={"./assets/img/ivan.png"}
                alt="Rombos"
                className="object-fill h-96"
              />
            </picture>
          </div>
        </div>
      }
    ></Page>
  );
}

export default About;
