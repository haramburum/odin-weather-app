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

  const formatTemperature = (temp) => {
    const roundedTemp = Math.round(temp);
    return temp < 0 ? `${roundedTemp}` : `+${roundedTemp}`;
  };

  const renderData = async () => {
    const defaultCity = "Moscow";

    try {
      loader.classList.remove("hide");
      weatherCard.style.opacity = 0.1;
      const data = await app(searchInput.value || defaultCity);
      locationElem.textContent = data.resolvedAddress.split(", ")[0];
      tempElem.textContent = `${formatTemperature(data.currentConditions.temp)}\u00B0C`;
      descrElem.textContent = data.currentConditions.conditions;

      const iconName = data.currentConditions.icon;
      cardIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Monochrome/${iconName}.svg`;
      cardIcon.alt = iconName;
      console.log(iconName);

      feelsElem.textContent = `${formatTemperature(data.currentConditions.feelslike)}\u00B0C`;
      humidityElem.textContent = `${data.currentConditions.humidity}%`;
      windElem.textContent = `${data.currentConditions.windspeed} km/h`;
      visibElem.textContent = `${data.currentConditions.visibility} km`;
    } catch (error) {
      console.log(error);
    } finally {
      loader.classList.add("hide");
      weatherCard.style.opacity = 1;
      searchForm.reset();
    }
  };

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();
    await renderData();
  };

  searchForm.addEventListener("submit", handleSearchFormSubmit);

  return { renderData };
};

export default screenController;
