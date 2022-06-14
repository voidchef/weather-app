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

  const renderPage = () => {
    data = weather.getData();
    current();
    twentyFour()
  };

  return {
    renderPage,
  };
})();

export { render };
