import * as React from "react";
import { motion } from "framer-motion";

import { FlexContainer } from "@layouts";
import { SVGIcon } from "@icons";
import { Bouncer } from "@animations";

const NextArrow = () => {
  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <FlexContainer row h100 centerY centerX>
      <motion.div variants={reveal} initial="hidden" animate="visible">
        <Bouncer startX="0" endX="0.5" duration="1">
          <SVGIcon name="ARROW_RIGHT" size="24" color="white" />
        </Bouncer>
      </motion.div>
    </FlexContainer>
  );
};

export default NextArrow;
