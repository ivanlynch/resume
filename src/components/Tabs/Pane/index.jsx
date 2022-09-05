import React from "react";
import { Projects, Text, Title } from "components";
import { Size } from "constants";

function Pane({ company, roles, description, isActive, projects }) {
  if (!isActive) return;
  return (
    <article className="w-full pt-12 text-slate-50">
      <Title size={Size.H1}>{company.toUpperCase()}</Title>
      <h2 className="text-left mb-6 text-yellow-400">{roles}</h2>
      <Text text={description} />
      <section>
        <Title size={Size.H2}>Projects</Title>
        <Projects data={projects} />
      </section>
    </article>
  );
}

export default Pane;
