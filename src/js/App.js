import getData from "./api.js";

const app = async (city) => {
  try {
    const data = await getData(city);
    return data;
  } catch (error) {
    console.log("Weather parse error", error);
    throw error;
  }
};

export default app;
