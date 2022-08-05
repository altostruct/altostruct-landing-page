import React, { useState, useEffect } from "react";
import * as style from "./Carousel.module.scss";
import { Transition } from "react-transition-group";
import CardWithHoverInfo from "@components/CardWithHoverInfo/CardWithHoverInfo";
import posts from "/linkedInData.json";
import useTranslation from "../../hooks/useTranslation";

function Carousel() {
  const { t, setLanguage, language } = useTranslation();

  return (
    <div className={style.wrapper}>
      <div className={style.carousel}>
        <div className={style.container}>
          <div className={style.children}>
            {posts.map(
              (post: { date: string; url: string; content: string }) => (
                <CardWithHoverInfo
                  date={post.date}
                  url={post.url}
                  content={t(post.content)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
