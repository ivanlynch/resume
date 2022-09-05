import { Size } from "constants";
import React from "react";

const Title = ({ children, size }) => {
  if (size === Size.H1) {
    return <h1 className="text-2xl py-2">{children}</h1>;
  }

  if (size === Size.H2) {
    return <h2 className="text-xl py-2">{children}</h2>;
  }
};

export { Title as default };
