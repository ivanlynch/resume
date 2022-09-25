import React from "react";

function CardButton({ onClick, icon, text, disabled }) {
  return (
    <div
      disabled={disabled}
      className={`h-full w-full bg-gradient-to-r hover:cursor-pointer rounded-lg from-rose-400 p-1 to-yellow-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
        disabled ? "opacity-50" : ""
      }`}
      onClick={!disabled ? onClick : null}
    >
      <div className="h-full w-full hover:bg-slate-800 bg-slate-900 rounded-lg grid grid-rows-4 items-center justify-center">
        <div className="row-span-3">{icon}</div>
        <div className="row-span-1 flex justify-center text-xl">{text}</div>
      </div>
    </div>
  );
}

export default CardButton;
