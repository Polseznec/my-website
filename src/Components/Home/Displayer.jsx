import * as React from "react";

//Components Import
import {
  Center,
  Colunn,
  FullScreenContainer,
} from "../../Components/Container";
import { H1 } from "../../Components/Text";
import { Article } from "../Bloc";
//Assets Import
import ARTICLES from "../../constants/data/articles";

function Displayer() {
  return (
    <FullScreenContainer className="greenBg">
      <Center>
        <Colunn>
          <H1 text="Displayer"></H1>
          <Center>
            <Article />
          </Center>
        </Colunn>
      </Center>
    </FullScreenContainer>
  );
}

export default Displayer;
