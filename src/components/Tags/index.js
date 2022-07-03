import React, { useEffect, useState } from "react";
import shortid from "shortid";

function Tags({ data, color }) {
  const [tags, setTags] = useState([]);
  const [tagsColor, setTagsColor] = useState("");

  useEffect(() => {
    setTags(data || []);
    setTagsColor(color || "teal");
  }, [data, color]);

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <div
          className={`px-2 m-2 ${color ? color : "bg-teal-400"} rounded`}
          key={shortid.generate()}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
