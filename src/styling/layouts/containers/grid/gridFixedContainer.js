import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Grid from "./grid";

import { parseGridTemplateValues } from "@layouts/lib/index";
import {
  isUndefined,
  isNotString,
  isNotUndefined,
  isObject,
  warn,
  error,
} from "@utils/index";
import { useViewportInfo } from "@hooks";

/**
 *  GridFixedContainer options:
 *
 *  1- No "columns" prop: the grid respond according the viewport and will be responsive on specific breackpoint
 *  2- Columns declaration: let you define how many columns the grid will have
 *
 */

export const GridFixedBaseContainer = styled(motion.div)`
  ${Grid}
  grid-template-columns: ${({ columns, cAuto }) => {
    const { device } = useViewportInfo();

    if (!cAuto && isUndefined(columns)) {
      error(
        `GridFixedBaseContainer`,
        `"columns" prop is missing: ${typeof columns}. You must passing the "columns" prop in a "Fixed Grid Container"`
      );
      return;
    }

    if (cAuto && columns) {
      warn(
        "GridFixedBaseContainer",
        `You have passed "columns" prop with "cAuto / grid-auto-columns" prop. "columns" prop will be ignored`
      );
      return null;
    }

    if (!cAuto && isNotString(columns) && !isObject(columns)) {
      error(
        `GridFixedBaseContainer`,
        `"columns" prop must be a string, instead: "${typeof columns}"`
      );
      return;
    }

    if (typeof columns === "object" && isNotUndefined(columns[device])) {
      columns = columns[device];
    }

    return parseGridTemplateValues(columns);
  }};
  grid-template-rows: ${({ rows, rAuto }) => {
    const { device } = useViewportInfo();

    if (!rAuto && isUndefined(rows)) {
      error(
        `GridFixedBaseContainer`,
        `"rows" prop is missing: ${typeof rows}. You must passing the "rows" prop in a "Fixed Grid Container"`
      );
      return;
    }

    if (rAuto && rows) {
      warn(
        "GridFixedBaseContainer",
        `You have passed "rows" prop with "rAuto / grid-auto-rows". "rows" prop will be ignored`
      );
      return null;
    }

    if (!rAuto && isNotString(rows)) {
      error(
        `GridFixedBaseContainer`,
        `"rows" prop must be a string, instead: "${typeof rows}"`
      );
      return null;
    }

    if (typeof rows === "object" && isNotUndefined(rows[device])) {
      rows = rows[device];
    }

    return parseGridTemplateValues(rows);
  }}};
  grid-auto-rows: ${({ rAuto }) => {
    if (rAuto) return `minmax(min-content, max-content)`;
    return null;
  }};
  grid-auto-columns: ${({ cAuto }) => {
    if (cAuto) return `minmax(min-content, max-content)`;
    return null;
  }};

  ${(props) => props.$style ?? {}}
`;

export const GridFixedContainer = ({ children, ...props }) => {
  return <GridFixedBaseContainer {...props}>{children}</GridFixedBaseContainer>;
};
