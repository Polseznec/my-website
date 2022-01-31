import * as React from "react";

//Components Import
import { Colunn, FullScreenContainer, Row } from "../../Components/Container";
import { H1 } from "../../Components/Text";
//Assets Import

function Header() {
  return (
    <FullScreenContainer className="header">
      <Colunn>
        <Row>
          <H1 text="Pute" />
        </Row>
      </Colunn>
    </FullScreenContainer>
  );
}

export default Header;
