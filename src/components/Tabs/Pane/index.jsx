import React from "react";
import { Text, Title } from "components";
import { Size } from "constants";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Pane({
  company,
  roles,
  description,
  isActive,
  projects,
  technologies,
}) {
  if (!isActive) return;
  return (
    <article className="w-full pt-12 text-slate-50 transition-all duration-300">
      <Title size={Size.H1}>{company.toUpperCase()}</Title>
      <h2 className="text-left mb-6 text-yellow-400">{roles}</h2>
      <Text>{description}</Text>
      <Title size={Size.H2}>Some of the technologies used: </Title>
      <ul className="text-lg flex flex-wrap">
        {technologies.map((tech) => (
          <li className="flex items-center mt-2 gap-1 basis-1/2 text-slate-400">
            <ChevronRightIcon className="h-3 w-3 text-teal-400 stroke-[4]" />
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Pane;
