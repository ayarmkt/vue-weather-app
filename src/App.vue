<template>
  <WeatherDisplay />
</template>

<script>
import WeatherDisplay from './views/WeatherDisplay.vue';

export default {
  name: 'App',
  components: {
    WeatherDisplay,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: white;
}
</style>
