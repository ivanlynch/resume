import React, { useState } from "react";
import { Tags, Text, Title } from "components";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Projects({ data }) {
  const [projects] = useState(data || []);

  return (
    <div className="w-full pt-4">
      {projects.map(
        (
          { title, description, technologies, from, to, technical_description },
          index
        ) => (
          <details className="h-full">
            <summary className="h-10 flex items-center list-none pl-4 border border-slate-700">
              {title}
              <div className="mx-4 ml-auto">
                <ChevronDownIcon className="h-4 w-4 text-rose-400 stroke-[3]" />
              </div>
            </summary>
            <div className="w-full p-4">
              <Text>{description}</Text>
              <Title text={`Technologies used`} />
              <Tags data={technologies} color="bg-lime-800" />
              <Text>{technical_description}</Text>
            </div>
          </details>
        )
      )}
    </div>
  );
}

export default Projects;
