import axios from "axios";

export const fetchWeather = async (lati, longi) => {
    const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,precipitation,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`,
    );
    return response;
};
export const fetchCityInfo = async (city) => {
    const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    return res;
};
export const reverseGeocode = async (latitude, longitude) => {
    let city = "you location";
    let country = "";
    try {
        const res = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
        );
        city = res.data.city;
        country = res.data.countryName;
        return { city, country };
    } catch {
        return { city, country };
    }
};
