<template>
  <Background
    :bgClassName="stylingData.bgClassName ? stylingData.bgClassName : 'default'"
    :textColor="stylingData.textColorClass ? stylingData.textColorClass : null"
  >
    <h1>Weather App</h1>
    <div class="container">
      <form @submit.prevent="submitSearchForm">
        <input type="text" placeholder="Enter a city" v-model="enteredCity" />
        <button>Search</button>
      </form>
      <div class="text-container" v-if="fetchedWeatherData">
        <!-- <p>notification</p> -->
        <div class="location">{{ fetchedWeatherData.location }}</div>
        <div class="weather">
          <div class="weather-text">
            <div class="weather-main">{{ fetchedWeatherData.main }}</div>
            <div class="weather-description">
              {{ fetchedWeatherData.description }}
            </div>
          </div>
          <div class="icon">
            <font-awesome-icon
              :icon="stylingData.iconProps"
              :style="{
                width: '220px',
                height: 'auto',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </Background>
</template>

<script>
import { ref, provide, watchEffect } from 'vue';
import Background from '../components/Background.vue';
import fetchWeatherData from '../api/fetchWeatherData';
import renderWeatherStyling from '../functions/renderWeatherStyling';

export default {
  components: { Background },
  setup() {
    const API = process.env.VUE_APP_API_KEY;
    const enteredCity = ref(null);
    const fetchedWeatherData = ref(null);
    const stylingData = ref({
      bgClassName: null,
      textColorClass: null,
      iconProps: null,
    });

    const searchWeather = async (city) => {
      //FETCH WEATHER DATA
      const { weatherData, errorMsg, fetchData } = await fetchWeatherData(
        city,
        API
      );
      await fetchData();
      fetchedWeatherData.value = weatherData.value;
      enteredCity.value = '';

      //CHANGE BACKGROUND CLASSNAME
      if (fetchWeatherData) {
        const { weatherClassname, weatherIcon, textColor } =
          renderWeatherStyling(fetchedWeatherData.value.main);
        stylingData.value = {
          bgClassName: weatherClassname,
          textColorClass: textColor,
          iconProps: weatherIcon.props.icon,
        };
      }
    };

    const submitSearchForm = async () => {
      searchWeather(enteredCity.value);
    };

    watchEffect(() => {
      searchWeather('Tokyo');
    });

    return {
      enteredCity,
      fetchedWeatherData,
      stylingData,
      submitSearchForm,
    };
  },
};
</script>

<style>
/* TITLE */
h1 {
  font-size: 35px;
  margin-bottom: 40px;
  text-align: center;
}

/* CONTAINER */
.container {
  width: 70vw;
  max-width: 900px;
  height: 70vh;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
}

/* FORM */
form {
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  width: 100%;
}

input {
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 5px;
  width: 80%;
  height: 40px;
  font-size: 18px;
  padding: 0 10px;
  margin-left: 5px;
  color: black;
}

button {
  background: gray;
  border: none;
  border-radius: 5px;
  width: 30%;
  max-width: 60px;
  height: 40px;
  margin: 0 5px;
}

/* DESCRIPTION */
.text-container {
  padding-top: 40px;
  grid-row: 2;
  display: grid;
  grid-template-rows: 60px 1fr calc(60px + 40px);
  align-items: center;
  width: 100%;
}

.location {
  grid-row: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  height: 100%;
}

