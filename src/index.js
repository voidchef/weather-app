import "./main.css";

import { weather } from "./weather";
import { render } from "./render";

const webAppStart = (() => {
  const start = async () => {
    await weather.getWeather();
    render.renderPage();
  };

  return { start };
})();

webAppStart.start();

export { webAppStart };
