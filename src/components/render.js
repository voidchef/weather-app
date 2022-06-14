import { weather } from "./weather";
import { search } from "./search";
import { unitChange } from "./unitChange";
import { helper } from "./utils.js";

const render = (() => {
  let data;

  const current = () => {
    const location = document.querySelector(".location");
    const weatherDesc = document.querySelector(".weatherDesc");
    const temp = document.querySelector(".temp");
    const highLow = document.querySelector(".highLow");

    location.innerHTML = search.getInput();
    weatherDesc.innerHTML = data.current.weather[0].main;
    temp.innerHTML = `${data.current.temp}°`;
    highLow.innerHTML = `H: ${
      data.daily[0].temp.min
    }° ${unitChange.getUnit()}<br />L: ${
      data.daily[0].temp.max
    }° ${unitChange.getUnit()}`;
  };

  const twentyFour = () => {
    const container = document.querySelector(".twentyFour");
    const offset = data.timezone_offset;

    helper.removeAllChildNodes(container);

    for (const hour in data.hourly) {
      const unix_time = data.hourly[hour].dt;
      const icon = data.hourly[hour].weather[0].icon;
      const temp = data.hourly[hour].temp;

      const block = document.createElement("div");
      block.style.display = "grid";
      block.style.gridTemplateRows = "1fr 3fr 1fr";
      block.style.margin = "10px";

      const timeBlock = document.createElement("div");
      timeBlock.innerHTML = helper.formatTime(unix_time, offset, "hour");

      const iconBlock = document.createElement("div");
      iconBlock.innerHTML = `<img src=${helper.getIcon(icon)}>`;

      const tempBlock = document.createElement("div");
      tempBlock.innerHTML = temp;

      block.appendChild(timeBlock);
      block.appendChild(iconBlock);
      block.appendChild(tempBlock);
      container.appendChild(block);
    }
  };

  const description = () => {
    const description = document.querySelector(".description");

    description.innerHTML = `Today: broken ${
      data.current.weather[0].description
    }. The high will be ${
      data.daily[0].temp.min
    }° ${unitChange.getUnit()}. The low tonight will be ${
      data.daily[0].temp.max
    }° ${unitChange.getUnit()}.`;
  };

  const weatherInfo = () => {
    const container = document.querySelector(".info");
    const requiredData = [
      "sunrise",
      "sunset",
      "feels_like",
      "pressure",
      "humidity",
      "clouds",
      "uvi",
      "visibility",
      "wind_speed",
      "pop",
    ];

    helper.removeAllChildNodes(container);

    for (const prop of requiredData) {
      const infoCell = document.createElement("div");
      infoCell.classList.add("infoCell");
      const small = document.createElement("small");
      small.classList.add("small");
      const value = document.createElement("div");
      value.classList.add("value");

      if (prop == "sunrise") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = helper.formatTime(
          data.current[prop],
          data.timezone_offset,
          "full"
        );
      }

      if (prop == "sunset") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = helper.formatTime(
          data.current[prop],
          data.timezone_offset,
          "full"
        );
      }

      if (prop == "feels_like") {
        small.innerHTML = "FEELS LIKE";
        value.innerHTML = `${data.current[prop]}° ${unitChange.getUnit()}`;
      }

      if (prop == "pressure") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = `${data.current[prop]} hPa`;
      }

      if (prop == "humidity") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = data.current[prop];
      }

      if (prop == "clouds") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = data.current[prop];
      }

      if (prop == "uvi") {
        small.innerHTML = "UV INDEX";
        value.innerHTML = data.current[prop];
      }

      if (prop == "visibility") {
        small.innerHTML = prop.toUpperCase();
        value.innerHTML = `${data.current[prop]} km`;
      }

      if (prop == "wind_speed") {
        small.innerHTML = "WIND";
        value.innerHTML = `${data.current[prop]} km/hr`;
      }

      if (prop == "pop") {
        small.innerHTML = "CHANCE OF RAIN";
        value.innerHTML = `${data.hourly[0].pop * 100}%`;
      }

      infoCell.appendChild(small);
      infoCell.appendChild(value);
      container.appendChild(infoCell);
    }
  };

  const renderPage = () => {
    data = weather.getData();
    current();
    twentyFour();
    description();
    weatherInfo();
  };

  return {
    renderPage,
  };
})();

export { render };
