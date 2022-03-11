import * as React from "react";
// import { gsap } from "gsap";

//Components Import
//import { Colunn, FullScreenContainer } from "../../Components/Container";

//Assets Import
import Arrow from "../../assets/svg/arrow-line.svg";

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

  return (
    <section
      className={"header"}
      style={{
        height: "calc(90vh - 2px)",
        width: "calc(90vw - 2px)",
      }}
    >
      <div className="header-left">
        <div className="header-left-top">
          <span>
            WEB DEVELOPER WITH A STRONG INTEREST IN FRONT-END DEVELOMPENT,
            CURRENTLY BASED IN PARIS
          </span>
        </div>
        <div className="header-horizontal-line"></div>

        <div className="header-left-middle">
          <div className="header-text-container">
            <span>WEB DEVELOPER AND</span>
            <span>AUDIO PRODUCER</span>
          </div>
        </div>
        <div className="header-left-bottom">
          <span className="">TAKE A LOOK AT MY PERSONAL PROJECTS.</span>
          <img src={Arrow} alt="down Arrow" />
        </div>
      </div>
      <div className="header-line"></div>
      <div className="header-right">
        <div className="header-container-right">
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
