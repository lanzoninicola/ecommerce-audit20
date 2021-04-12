import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Title, Text } from "@typography";
import { FlexContainer } from "@layouts";
import { colorTheme } from "@colors/lib";
import { useViewportInfo } from "@hooks";

const DotSeparators = styled.div`
  border: none;
  border-radius: 50%;
  background: ${() => colorTheme("orange")};
  height: 5px;
  width: 5px;
  margin-top: 4px;
`;

const items = [
  "ver a página inicial",
  1,
  1,
  1,
  "buscar o produto",
  1,
  1,
  1,
  "abrir a página de categoria de produto",
  1,
  1,
  1,
  "ver a lista de produtos de uma categoria",
  1,
  1,
  1,
  "abrir a página de detalhes de produto",
  1,
  1,
  1,
  "additionar o produto no carrinho",
  1,
  1,
  1,
  "confirmar a compra",
  1,
  1,
  1,
  "rastreamento e métricas",
  1,
  1,
  1,
  "legal",
];

const CustomerJourney = () => {
  const { width } = useViewportInfo();

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <FlexContainer column centerY centerX pl="32" pr="32" w={width}>
      <Title as="h3" weight="600" center>
        Representação do
      </Title>
      <Title as="h3" mb="16" weight="600" center>
        Caminho do cliente
      </Title>
      {items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {typeof item === "string" ? (
            <Text size={{ mobile: 16 }} center weight="400" mt="4" mb="4">
              {item}
            </Text>
          ) : (
            <DotSeparators key={i} />
          )}
        </motion.div>
      ))}
    </FlexContainer>
  );
};

export default CustomerJourney;
