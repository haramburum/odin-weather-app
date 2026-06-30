import app from "./app.js";

const screenController = () => {
  const searchForm = document.querySelector(".weather-card__form");
  const searchInput = document.querySelector(".weather-card__search-input");
  const locationElem = document.querySelector(".weather-card__location");
  const tempElem = document.querySelector(".weather-card__temp");
  const descrElem = document.querySelector(".weather-card__description");
  const cardIcon = document.querySelector(".weather-card__icon");
  const feelsElem = document.querySelector(".details-card__data--feels-like");
  const humidityElem = document.querySelector(".details-card__data--humidity");
  const windElem = document.querySelector(".details-card__data--wind-speed");
  const visibElem = document.querySelector(".details-card__data--visibility");
  const loader = document.querySelector(".loader");
  const weatherCard = document.querySelector(".weather-card");
  const tempMeasureToggler = document.querySelector(
    ".weather-card__toggleTempMeasure",
  );

  let currentTempMeasure = "\u00B0C";

  const formatTemperature = (temp) => {
    if (currentTempMeasure === "\u00B0F") {
      temp = temp * 1.8 + 32;
    }
    const roundedTemp = Math.round(temp);
    return roundedTemp < 0
      ? `${roundedTemp}${currentTempMeasure}`
      : `+${roundedTemp}${currentTempMeasure}`;
  };

  const adjustLocationFontSize = (location) => {
    if (location.split("").length >= 15) {
      locationElem.classList.add("weather-card__location--small");
    } else {
      locationElem.classList.remove("weather-card__location--small");
    }
  };

  const renderData = async () => {
    const defaultCity = "Moscow";
    try {
      searchForm.style.pointerEvents = "none";
      loader.classList.remove("hide");
      weatherCard.style.opacity = 0.1;

      const data = await app(searchInput.value || defaultCity);
      locationElem.textContent = data.resolvedAddress;
      adjustLocationFontSize(data.resolvedAddress);

      tempElem.textContent = `${formatTemperature(data.temp)}`;
      descrElem.textContent = data.conditions;

      const iconName = data.icon;
      cardIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Monochrome/${iconName}.svg`;
      cardIcon.alt = iconName;

      feelsElem.textContent = `${formatTemperature(data.feelslike)}`;
      humidityElem.textContent = `${data.humidity}%`;
      windElem.textContent = `${data.windspeed} km/h`;
      visibElem.textContent = `${data.visibility} km`;
    } catch (error) {
      console.log(error);
    } finally {
      loader.classList.add("hide");
      weatherCard.style.opacity = 1;
      searchForm.reset();
      searchForm.style.pointerEvents = "auto";
    }
  };

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();
    await renderData();
  };

  const handleMeasureTogglerClick = () => {
    if (currentTempMeasure === "\u00B0C") {
      currentTempMeasure = "\u00B0F";
    } else {
      currentTempMeasure = "\u00B0C";
    }
    renderData();
  };

  tempMeasureToggler.addEventListener("click", handleMeasureTogglerClick);

  searchForm.addEventListener("submit", handleSearchFormSubmit);

  return { renderData };
};

export default screenController;
