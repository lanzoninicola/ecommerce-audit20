import * as React from "react";
import { SmallText } from "@typography";
import { FlexContainer } from "@layouts";

const Header = () => {
  return (
    <FlexContainer columns pl="32" pr="32" pt="16" pb="32">
      <SmallText color="black">Auditoria de site</SmallText>
    </FlexContainer>
  );
};

export default Header;
