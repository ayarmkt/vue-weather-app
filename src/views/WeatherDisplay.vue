<template>
  <Background
    :bgClassName="stylingData.bgClassName ? stylingData.bgClassName : 'default'"
    :textColor="stylingData.textColorClass ? stylingData.textColorClass : null"
  >
    <h1>Weather App</h1>
    <div>
      <form @submit.prevent="submitSearchForm">
        <input type="text" placeholder="Enter a city" v-model="enteredCity" />
        <button>Search</button>
      </form>
      <div v-if="fetchedWeatherData">
        <!-- <p>notification</p> -->
        <div>{{ fetchedWeatherData.location }}</div>
        <div>
          <div>
            <div>{{ fetchedWeatherData.main }}</div>
            <div>{{ fetchedWeatherData.description }}</div>
          </div>
          <div>
            <font-awesome-icon :icon="stylingData.iconProps" />
          </div>
        </div>
      </div>
    </div>
  </Background>
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
    const fetchedWeatherData = ref(null);
    const stylingData = ref({
      bgClassName: null,
      textColorClass: null,
      iconProps: null,
    });
    // const bgClassName = ref(null);
    // const textColorClass = ref(null);
    // const iconProps = ref(null);

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
        const { weatherClassname, weatherIcon, textColor } =
          renderWeatherStyling(fetchedWeatherData.value.main);
        stylingData.value = {
          bgClassName: weatherClassname,
          textColorClass: textColor,
          iconProps: weatherIcon.props.icon,
        };
        // bgClassName.value = weatherClassname;
        // textColorClass.value = textColor;
        // iconProps.value = weatherIcon.props.icon;
      }
    };

    return {
      enteredCity,
      fetchedWeatherData,
      stylingData,
      // bgClassName,
      // textColorClass,
      // iconProps,
      submitSearchForm,
    };
  },
};
</script>

<style></style>
