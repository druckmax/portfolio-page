import React from "react";
import "./_Work.scss";
import Card from "../Card/Card";
import { MainContext } from "../../Context";
import { useState, useContext } from "react";

import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import previewMeme from "./img/preview-meme.jpg";
import previewCantina from "./img/preview-cantina.jpg";
import previewGithub from "./img/preview-github.jpg";
import previewWeather from "./img/preview-weather.png";
import rgbGame from "./img/rgb-guessing-game.jpg";
import chronometer from "./img/react-chronometer.jpg";
import colorGenerator from "./img/random-color-generator.jpg";
import vacationCountdown from "./img/vacation-counter.jpg";

function Work() {
  const { workRef } = useContext(MainContext);
  const [switchWork, setSwitchWork] = useState(true);

  return (
    <div ref={workRef} className="work-container">
      <div className="content-container">
        <div className="work-heading-container">
          <BsGithub
            onClick={() => setSwitchWork(true)}
            className={`work-icon ${switchWork && "work-icon-active"}`}
          />
          <h2>Work</h2>
          <FaCodepen
            onClick={() => setSwitchWork(false)}
            className={`work-icon ${!switchWork && "work-icon-active"}`}
          />
        </div>

        {switchWork ? (
          <div className="github-container">
            <Card
              img={previewMeme}
              title="Never-Gonna-GIF-You-Up"
              url="https://never-gonna-gif-you-up.netlify.app"
              repo="https://github.com/druckmax/never-gonna-GIF-you-up"
            >
              Find your favorite GIFs or create your own memes. Built with React and
              Sass, using the Giphy and imgur APIs.
            </Card>
            <Card
              img={previewCantina}
              title="La Cantina Restaurant Page"
              url="https://github.com/druckmax/La_Cantina_2.0"
              repo="https://github.com/druckmax/La_Cantina_2.0"
            >
              A static restaurant page built for La Cantina, a Tapas Bar in Leipzig.
              Work in progress. <br />
            </Card>
            <Card
              img={previewGithub}
              title="Github Finder"
              url="https://react-github-finder-app-druckmax.netlify.app"
              repo="https://github.com/druckmax/React_Github_Finder"
            >
              A github finder application, using the Github API. Searchs for users
              and displays the profile. Built with React and Tailwind.
            </Card>
            <Card
              img={previewWeather}
              title="React Weather Forecast"
              url="https://react-weather-forecast-91.netlify.app"
              repo="https://github.com/druckmax/React_weather_app"
            >
              Fetch weather data depending on your location. Fetches data from
              OpenWeather API. Does reverse geocoding using Geolocation and Geoapify
              API.
            </Card>
          </div>
        ) : (
          <div className="github-container codepen-container">
            <Card
              img={rgbGame}
              title="RGB Guessing Game"
              url="https://codepen.io/druckmax/pen/NWYrOrR"
            >
              A simple game that makes you guess the color of an rgb value.
            </Card>
            <Card
              img={chronometer}
              title="React Chronometer"
              url="https://codepen.io/druckmax/pen/xxWarPr"
            >
              Accurate stop watch made in React. Uses Date.now() to calculate
              intervals to avoid drifting behaviour caused by the Javascript engine.
            </Card>
            <Card
              img={colorGenerator}
              title="Random Color Generator"
              url="https://codepen.io/druckmax/pen/RwMrMQJ"
            >
              A small app that creates a random color hex-code and sets the color as
              background for the card-item.
            </Card>
            <Card
              img={vacationCountdown}
              title="Vacation Countdown"
              url="https://codepen.io/druckmax/pen/poLENqp"
            >
              A countdown component which shows you how long you have to wait for
              your well deserved vacation.
            </Card>
          </div>
        )}

        <div className="arrow-container">
          <AiOutlineLeft
            className="arrow"
            onClick={() => setSwitchWork(!switchWork)}
          />
          <AiOutlineRight
            className="arrow"
            onClick={() => setSwitchWork(!switchWork)}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
