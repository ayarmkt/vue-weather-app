<template>
  <!-- <WeatherBG> -->
  <h1>Weather App</h1>
  <div>
    <form>
      <input type="text" placeholder="Enter a city" />
      <button>Search</button>
    </form>
    <div>
      <p>notification</p>

      <div>location</div>
      <div>
        <div>
          <div>weather main</div>
          <div>weather description</div>
        </div>
        <!-- <WeatherIcon /> -->
      </div>
    </div>
  </div>
  <!-- </WeatherBG> -->
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import fetchWeatherData from '../api/fetchWeatherData';
export default {
  setup() {
    const API = process.env.VUE_APP_API_KEY;
    onMounted(() => {
      const { weatherData, errorMsg, fetchData } = fetchWeatherData(
        'Tokyo',
        API
      );
      fetchData();
      console.log(weatherData, errorMsg);
    });
  },
};
</script>

<style></style>
