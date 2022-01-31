import * as React from "react";

//Components Import
import { Colunn, FullScreenContainer, Row } from "../../Components/Container";
import { H1, H2 } from "../../Components/Text";
//Assets Import

function Header() {
  return (
    <FullScreenContainer>
      <Colunn className="header">
        <Row>
          <H1 text="Pol" />
          <H1 text="Seznec" />
          <H2 text="lorems in supm" />
        </Row>
      </Colunn>
    </FullScreenContainer>
  );
}

export default Header;
