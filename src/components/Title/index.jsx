import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="ml-4">
      <h1 className="title">{title || "Title"}</h1>
      <p className="info text-rose-400">
        <em>{subtitle || "Subtitle"}</em>
      </p>
    </div>
  );
}
