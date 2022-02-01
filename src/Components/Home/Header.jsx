import * as React from "react";
//Hook Import
import { useGsapToggle } from "../../Hooks/useGsapToggle";
//Components Import
import { Colunn, FullScreenContainer, Row } from "../../Components/Container";
import { H1 } from "../../Components/Text";

function Header() {
  const { current: rota360 } = React.useRef({
    scale: 1.5,
    rotation: 360,
    duration: 1,
  });
  const [ref, animate] = useGsapToggle(rota360);

  return (
    <FullScreenContainer className="header">
      <Colunn style={{ backgroundColor: "green", height: "100vh" }}>
        <Row center>
          <H1
            text="Hello Word !"
            style={{ backgroundColor: "red", marginTop: "20vh" }}
            ref={ref}
            onClick={animate}
          />
        </Row>
      </Colunn>
    </FullScreenContainer>
  );
}

export default Header;
