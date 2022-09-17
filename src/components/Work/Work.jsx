import React from "react";
import "./_Work.scss";
import Card from "../Card/Card";

import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Work() {
  return (
    <div className="work-container">
      <div className="content-container">
        <div className="work-heading-container">
          <BsGithub className="work-icon"/>
          <h2>Work</h2>
          <FaCodepen className="work-icon"/>
        </div>
        <div className="github-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="arrow-container">
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
      </div>
    </div>
  );
}

export default Work;
