import { Tags, Text } from "components";
import { shortDate } from "helpers";
import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Title from "./Title";

function Projects({ data }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data || []);
  }, [data]);

  return (
    <div className="text-left">
      {projects.map(
        (
          { title, description, technologies, from, to, technical_description },
          index
        ) => (
          <div key={shortid.generate()}>
            <Title text={title} from={from} to={to} />
            <Text text={description} />
            <Title text={`Technologies used`} />
            <Tags data={technologies} color="bg-lime-800" />
            <Title text={`Tasks i did`} />
            <Text text={technical_description} />
          </div>
        )
      )}
    </div>
  );
}

export default Projects;
