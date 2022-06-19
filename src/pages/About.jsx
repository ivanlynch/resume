import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-900 select-text">
      <div className="sticky top-0 bg-gray-900 z-40 shadow-md">
        <h1 className="text-4xl text-slate-50 px-4 pt-4">About</h1>
        <h1 className="text-1xl px-4 text-rose-400 italic pb-4">Who am i?</h1>
      </div>
      <div className="bg-gray-800 pt-4 px-4 text-left text-2xl font-light text-slate-50 opacity-90 scroll-smooth">
      <Link to='/skills'>Here</Link>
        <p>
          I am <b>Iván Lynch</b> an Argentinian 🇦🇷 living in{" "}
          <span className="whitespace-nowrap">Brazil 🇧🇷</span>. Since beginning
          my journey as a freelance nearly 8 years ago, i have worked in many
          different projects as a variety of roles, Frontend Developer,
          Fullstack Developer, Mobile Developer, Software Architect. you can
          check more 
        </p>
        {}
        <br />
        <p>In my career i done all the projects successfull</p>
        <br />
        I'm always learning or researching new things. This year i started to
        create my own course about javascript that will be released to the end
        of the year.
        <br />
        I'm always learning or researching new things. This year i started to
        create my own course about javascript that will be released to the end
        of the year.
        <br />
        I'm always learning or researching new things. This year i started to
        create my own course about javascript that will be released to the end
        of the year.
        <br />
        I'm always learning or researching new things. This year i started to
        create my own course about javascript that will be released to the end
        of the year.
        <br />
        I'm always learning or researching new things. This year i started to
        create my own course about javascript that will be released to the end
        of the year.
      </div>
    </div>
  );
}

export default About;
