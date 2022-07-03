import React from "react";
import { Tags, Projects, Text } from "components";

function Pane({
  company,
  roles,
  description,
  isActive,
  technologies,
  projects,
}) {
  if (!isActive) return;
  return (
    <article className="w-full py-4 text-slate-50">
      <h1 className="text-2xl text-left text-slate-50">
        {company.toUpperCase()}
      </h1>
      <h2 className="text-left mb-6 text-yellow-400">{roles}</h2>
      <Text text={description} />
      <section>
        <h1 className="text-xl text-left py-2">Technologies i've used</h1>
        <div className="flex flex-wrap">
          <Tags data={technologies} color="bg-indigo-800" />
        </div>
      </section>
      <section>
        <h1 className="text-xl text-left my-2">Projects</h1>
        <Projects data={projects} />
      </section>
    </article>
  );
}

export default Pane;
