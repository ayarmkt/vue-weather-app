<template>
  <div :class="bgClassName">
    <slot></slot>
  </div>
</template>

<script>
import { inject, watchEffect } from 'vue';
import renderWeatherStyling from '../functions/renderWeatherStyling';

export default {
  props: ['bgClassName'],
  setup() {
    const { weatherClassname, weatherIcon, textColor } = renderWeatherStyling;
    console.log(weatherClassname, weatherIcon, textColor);
  },
};
</script>

<style></style>
