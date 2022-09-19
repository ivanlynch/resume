import { Text, Page, List } from "components";

function About() {
  return (
    <Page id={"about"}>
      <div className="h-screen flex flex-col justify-center items-start">
        <Text>
          Hey! I'm <b className="text-yellow-400">Iván Lynch</b>, an{" "}
          <b>Argentinian</b>
          <b className="text-yellow-400"> living in Brazil</b>.
        </Text>
        <Text>
          I work with software development since 2015, i worked in many
          different projects and fast forward to today{" "}
          <b className="text-yellow-400">
            i worked mostly creating web and mobile applications
          </b>{" "}
          for different public sizes
        </Text>
        <Text>
          Today i'm focusing on improve my skills to create better experiences
          and recently started writing things about technologies that will be
          published soon. <br />
          <br />
          I've recently been worked with:
        </Text>
        <List items={["React", "React Native", "Typescript", "Tailwind"]} />
      </div>
    </Page>
  );
}

export default About;
