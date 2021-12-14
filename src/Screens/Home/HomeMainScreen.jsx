import * as React from "react";

//Components Import
import { Center, FullScreenContainer } from "../../Components/Container";

import NavBar from "../../Components/NavBar";
import Header from "../../Components/Home/Header";
import Displayer from "../../Components/Home/Displayer";
//Constants Import
import { colors } from "../../constants/colors";

function HomeMainScreen() {
  console.log(colors.green);
  return (
    <FullScreenContainer>
      <NavBar />

      <Center>
        <Header />
      </Center>

      <Center>
        <Displayer />
      </Center>
    </FullScreenContainer>
  );
}

export default HomeMainScreen;
