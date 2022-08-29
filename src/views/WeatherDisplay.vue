<template>
  <!-- <WeatherBG> -->
  <h1>Weather App</h1>
  <div>
    <form @submit.prevent="submitSearchText">
      <input type="text" placeholder="Enter a city" v-model="enteredCity" />
      <p>{{ enteredCity }}</p>
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
import { ref } from 'vue';

import fetchWeatherData from '../api/fetchWeatherData';
export default {
  setup() {
    const API = process.env.VUE_APP_API_KEY;
    const enteredCity = ref(null);

    const submitSearchText = (e) => {
      console.log(enteredCity.value);
    };

    // onMounted(() => {
    //   const { weatherData, errorMsg, fetchData } = fetchWeatherData(
    //     'Tokyo',
    //     API
    //   );
    //   fetchData();
    //   // console.log(weatherData, errorMsg);
    // });

    return { enteredCity, submitSearchText };
  },
};
</script>

<style></style>
