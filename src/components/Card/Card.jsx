import React from "react";
import "./_Card.scss";

function Card({ img, title, children, url, repo }) {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="preview of respective project" />
        </a>
      </div>
      <div className="card-description">
        <h3>{title}</h3>
        <p>
          {children}{" "}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Link to repository
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

export default Card;
