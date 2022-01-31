import * as React from "react";

//Compoentn import
import { ArticleContainer } from "../Components/Container";
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
    <ArticleContainer>
      <H1 text={title} />
      <Body text={sub_title} />
      <H1 text={image} />
      <H1 text={category} />
      <Body text={sub_category} />
      {children}
    </ArticleContainer>
  );
}
