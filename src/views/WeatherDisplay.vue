<template>
  <!-- <WeatherBG> -->
  <Background :bgClassName="bgClassName ? bgClassName : 'default'">
    <h1>Weather App</h1>
    <p>CLASSNAME: {{ bgClassName }}</p>
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
  </Background>
  <!-- </WeatherBG> -->
</template>

<script>
import { ref, provide } from 'vue';
import Background from '../components/Background.vue';

import fetchWeatherData from '../api/fetchWeatherData';
import renderWeatherStyling from '../functions/renderWeatherStyling';

export default {
  components: { Background },
  setup() {
    const API = process.env.VUE_APP_API_KEY;
    const enteredCity = ref(null);
    const fetchedWeatherData = ref({});
    const bgClassName = ref(null);

    const submitSearchForm = async () => {
      //FETCH WEATHER DATA
      const { weatherData, errorMsg, fetchData } = await fetchWeatherData(
        enteredCity.value,
        API
      );
      await fetchData();
      fetchedWeatherData.value = weatherData.value;
      enteredCity.value = '';

      //CHANGE BACKGROUND CLASSNAME
      if (fetchWeatherData) {
        console.log(fetchedWeatherData.value.main);
        const { weatherClassname, weatherIcon, textColor } =
          renderWeatherStyling(fetchedWeatherData.value.main);
        console.log(weatherClassname);
        bgClassName.value = weatherClassname;
        console.log(bgClassName.value);
      }
    };

    // onMounted(() => {
    //   const { weatherData, errorMsg, fetchData } = fetchWeatherData(
    //     'Tokyo',
    //     API
    //   );
    //   fetchData();
    //   // console.log(weatherData, errorMsg);
    // });

    return { enteredCity, fetchedWeatherData, bgClassName, submitSearchForm };
  },
};
</script>

<style></style>
