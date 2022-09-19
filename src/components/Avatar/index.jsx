import React from "react";

function index({ src }) {
  return (
    <picture className="profile">
      <source media="(min-width:640px)" srcSet={src} />
      <img src={src} alt="Rombos" />
    </picture>
  );
}

export default index;
