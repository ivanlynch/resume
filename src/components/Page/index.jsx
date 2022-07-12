import { Layout } from "components";
import React from "react";

function index({ isMobile, header, content }) {
  if (isMobile) {
    return (
      <div className="bg-gray-900">
        <header className="fixed bg-gray-900 h-24 top-0 left-0 right-0 z-10 shadow-md overflow-hidden">
          {header}
        </header>
        <main className="mt-24 p-4">{content}</main>
      </div>
    );
  }

  return (
    <Layout
      header={header}
      content={
        <div className="bg-gray-900 pt-4 px-4 text-left text-2xl font-light text-slate-50 opacity-90 scroll-smooth">
          <main className="bg-gray-800 p-16 rounded-2xl">{content}</main>
        </div>
      }
    />
  );
}

export default index;
