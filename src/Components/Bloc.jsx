import * as React from "react";
import { Colunn } from "../Components/Container";

//Compoentn import
//import { ArticleContainer } from "../Components/Container";
import { H1, Body } from "../Components/Text";

export function Article({
  title,
  sub_title,
  image,
  category,
  sub_category,
  children,
  ...props
}) {
  return (
    <div
      style={{
        backgroundColor: "green",
        padding: 20,
        minHeight: "200px",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "row",
      }}
    >
      <Colunn style={{ width: "50%", backgroundColor: "yellow" }}>
        <H1 text={title} />
        <Body text={sub_title} />
      </Colunn>

      <Colunn style={{ width: "50%", backgroundColor: "red" }}>
        <H1 text={category} />
        <Body text={sub_category} />
      </Colunn>

      <H1 text={image} />
      <H1 text={category} />
      <Body text={sub_category} />
      {children}
    </div>
  );
}
