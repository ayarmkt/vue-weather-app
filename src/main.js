import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faCloudBolt,
  faCloud,
  faSun,
  faTornado,
  faVolcano,
  faSmog,
  faSnowflake,
  faCloudShowersHeavy,
  faCloudRain,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
// library.add(faCloudBolt);
library.add(
  faCloudBolt,
  faCloud,
  faSun,
  faTornado,
  faVolcano,
  faSmog,
  faSnowflake,
  faCloudShowersHeavy,
  faCloudRain
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
// .component('font-awesome-icon', FontAwesomeIcon)
