import React from "react";

export default function Layout({ content }) {
  return (
    <div className="w-full h-full flex justify-center">
      <main className="overflow-auto bg-rose-400 w-[80%] h-full">
        {content}
      </main>
    </div>
  );
}
