import getData from "./api.js";

const app = async (city) => {
  try {
    const data = await getData(city);
    console.log(data);
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
