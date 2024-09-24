import axios from 'axios'

const BASE_URL = "https://api.weatherapi.com/v1"; // ENDPOINT
const API_KEY = import.meta.env.VITE_API_WEATHER;

const CACHE_DURATION = 60 * 60 * 1000;

const fetchWeather = async (city = "Lucknow") => {
    // Set a cache key
    const cacheKey = `weather_${city.toLowerCase()}`;
    // using Local Storage to cache the data
    const cacheData = localStorage.getItem(cacheKey);

    // Check if I already have the data in the cache
    if (cacheData) {
        const { data, timestamp } = JSON.parse(cacheData);

        if (Date.now() - timestamp < CACHE_DURATION) {
            console.log("Fetching data from cache ...");
            return data;
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

        // Save the data in the cache
        localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));


        return data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchWeather;
