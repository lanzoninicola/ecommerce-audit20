import styled from "styled-components";
import { Size } from "@layouts";

import { colorTheme } from "@colors/lib";

const NumberWrapper = styled.div`
  ${Size}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-color: ${() => colorTheme("orange")};
  border-radius: 50%;
  background: none;
  margin-bottom: 4px;
`;

export default NumberWrapper;
