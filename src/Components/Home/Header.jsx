import * as React from "react";

//Components Import
import {
  Center,
  Colunn,
  FullScreenContainer,
} from "../../Components/Container";
import { H1 } from "../../Components/Text";
//Assets Import
import gribouillage from "../../assets/svg/gribouillage-large.svg";

function Header() {
  return (
    <FullScreenContainer className="greenBg">
      <Center className="header">
        <Colunn className="right">
          <H1 text="Pol" />
          <H1 text="Seznec" />
        </Colunn>
        <Colunn className="left">
          <img
            src={gribouillage}
            alt="gros gribouillage"
            className="gribouillage"
          />
          <img
            src={gribouillage}
            alt="gros gribouillage"
            className="gribouillage filter-lowRed"
          />
          <img
            src={gribouillage}
            alt="gros gribouillage"
            className="gribouillage filter-lowYellowBg"
          />
        </Colunn>
      </Center>
    </FullScreenContainer>
  );
}

export default Header;
