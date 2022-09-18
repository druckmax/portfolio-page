import React from "react";
import "./_Work.scss";
import Card from "../Card/Card";
import { useState } from "react";

import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import previewMeme from "./img/preview-meme.png";
import previewCantina from "./img/preview-cantina.png";
import previewGithub from "./img/preview-github.png";
import previewWeather from "./img/preview-weather.png";
import rgbGame from './img/rgb-guessing-game.png'
import chronometer from './img/react-chronometer.png'
import colorGenerator from './img/random-color-generator.png'
import vacationCountdown from './img/vacation-counter.png'

function Work() {
  const [switchWork, setSwitchWork] = useState(true);

  return (
    <div className="work-container">
      <div className="content-container">
        <div className="work-heading-container">
          <BsGithub onClick={() => setSwitchWork(true)} className={`work-icon ${switchWork && 'work-icon-active'}`} />
          <h2>Work</h2>
          <FaCodepen
            onClick={() => setSwitchWork(false)}
            className={`work-icon ${!switchWork && 'work-icon-active'}`}
          />
        </div>

        {switchWork ? (
          <div className="github-container">
            <Card img={previewMeme} title="Never-Gonna-GIF-You-Up">
              Find your favorite GIFs or create your own memes. Built with React
              and Sass, using the Giphy and imgur APIs.
            </Card>
            <Card img={previewCantina} title="La Cantina Restaurant Page">
              A static restaurant page built for La Cantina, a Tapas Bar in
              Leipzig.
            </Card>
            <Card img={previewGithub} title="Github Finder">
              A github finder application, using the Github API. Searchs for
              users and displays the profile. Built with React and Tailwind.
            </Card>
            <Card img={previewWeather} title="React Weather Forecast">
              Fetch weather data depending on your location. Fetches data from
              OpenWeather API. Does reverse geocoding using Geolocation and
              Geoapify API.
            </Card>
          </div>
        ) : (
          <div className="github-container codepen-container">
            <Card img={rgbGame} title="RGB Guessing Game">
              Find your favorite GIFs or create your own memes. Built with React
              and Sass, using the Giphy and imgur APIs.
            </Card>
            <Card img={chronometer} title="React Chronometer">
              A static restaurant page built for La Cantina, a Tapas Bar in
              Leipzig.
            </Card>
            <Card img={colorGenerator} title="Random Color Generator">
              A github finder application, using the Github API. Searchs for
              users and displays the profile. Built with React and Tailwind.
            </Card>
            <Card img={vacationCountdown} title="Vacation Countdown">
              Fetch weather data depending on your location. Fetches data from
              OpenWeather API. Does reverse geocoding using Geolocation and
              Geoapify API.
            </Card>
          </div>
        )}

        <div className="arrow-container">
          <AiOutlineLeft className="arrow" onClick={() => setSwitchWork(!switchWork)} />
          <AiOutlineRight className="arrow" onClick={() => setSwitchWork(!switchWork)}/>
        </div>
      </div>
    </div>
  );
}

export default Work;
