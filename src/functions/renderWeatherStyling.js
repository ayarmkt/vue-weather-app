import { ref } from 'vue';

const renderWeatherStyling = (main) => {
  let weatherIcon = ref(null);
  let weatherClassname = ref('');
  let textColor = ref(null);

  switch (main) {
    case 'Thunderstorm': {
      weatherClassname = 'thunderstorm';
      weatherIcon = (
        <font-awesome-icon
          icon='fa-solid fa-cloud-bolt'
          // style={{ height: '300px', color: 'pink' }}
        />
      );
      break;
    }
    case 'Drizzle': {
      weatherClassname = 'drizzle';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-cloud-rain' />;
      break;
    }
    case 'Squall':
    case 'Rain': {
      weatherClassname = 'rain';
      weatherIcon = (
        <font-awesome-icon icon='fa-solid fa-cloud-showers-heavy' />
      );
      break;
    }
    case 'Snow': {
      weatherClassname = 'snow';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-snowflake' />;
      textColor = 'darkColor';
      break;
    }
    case 'Fog':
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Sand':
    case 'Ash': {
      weatherClassname = 'fog';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-smog' />;
      break;
    }
    case 'Tornado': {
      weatherClassname = 'tornado';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-tornado' />;
      break;
    }
    case 'Clear': {
      weatherClassname = 'clear';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-sun' />;
      break;
    }
    case 'Clouds': {
      weatherClassname = 'clouds';
      weatherIcon = <font-awesome-icon icon='fa-solid fa-cloud' />;
      break;
    }
    default: {
      weatherClassname = 'default';
      weatherIcon = null;
      break;
    }
  }

  return { weatherClassname, weatherIcon, textColor };
};

export default renderWeatherStyling;
