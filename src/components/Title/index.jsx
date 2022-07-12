import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <>
      <h1 className="text-4xl text-slate-50 px-4 pt-4">{title || "Title"}</h1>
      <h2 className="text-1xl px-4 text-red-400 italic pb-4">
        {subtitle || "Subtitle"}
      </h2>
    </>
  );
}
