import { Title, Text, Image } from "components";
import { Size } from "constants";
import { Holidays } from "images";

function About() {
  return (
    <div className="h-full">
      <Title size={Size.H1}>TL;DR</Title>
      <Text>
        I'm an Argentinian software developer, currently living in Brazil and
        working as{" "}
        <b className="text-yellow-400">
          Fullstack Developer with React, React-Native and NodeJS
        </b>{" "}
        at Sales Journey a SaaS Lead-to-Cash platform and writing things that
        aren't published yet.
      </Text>
      <Title size={Size.H1}>About</Title>
      <Image src={Holidays} alt={"jeriquacuara"} />
      <Text>
        Hey! I'm <b className="text-yellow-400">Iván Lynch</b>, i born in{" "}
        <b>Buenos Aires, Argentina</b>. the country of the{" "}
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Tango"
        >
          Tango,
        </a>{" "}
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Asado"
        >
          Asado
        </a>{" "}
        and{" "}
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Mate_(drink)"
        >
          Mate
        </a>
        . I'm 31 years old and{" "}
        <b className="text-yellow-400">i'm currently living in Brazil</b>.
      </Text>
      <Title size={Size.H2}>How it started</Title>
      <Text>
        I was always curious about practically everything. It started as a kid
        disassembling things and trying to create new ones. At the age of 8 I
        moved the focus to my first computer, which I broke many times just
        trying to improve. As a teenager, I started learning basic programming
        skills. Closely to the 20's i got my firsts small jobs as a developer
        and at the age of 23 finally got my first experience in a startup where
        I was so excited to learn more and work with experienced people.
      </Text>
      <Title size={Size.H2}>Inflection point</Title>
      <Text>
        Years later, after working on many projects without focusing on a role
        and doing a lot of things, i was a bit lost on what to do, then decided
        to take a breath and focus on what i really enjoy to do then{" "}
        <b className="text-yellow-400 font-normal">
          i focused my career on Web and Mobile development
        </b>
        .
      </Text>

      <Title size={Size.H2}>BREAKING CHANGES</Title>
      <Text>
        In 2018 i traveled to Sao Paulo, Brazil, for a project where it was a
        life changer for me. I meet my wife, I learned a new language, I got a
        job where i meet amazing people and I started to learn a lot about his
        culture. At the begining of 2020 I moved to Brazil to start a new life
        with my wife.
      </Text>

      <Title size={Size.H2}>What i'm doing now</Title>
      <Text>
        Recently i started writing notes where i expect to start publishing to
        share my knowledge and experience this year. I'm currently working with
        Javascript and React ecosystem. I'm doing some researchs about UX/UI and
        learning things about design.
      </Text>
      <br />
      <br />
    </div>
  );
}

export default About;
