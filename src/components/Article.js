import React, { useState, useEffect } from "react";

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

  return (
    <article
      className={isActive ? "article active" : "active"}
      id={id}
      onClick={() => setIsActive(!isActive)}
    >
      <img className="thumb" src={thumb} alt={title} />
      {/* Toggles overlay on trainer image if it is a workout series */}
      {isSeries && (
        <div className="series">
          <p className="seriesCount">{seriesCount}</p>
          <p className="seriesText">Workouts</p>
          <img
            src={require("../assets/icons/series-icon.png")}
            alt="series icon"
            className="seriesIcon"
          />
        </div>
      )}

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
        <div className="articleIconInfo">
          <span className="iconInfoTime">
            <img
              src={require("../assets/icons/timer-icon.png")}
              alt="timer icon"
              className="timerIcon"
            />
            {time}
          </span>
          <span className="iconInfoDistance">
            <img
              src={require("../assets/icons/track-icon.png")}
              alt="track icon"
              className="trackIcon"
            />
            {distance}
          </span>
        </div>
      )}
      {isActive ? (
        <p className="viewDetails">View Details</p>
      ) : (
        <p className="viewDetails"></p>
      )}
    </article>
  );

  return <article></article>;
};

export default Article;
