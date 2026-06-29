import getData from "./api.js";

const app = async (city) => {
  try {
    const data = await getData(city);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Weather parse error", error);
  }
};

export default app;
