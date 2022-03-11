import * as React from "react";

//Components Import
import { Colunn, FullScreenContainer } from "../../Components/Container";
import { Article } from "../Bloc";
//Assets Import
import ARTICLES from "../../constants/data/articles";
import { H1, H4 } from "../Text";

function Displayer() {
  const articleList = ARTICLES.map(
    ({ title, sub_title, image, category, sub_category }, key) => (
      <Article
        key={key}
        title={title}
        sub_title={sub_title}
        image={image}
        category={category}
        sub_category={(sub_category, console.log(key))}
        style={key % 2 === 0 ? { margiRight: 100 } : { margiLeft: 100 }}
      />
    )
  );

  return (
    <section style={{ padding: 20 }}>
      <Colunn>
        <H1 text={"PROJECTS"} />
        <H4
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellateligendi, sed iste fuga dolorem atque asperiores quaerat, soluta iusto."
          }
        />
      </Colunn>

      <Colunn>{articleList}</Colunn>
    </section>
  );
}

export default Displayer;
