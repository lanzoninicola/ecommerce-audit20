import styled from "styled-components";

import { colorTheme } from "@colors/lib";

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-color: ${() => colorTheme("orange")};
  border-radius: 50%;
  background: none;
  height: ${({ h, height }) => {
    const _height = h || height;
    if (_height) return `${_height}px`;
  }};
  width: ${({ w, width }) => {
    const _width = w || width;
    if (_width) return `${_width}px`;
  }};
  margin-bottom: 4px;
`;

export default NumberWrapper;
