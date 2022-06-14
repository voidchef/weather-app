import fromUnixTime from "date-fns/fromUnixTime/index.js";

const helper = (() => {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // convert utc string to format of 8:30 pm / 8:30 am
  // return just 9pm or 9am with timeFormat="hour"
  const formatTime = (unix, offset, timeFormat = "full") => {
    const date = fromUnixTime(unix + offset).toUTCString();
    let hour = date.slice(17, 19);
    const minute = date.slice(20, 22);
    let amOrPm;

    if (hour > 11) {
      amOrPm = "pm";
    } else {
      amOrPm = "am";
    }

    // change 24hr to 12hr time
    if (hour > 12) {
      hour -= 12;
    }

    // change am times to 12hr time
    if (hour < 10 && amOrPm === "am") {
      hour = hour.slice(1, 2);
    }

    // midnight formating
    if (hour === "0") {
      hour = 12;
    }

    // return just the hour
    if (timeFormat === "hour") {
      return `${hour} ${amOrPm}`;
    }
    return `${hour}:${minute} ${amOrPm}`;
  };

  const getIcon = (name) => {
    let code = name.split(" ", 2);
    let meridian = name.split(2, " ");

    return `http://openweathermap.org/img/wn/${code}${meridian}@2x.png`;
  };

  return {
    removeAllChildNodes,
    formatTime,
    getIcon,
  };
})();

export { helper };
