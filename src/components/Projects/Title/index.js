import React from "react";
import { shortDate } from "helpers";

function Title({ text, from, to }) {
  return (
    <h1 className="text-lg py-2">
      {text}{" "}
      {from && to && (
        <p className="italic capitalize">
          {shortDate(from)} - {shortDate(to)}
        </p>
      )}
    </h1>
  );
}

export default Title;
