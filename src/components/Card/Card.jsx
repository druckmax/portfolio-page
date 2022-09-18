import React from "react";
import "./_Card.scss";

function Card({ img, title, children }) {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <img src={img} alt="preview of respective project" />
      </div>
      <div className="card-description">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Card;
