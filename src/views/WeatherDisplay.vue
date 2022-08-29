<template>
  <!-- <WeatherBG> -->
  <h1>Weather App</h1>
  <div>
    <form @submit.prevent="submitSearchForm">
      <input type="text" placeholder="Enter a city" v-model="enteredCity" />
      <button>Search</button>
    </form>
    <div>
      <p>notification</p>

      <div>{{ fetchedWeatherData.location }}</div>
      <div>
        <div>
          <div>{{ fetchedWeatherData.main }}</div>
          <div>{{ fetchedWeatherData.description }}</div>
        </div>
        <!-- <WeatherIcon /> -->
      </div>
    </div>
  </div>
  <!-- </WeatherBG> -->
</template>

<script>
import { ref } from 'vue';

import fetchWeatherData from '../api/fetchWeatherData';
export default {
  setup() {
    const API = process.env.VUE_APP_API_KEY;
    const enteredCity = ref(null);
    const fetchedWeatherData = ref({});

    const submitSearchForm = async () => {
      console.log(enteredCity.value);
      //fetch weather data here
      const { weatherData, errorMsg, fetchData } = await fetchWeatherData(
        enteredCity.value,
        API
      );
      await fetchData();
      // console.log(weatherData.value);
      fetchedWeatherData.value = weatherData.value;
      await console.log(fetchedWeatherData.value);
      enteredCity.value = '';
    };

    // onMounted(() => {
    //   const { weatherData, errorMsg, fetchData } = fetchWeatherData(
    //     'Tokyo',
    //     API
    //   );
    //   fetchData();
    //   // console.log(weatherData, errorMsg);
    // });

    return { enteredCity, fetchedWeatherData, submitSearchForm };
  },
};
</script>

<style></style>
