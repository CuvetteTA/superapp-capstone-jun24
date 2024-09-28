import axios from 'axios'

const BASE_URL = "https://api.weatherapi.com/v1"; // ENDPOINT
const API_KEY = import.meta.env.VITE_API_WEATHER;

const CACHE_DURATION = 60 * 60 * 1000;

// cacluating the size of local storage
let total = 0
for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += ((localStorage[key].length + key.length) * 2); // Each character is 2 bytes
    }
  }
console.log(`Total size: ${total} bytes`);

const fetchWeather = async (city = "Lucknow") => {
    // Set a cache key
    const cacheKey = `weather_${city.toLowerCase()}`;
    // using Local Storage to cache the data
    const cacheData = localStorage.getItem(cacheKey);

    // Check if I already have the data in the cache
    if (cacheData) {
        const { store, timestamp } = JSON.parse(cacheData);

        if (Date.now() - timestamp < CACHE_DURATION) {
            console.log("Fetching data from cache ...");
            return store;
        }
    }

    try {

        console.log("Fetching data ...");
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city
            }
        });
        // destructuring the data required at front-end
        const { temp_c, condition, pressure_mb, wind_kph, humidity } = data.current
        const store = {
            temp_c, condition, pressure_mb, wind_kph, humidity
        }
        // Save the data in the cache
        localStorage.setItem(cacheKey, JSON.stringify({store, timestamp: Date.now()}))
        return store;
    } catch (error) {
        console.error(error);
    }
}

export default fetchWeather;
