import * as React from "react";

//Components Imported
import { Center, FullScreenContainer } from "../../Components/Container";
import { H1, H2, Body } from "../../Components/Text";
//import Color
import { colors } from "../../constants/colors";

function HomeMainScreen() {
  console.log(colors.green);
  return (
    <FullScreenContainer>
      <Center>
        <H1 text="Hello" />
        <H2 text="loren" className="lightRed" />
        <Body text="FHvfzevgaihmvvikzhgi"></Body>
      </Center>
    </FullScreenContainer>
  );
}

export default HomeMainScreen;
