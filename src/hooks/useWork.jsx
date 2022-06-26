import { useState } from "react";
import { work } from "assets";

export const useWork = () => {
  const [workExperience] = useState(work);

  return workExperience;
};
