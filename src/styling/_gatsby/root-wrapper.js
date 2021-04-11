import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { GlobalStyle, theme } from "@theme";
import { ViewportProvider } from "@layouts";
import { ModalProvider } from "@overlays";
import DataProvider from "../../data/DataProvider";

// this is a gatsby function and not a React component
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
// it used to wrap the gatsby root React Element
const wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet></Helmet>
        <ViewportProvider>
          <DataProvider>
            <ModalProvider>{element}</ModalProvider>
          </DataProvider>
        </ViewportProvider>
      </ThemeProvider>
    </>
  );
};

export default wrapRootElement;
