import { ref } from 'vue';

const fetchWeatherData = (city, API) => {
  const weatherData = ref({ location: null, main: null, description: null });
  // const notificationStatus = ref({ status: null, message: null });
  const errorMsg = ref(null);

  const fetchData = async () => {
    try {
      // notificationStatus.value = { status: 'pending', message: 'Loading...' };
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
      );

      if (!response.ok) {
        // console.log(response);
        throw new Error('Cannot find results.');
      }

      weatherData.value = await response.json();
      weatherData.value = {
        location: weatherData.value.name,
        main: weatherData.value.weather[0].main,
        description: weatherData.value.weather[0].description,
      };
      errorMsg.value = null;
      // notificationStatus.value = {
      // status: 'success',
      // message: 'Fetched data successfully.',
      // };
    } catch (error) {
      errorMsg.value = error.message;
      // notificationStatus.value = { status: 'error', message: error.message };
      // console.log(error);
      // console.log(errorMsg.value);
    }
  };

  return {
    weatherData,
    errorMsg,
    // notificationStatus,
    fetchData,
  };
};

export default fetchWeatherData;