.weather {
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.weather-text {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.weather-main {
  font-size: 100px;
}

.weather-description {
  font-size: 50px;
  width: 100%;
  max-width: 500px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 5%;
}

.message {
  font-size: 30px;
  grid-row: 2;
  text-align: center;
}

/* MEDIA QUERIES */

/* Tablets in portrait mode, large display smartphones landscape mode */
/* Portrait */
@media only screen and (min-height: 1023px) and (max-width: 1023px) {
  h1 {
    margin-bottom: 30px;
  }

  .container {
    width: 80vw;
    height: 75vh;
  }

  form {
    padding-top: 20px;
  }

  input {
    width: 70%;
  }

  .weather {
    flex-direction: column;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .weather-text {
    justify-self: center;
  }

  .text-container {
    padding-top: 20px;
    grid-template-rows: 40px 1fr calc(40px + 20px);
  }

  .weather-main {
    font-size: 80px;
  }

  .weather-description {
    font-size: 40px;
  }

  .icon {
    justify-self: center;
  }
}

/* Landscape */
@media only screen and (max-height: 1022px) and (max-width: 1023px) {
  .container {
    width: 90vw;
    height: 75vh;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  form {
    padding-top: 15px;
    width: 100%;
  }

  input {
    height: 25px;
    font-size: 16px;
    width: 75%;
  }

  button {
    height: 25px;
  }

  .text-container {
    padding-top: 15px;
    grid-template-rows: 25px 1fr calc(25px + 15px);
    height: 100%;
  }

  .location {
    font-size: 25px;
  }

  .weather {
    height: 150px;
  }

  .weather-text {
    height: auto;
  }

  .weather-main {
    font-size: 66px;
  }

  .weather-description {
    font-size: 33px;
  }

  /* .icon {
    width: 30%;
    height: 30%;
  } */
}

/* Smartphones in landscape mode */
/* Portrait */
@media only screen and (min-height: 767px) and (max-width: 767px) {
  input {
    height: 35px;
  }

  button {
    height: 35px;
  }

  .text-container {
    padding-top: 15px;
    grid-template-rows: 35px 1fr calc(35px + 15px);
  }

  .location {
    grid-row: 1;
    font-size: 30px;
  }

  .weather {
    grid-row: 2;
    flex-direction: column;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
  }

  .icon {
    width: 100%;
  }
}

/* Landscape */
@media only screen and (max-height: 766px) and (max-width: 767px) {
  h1 {
    font-size: 20px;
    margin-bottom: 5px;
    width: auto;
  }

  .location {
    font-size: 18px;
    height: 20px;
  }

  .weather-main {
    font-size: 54px;
  }

  .weather-description {
    font-size: 27px;
    height: 100%;
  }

  .message {
    font-size: 20px;
  }
}

/* Smartphones in portrait mode */
@media only screen and (max-width: 420px) {
  h1 {
    font-size: 23px;
    margin-bottom: 0;
  }

  .container {
    width: 100vw;
    height: 80vh;
    background: transparent;
  }

  input {
    width: 75%;
    height: 35px;
    margin-left: 0px;
  }

  button {
    height: 35px;
  }

  form {
    padding-top: 10px;
  }

  .text-container {
    padding-top: 10px;
    grid-template-rows: 30px 1fr calc(30px + 10px);
  }

  .location {
    font-size: 25px;
  }

  .weather {
    flex-direction: column;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
    width: 100vw;
  }

  .weather-text {
    width: 100vw;
  }

  .weather-main {
    font-size: 56px;
    width: 100vw;
  }

  .weather-description {
    font-size: 28px;
    width: 100vw;
  }

  .message {
    font-size: 20px;
  }

  .icon {
    width: 60%;
    height: 60%;
    /* width: 100%;
    height: 100%; */
    justify-self: center;
  }
}

/* Smaller Smartphones in portrait mode */
@media only screen and (max-width: 280px) {
  h1 {
    margin-bottom: 5px;
  }

  input {
    width: 70%;
    height: 30px;
    margin-left: 0px;
  }

  button {
    height: 30px;
  }

  .location {
    font-size: 20px;
  }

  .weather-main {
    font-size: 50px;
  }

  .weather-description {
    font-size: 25px;
  }

  form {
    padding-top: 20px;
  }

  .text-container {
    padding-top: 20px;
    grid-template-rows: 30px 1fr calc(30px + 20px);
  }
}
</style>
