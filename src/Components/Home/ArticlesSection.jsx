import * as React from "react";

//import components
import Displayer from "./Displayer";

const ArticlesSection = () => {
  return (
    <section
      className="ArticlesSection"
      style={{
        minHeight: "calc(90vh - 2px)",
        minWidth: "calc(90vw - 2px)",
        margin: "1px 1px 0px 1px",
        position: "retative",
      }}
    >
      <Displayer />
    </section>
  );
};

export default ArticlesSection;
