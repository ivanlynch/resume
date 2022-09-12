import React from "react";

function CardButton({ onClick, icon, text }) {
  return (
    <div
      className="h-full w-full bg-gradient-to-r hover:cursor-pointer rounded-lg from-rose-400 p-1 to-yellow-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="h-full w-full hover:bg-slate-800 bg-slate-900 rounded-lg grid grid-rows-4 items-center justify-center">
        <div className="row-span-3">{icon}</div>
        <div className="row-span-1 flex justify-center text-xl">{text}</div>
      </div>
    </div>
  );
}

export default CardButton;
