import * as React from "react";
import { gsap } from "gsap";

//Components Import
import { Colunn, FullScreenContainer, Row } from "../../Components/Container";
import { H1 } from "../../Components/Text";
//Assets Import

function Header() {
  const [toggel, setToggel] = React.useState(false);

  const changeState = () => {
    setToggel(!toggel);
  };
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    toggel
      ? gsap.to(cardRef.current, { scale: 1.5, rotate: 360, duration: 1.2 })
      : gsap.to(cardRef.current, { scale: 1, rotate: 0, duration: 1.2 });
  }, [toggel]);

  return (
    <FullScreenContainer className="header">
      <Colunn>
        <Row>
          <H1 text="Pute" onClick={changeState} ref={cardRef} />
        </Row>
      </Colunn>
    </FullScreenContainer>
  );
}

export default Header;
