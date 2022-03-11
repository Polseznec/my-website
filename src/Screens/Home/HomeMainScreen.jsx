import * as React from "react";

//Components Import
import { Background } from "../../Components/Background";
import { Frame } from "../../Components/Frame";
import {
  PageContainer,
  SectionContainer,
  SubSectionContainer,
} from "../../Components/Container";
import Header from "../../Components/Home/Header";
import ArticlesSection from "../../Components/Home/ArticlesSection";

//Constants Import
//import { colors } from "../../constants/colors";

function HomeMainScreen() {
  const [click, setClick] = React.useState(false);

  console.log(click);
  // console.log(colors.lightColor, colors.strongColor);
  return (
    <PageContainer>
      <Frame />
      <Background />
      <SectionContainer
        style={{ padding: "5vh 5vw 10vh 5vw", position: "relative" }}
      >
        <SubSectionContainer>
          <Header />
        </SubSectionContainer>

        <SubSectionContainer
          style={{
            minHeight: "calc(90vh - 2px)",
            width: "calc(90vw - 2px)",
            margin: "1px 1px 0px 1px",
          }}
        >
          <ArticlesSection />
        </SubSectionContainer>

        <SubSectionContainer
          style={{
            minHeight: "calc(90vh - 2px)",
            width: "calc(90vw - 2px)",
            margin: "1px 1px 0px 1px",
          }}
        >
          hello
          <br />
          <button onClick={() => setClick(!click)}>click</button>
        </SubSectionContainer>
      </SectionContainer>
    </PageContainer>
  );
}

export default HomeMainScreen;
