import React, { useState } from "react";
const cx = require("classnames");

const Article = ({
  id,
  trainer,
  thumb,
  title,
  time,
  distance,
  isSeries,
  seriesCount,
}) => {
  const [isActive, setIsActive] = useState(false);

  const articleClass = cx({
    article: true,
    active: isActive,
  });

  return (
    <article
      className={articleClass}
      id={id}
      onMouseEnter={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(!isActive)}
    >
      <div className="thumbContainer">
        <img className="thumb" src={thumb} alt={title} />
        {/* Toggles overlay on trainer image if it is a workout series */}
        {isSeries && (
          <div className="series">
            <p className="seriesCount">{seriesCount}</p>
            <p className="seriesText">WORKOUTS</p>
            <img
              src={require("../assets/icons/seriesIcon.png")}
              alt="series icon"
              className="seriesIcon"
            />
          </div>
        )}
      </div>

      <div className="articleInfo">
        <h4 className="articleTitle">{title}</h4>
        <img
          className="trainer"
          src={trainer}
          alt="thumbnail for the article"
        />
      </div>

      {/* Toggles icons and additional info if it's a race */}
      {!isSeries && (
        <div className="articleSubInfo">
          <span className="timeIconInfo">
            <img
              src={require("../assets/icons/timerIcon.png")}
              alt="timer icon"
              className="timerIcon"
            />
            {time}
          </span>
          <span className="distanceIconInfo">
            <img
              src={require("../assets/icons/trackIcon.png")}
              alt="track icon"
              className="trackIcon"
            />
            {distance}
          </span>
        </div>
      )}
      {isActive ? <p className="viewDetails">VIEW DETAILS</p> : null}
    </article>
  );
};

export default Article;
