<template>
  <div class="background" :class="[bgClassName, textColor]">
    <slot></slot>
  </div>
</template>

<script>
import { inject, watchEffect } from 'vue';
import renderWeatherStyling from '../functions/renderWeatherStyling';

export default {
  props: ['bgClassName', 'textColor'],
  setup() {
    const { weatherClassname, weatherIcon, textColor } = renderWeatherStyling;
    console.log(weatherClassname, weatherIcon, textColor);
  },
};
</script>

<style>
/* BACKGROUND */
.background {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.darkColor * {
  color: navy;
}

/* WEATHER BACKGROUND */
.thunderstorm {
  background: linear-gradient(rgb(131, 123, 103), rgb(2, 6, 15));
}

.drizzle {
  background: linear-gradient(rgb(15, 96, 129), rgb(194, 205, 197));
}

.snow {
  background: linear-gradient(rgb(226, 226, 226), rgb(134, 171, 194));
}

.rain {
  background: linear-gradient(rgb(137, 172, 192), rgb(47, 105, 133));
}

.mist,
.fog {
  background: linear-gradient(rgb(197, 211, 228), rgb(58, 81, 111));
}

.haze,
.sand,
.ash {
  background: linear-gradient(rgb(216, 195, 168), rgb(111, 107, 95));
}

.tornado {
  background: linear-gradient(rgb(46, 55, 62), rgb(57, 45, 34));
}

.clear,
.default {
  background: linear-gradient(rgb(1, 123, 255), rgb(128, 214, 255));
}

.clouds {
  background: linear-gradient(rgb(57, 58, 57), rgb(139, 139, 139));
}
</style>
