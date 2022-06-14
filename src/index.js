import "./styles/style.css";

import { weather } from "./components/weather";
import { render } from "./components/render";

const webAppStart = (() => {
  const start = async () => {
    await weather.getWeather();
    render.renderPage();
  };

  return { start };
})();

webAppStart.start();

export { webAppStart };
