const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=BFNSUCMPFSELTQ9V3ZJ9PY89B&unitGroup=metric`,
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Weather fetch error: ${error}`);
    throw error;
  }
};

const getCitybYiP = async () => {
  try {
    const geoResponse = await fetch(
      "https://api.2ip.io/?token=7i9zr9rvscpore8h",
    );
    const geoData = await geoResponse.json();
    return geoData.city;
  } catch (error) {
    console.log("Geo error", error);
    throw error;
  }
};

export {getData, getCitybYiP};
