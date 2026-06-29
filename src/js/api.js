const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=BFNSUCMPFSELTQ9V3ZJ9PY89B&unitGroup=metric`,
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Weather fetch error: ${error}`);
  }
};

export default getData;
