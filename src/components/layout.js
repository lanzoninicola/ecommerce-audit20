import * as React from "react";
import PropTypes from "prop-types";

import RoutingContext from "../components/Routing/context/RoutingContext";

import { SizedBox, FlexContainer } from "@layouts";
import { SmallText } from "@typography";

import { WebsiteLayout } from "../styling/layouts/templates/index";

import PrevButton from "../components/ui/PrevButton/PrevButton";
import NextButton from "../components/ui/NextButton/NextButton";

// import DOMViewportInfo from "@layouts/lib"

const Layout = ({ children }) => {
  const routingContext = React.useContext(RoutingContext);

  console.log(routingContext.currentPage);
  return (
    <WebsiteLayout>
      <FlexContainer row pl="32" pr="32" pb="32" pt="32" stretchXL>
        <SizedBox>
          <SmallText color="black">Auditoria de site</SmallText>
        </SizedBox>
        <FlexContainer row>
          <PrevButton prevPage={routingContext.prevPage} />
          <SizedBox w="16" />
          <NextButton nextPage={routingContext.nextPage} />
        </FlexContainer>
      </FlexContainer>

      {children}
    </WebsiteLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
