import React from "react";
import { Title, List } from "components";
import { Size } from "constants";

function Pane({ company, roles, description, isActive, technologies }) {
  if (!isActive) return;
  return (
    <article className="w-full pt-12 text-slate-50 transition-all duration-300">
      <Title size={Size.H1}>{company.toUpperCase()}</Title>
      <h2 className="text-left mb-6 text-yellow-400">{roles}</h2>
      <p className="paragraph mb-4">{description}</p>
      <Title size={Size.H2}>Some of the technologies used: </Title>
      <List items={technologies} />
    </article>
  );
}

export default Pane;
