import React from "react";

const Image = ({ src, alt }) => {
  return (
    <picture>
      <source media="(min-width:640px)" srcSet={src} />
      <img src={src} alt={alt} className="object-scale-down h-96" />
    </picture>
  );
};

export { Image as default };
