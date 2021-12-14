import * as React from "react";

//Components Import
import { Flex } from "./Container";

//Assets Import
import gribouillage from "../assets/svg/gribouillage-icon.svg";
import insta_icon from "../assets/svg/insta-icon.svg";

function NavBar() {
  return (
    <Flex className="navBar">
      <img src={gribouillage} alt="gribouillage-icon" />

      <img src={insta_icon} alt="gribouillage-icon" href='http://localhost:3000/bonjourmonde' />

    </Flex>
  );
}

export default NavBar;
