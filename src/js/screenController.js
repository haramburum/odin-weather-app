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

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const data = await app(searchInput.value);
      locationElem.textContent = data.resolvedAddress;
      tempElem.textContent = data.currentConditions.temp;
      descrElem.textContent = data.currentConditions.conditions;

      feelsElem.textContent = data.currentConditions.feelslike;
      humidityElem.textContent = data.currentConditions.humidity;
      windElem.textContent = data.currentConditions.windSpeed;
      visibElem.textContent = data.currentConditions.visibility;
    } catch (error) {
      console.log(error);
    }
  });
};

export default screenController;
