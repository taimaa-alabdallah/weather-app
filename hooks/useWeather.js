import { useState, useEffect } from "react";
import { fetchWeather, fetchCityInfo, reverseGeocode } from "../src/api";

export function useWeather() {
    const [place, setPlace] = useState("berlin");
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cityError, setCityError] = useState(null);
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [locError, setLocError] = useState(null);

    const handleLocation = () => {
        if (!navigator.geolocation) {
            setLocError("sorry, your browser don't support this futter");
            return;
        }

        setWeather(null);
        setIsLoading(true);
        setLocError(null);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                try {
                    const [geoData, weatherRes] = await Promise.all([
                        reverseGeocode(lat, lon),
                        fetchWeather(lat, lon),
                    ]);
                    setName(geoData.city);
                    setCountry(geoData.country);
                    setWeather(weatherRes.data);
                    setLocError(null);
                } catch (err) {
                    setLocError(err.message);
                } finally {
                    setIsLoading(false);
                }
            },
            (err) => {
                if (err.code === err.PERMISSION_DENIED) {
                    setLocError(
                        "Location permission denied. Please enable it in browser settings.",
                    );
                    setIsLoading(false)
                } else {
                    setLocError(null);
                }
            },
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setLocError(null);
            setCityError(null);
            setError(null);
            setWeather(null);
            try {
                const res = await fetchCityInfo(place);
                if (!res.data.results || res.data.results.length === 0) {
                    setCityError("City Not Found");
                    return;
                }
                setName(res.data.results[0].name);
                setCountry(res.data.results[0].country);
                const response = await fetchWeather(
                    res.data.results[0].latitude,
                    res.data.results[0].longitude,
                );
                setWeather(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [place]);

    return {
        weather,
        isLoading,
        cityError,
        error,
        search: setPlace,
        name,
        country,
        locError,
        handleLocation,
    };
}
