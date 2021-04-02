import React, { useState, useEffect } from "react";
import db from "../server/db";
import Article from "../components/Article";

const ArticleContainer = () => {
  const articles = db.map((data, i) => {
    return (
      <Article
        key={i}
        id={i + 1}
        trainer={data.trainer}
        thumb={data.thumb}
        title={data.title}
        time={data.time}
        distance={data.distance}
        isSeries={data.isSeries}
        seriesCount={data.seriesCount}
      />
    );
  });

  return <main className="articleContainer">{articles}</main>;
};

export default ArticleContainer;
