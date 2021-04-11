import * as React from "react";
import PropTypes from "prop-types";

import { WebsiteLayout } from "../styling/layouts/templates/index";
import DataProvider from "../data/DataProvider";

// import DOMViewportInfo from "@layouts/lib"

const Layout = ({ children }) => {
  return (
    <WebsiteLayout>
      <DataProvider>{children}</DataProvider>
    </WebsiteLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
