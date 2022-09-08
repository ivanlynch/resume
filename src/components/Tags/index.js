import React, { useMemo } from "react";
import { nanoid } from "nanoid";

function Tags({ data, tagColor, textColor = "text-white-100" }) {
  const tagsColor = useMemo(() => {
    return tagColor || "bg-teal-400";
  }, [tagColor]);

  const tags = useMemo(() => {
    return data || [];
  }, [data]);

  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <div
          className={`${
            index !== 0 ? "px-2 m-2" : "px-2 m-2 ml-0"
          } ${tagsColor} ${textColor} rounded`}
          key={nanoid()}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
