import * as React from "react";

//Compoentn import
import { Flex } from "../Components/Container";
import { H1 } from "../Components/Text";

export function Article(
  {
    id,
    title,
    sub_title,
    images,

    category,
    sub_category,
  },
  { ...props }
) {
  return (
    <Flex>
      <H1 text="wesh"></H1>
    </Flex>
  );
}
