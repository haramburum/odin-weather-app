import getData from "./api.js";

const App = async (city) => {
  try {
    const data = await getData(city);
    const { resolvedAddress, description } = data;
    const { temp, icon } = data.currentConditions;

    console.log(resolvedAddress, temp, description, icon);
  } catch (error) {
    console.log("Weather parse error", error);
  }
};

export default App;
