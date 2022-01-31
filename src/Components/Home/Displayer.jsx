import * as React from "react";

//Components Import
import { Colunn, FullScreenContainer } from "../../Components/Container";
import { Article } from "../Bloc";
//Assets Import
import ARTICLES from "../../constants/data/articles";

function Displayer() {
  const articleList = ARTICLES.map(
    ({ title, sub_title, image, category, sub_category }, key) => (
      <Article
        key={key}
        title={title}
        sub_title={sub_title}
        image={image}
        category={category}
        sub_category={sub_category}
      />
    )
  );

  return (
    <FullScreenContainer>
      <Colunn>{articleList}</Colunn>
    </FullScreenContainer>
  );
}

export default Displayer;
