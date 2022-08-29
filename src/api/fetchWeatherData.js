import { ref } from 'vue';

const fetchWeatherData = (city, API) => {
  const weatherData = ref({ location: null, main: null, description: null });
  const errorMsg = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
      );

      if (!response.ok) {
        throw new Error('cannot get current weather data');
      }

      weatherData.value = await response.json();
      // console.log(weatherData.value.weather[0].main);
      // console.log(weatherData.value.weather[0].description);
      weatherData.value = {
        location: city,
        main: weatherData.value.weather[0].main,
        description: weatherData.value.weather[0].description,
      };
      // console.log(weatherData.value);
    } catch (error) {
      errorMsg.value = error.message;
      console.log(error.value);
    }
  };

  return { weatherData, errorMsg, fetchData };
};

export default fetchWeatherData;
