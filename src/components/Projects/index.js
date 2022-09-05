import { Tags, Text, Title } from "components";
import { Size } from "constants";
import React, { useState } from "react";
import shortid from "shortid";

function Projects({ data }) {
  const [projects] = useState(data || []);

  return (
    <div className="w-full">
      {projects.map(
        (
          { title, description, technologies, from, to, technical_description },
          index
        ) => (
          <details className="collapse" key={shortid()}>
            <summary>{title}</summary>
            <Text>{description}</Text>
            <Title text={`Technologies used`} />
            <Tags data={technologies} color="bg-lime-800" />
            <Title size={Size.H2}>{`Tasks i did`}</Title>
            <Text>{technical_description}</Text>
          </details>
        )
      )}
    </div>
  );
}

export default Projects;
