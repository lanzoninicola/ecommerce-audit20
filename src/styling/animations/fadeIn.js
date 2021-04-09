import * as React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ duration, children }) => {
  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <motion.div variants={reveal} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

FadeIn.defaultProps = {
  duration: 0.6,
};

export default FadeIn;
