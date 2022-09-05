import React from "react";

const Text = ({ children }) => {
  return <p className="prose-slate text-lg text-slate-400 mb-8">{children}</p>;
};

export { Text as default };
