import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Title, Text, SmallText } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { colorTheme } from "@colors/lib";

import NumberWrapper from "../ui/NumberWrapper/NumberWrapper";

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
];

const CustomerJourney = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  let itemCounter = 1;

  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <Title as="h3" weight="600" center>
        Representação do
      </Title>
      <Title as="h3" mb="16" weight="600" center color="orange">
        Jornada do Cliente
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
            <FlexContainer column centerX centerY mt="8">
              <NumberWrapper w="25" h="25">
                <SmallText weight="600" color="orange" center>
                  {itemCounter++}
                </SmallText>
              </NumberWrapper>
              <Text size={{ mobile: 16 }} center weight="400" mb="8">
                {item}
              </Text>
            </FlexContainer>
          ) : (
            <DotSeparators key={i} />
          )}
        </motion.div>
      ))}
    </FlexContainer>
  );
};

export default CustomerJourney;
