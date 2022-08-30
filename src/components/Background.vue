<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import renderWeatherStyling from '../functions/renderWeatherStyling';
export default {
  setup() {
    const { weatherClassname, weatherIcon, textColor } = renderWeatherStyling;
    console.log(weatherClassname, weatherIcon, textColor);
  },
};
</script>

<style></style>
