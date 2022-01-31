import * as React from "react";

//Components Import
import { PageContainer, SectionContainer } from "../../Components/Container";

import Header from "../../Components/Home/Header";
import Displayer from "../../Components/Home/Displayer";
//Constants Import
import { colors } from "../../constants/colors";

function HomeMainScreen() {
  console.log(colors.green);
  return (
    <PageContainer>
      <SectionContainer>
        <Header />
      </SectionContainer>

      <SectionContainer>
        <Displayer />
      </SectionContainer>
    </PageContainer>
  );
}

export default HomeMainScreen;
