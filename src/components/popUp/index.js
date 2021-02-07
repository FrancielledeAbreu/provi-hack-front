import React from "react";
import { Container, Description } from "./style";
import { motion } from "framer-motion";

const PopUp = ({ object }) => {
  return (
    <Container>
      <h1>{object.name}</h1>
      {object.content.map((description, index) => (
        <motion.div whileTap={{ scale: 0.8 }}>
          <Description>{description}</Description>
        </motion.div>
      ))}
    </Container>
  );
};

export default PopUp;
