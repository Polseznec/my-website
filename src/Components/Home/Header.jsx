import * as React from "react";
// import { gsap } from "gsap";

//Components Import
import { FullScreenContainer } from "../../Components/Container";

//Assets Import

function Header() {
  // const [toggel, setToggel] = React.useState(true);

  // const changeState = () => {
  //   setToggel(!toggel);
  // };
  // const cardRef = React.useRef(null);

  // // React.useEffect(() => {
  // //   toggel
  // //     ? gsap.to(cardRef.current, {
  // //         duration: 1.2,
  // //         x: 0,
  // //         scale: 2,
  // //       })
  // //     : gsap.to(cardRef.current, { scale: 1, duration: 1.2, x: 0 });
  // // }, [toggel]);

  return <FullScreenContainer className="header"></FullScreenContainer>;
}

export default Header;
