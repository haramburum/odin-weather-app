import app from "./app.js";

const screenController = () => {
  const searchForm = document.querySelector(".weather-card__form");
  const searchInput = document.querySelector(".weather-card__search-input");
  const locationElem = document.querySelector(".weather-card__location");
  const tempElem = document.querySelector(".weather-card__temp");
  const descrElem = document.querySelector(".weather-card__description");
  const feelsElem = document.querySelector(".details-card__data--feels-like");
  const humidityElem = document.querySelector(".details-card__data--humidity");
  const windElem = document.querySelector(".details-card__data--wind-speed");
  const visibElem = document.querySelector(".details-card__data--visibility");

  const formatTemperature = (temp) =>  {
    const roundedTemp = Math.round(temp);
    return temp < 0 ? `-${roundedTemp}` : `+${roundedTemp}`;
  };

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const data = await app(searchInput.value);
      locationElem.textContent = data.resolvedAddress;
      tempElem.textContent = `${formatTemperature(data.currentConditions.temp)}\u00B0C`;
      descrElem.textContent = data.currentConditions.conditions;

      feelsElem.textContent = `${formatTemperature(data.currentConditions.feelslike)}\u00B0C`;
      humidityElem.textContent = `${data.currentConditions.humidity}%`;
      windElem.textContent = `${data.currentConditions.windspeed} km/h`;
      visibElem.textContent = `${data.currentConditions.visibility} km`;
    } catch (error) {
      console.log(error);
    }
  });
};

export default screenController;
