import * as keys from '../../data/keys.json';

// Fetch weather data from API
async function fetchData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keys.key}`);
    if (res.status === 404) return { cod: 404, message: "City not found!" };
    const data = res.json();
    return data;
}

export default fetchData;