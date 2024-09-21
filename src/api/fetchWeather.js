import axios from 'axios'

const BASE_URL = "https://api.weatherapi.com/v1"; // ENDPOINT
const API_KEY = import.meta.env.VITE_API_WEATHER;

const fetchWeather = async (city = "Lucknow") => {
    try {
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchWeather;
