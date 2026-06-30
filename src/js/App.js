import { getCitybYiP, getData } from "./api.js";

const app = async (city) => {
  let defaultCity = city;

  if (!defaultCity) {
    try {
      defaultCity = await getCitybYiP();
    } catch (error) {
      console.log("Geo error", error);
      defaultCity = "London";
    }
  }

  try {
    const data = await getData(defaultCity);
    return {
      resolvedAddress: data.resolvedAddress,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      feelslike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      windspeed: data.currentConditions.windspeed,
      visibility: data.currentConditions.visibility,
      temp: data.currentConditions.temp,
    };
  } catch (error) {
    console.log("Weather parse error", error);
    throw error;
  }
};

export default app;
