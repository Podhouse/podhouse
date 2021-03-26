import React from "react";

import Main from "./Main/Main";
import Articles from "./Articles/Articles";

import { ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const About = ({ articles }: Props) => (
  <>
    <Main />
    <Articles articles={articles} />
  </>
);

export default About;
