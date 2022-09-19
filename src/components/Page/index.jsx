import { motion } from "framer-motion";
import React from "react";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

function Page({ children, id, className }) {
  return (
    <motion.div
      id={id}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className="px-6 md:px-0"
    >
      {children}
    </motion.div>
  );
}

export default Page;
