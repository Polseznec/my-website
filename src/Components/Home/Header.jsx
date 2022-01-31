import * as React from "react";

//Components Import
import { Colunn, FullScreenContainer, Row } from "../../Components/Container";
import { H1, H2, H3 } from "../../Components/Text";
//Assets Import

function Header() {
  return (
    <FullScreenContainer>
      <Colunn className="header">
        <Row>
          <H1 text="Pol" />
        </Row>
      </Colunn>
    </FullScreenContainer>
  );
}

export default Header;
