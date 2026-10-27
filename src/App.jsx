import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import NavBar from "./components/NavBar";
import TodayForecast from "./components/TodayForecast";
import WeatherSkeleton from "./components/WeatherSkeleton";

import { useWeather } from "../hooks/useWeather";
import { useEffect, useState } from "react";
import errorIcon from "./assets/icon-error.svg";
import retryIcon from "./assets/icon-retry.svg";

function App() {
    const [isDark, setIsDark] = useState(false);

    const { weather, isLoading, error, cityError, search, name, country , locError, handleLocation} =
        useWeather();
    const [day, setDay] = useState(0);

    const handleSearch = (place) => {
        setDay(0);
        search(place);
    };

    const handleDark = () => {
        setIsDark(!isDark);
    };
    useEffect(() => {
        document.body.style.setProperty(
            "--main-bg-color",
            `${isDark ? "#02012b" : "#f3f8fc"}`,
        );
    }, [isDark]);
    return (
        <div className="max-w-275  mx-auto p-8 max-sm:p-3">
            <NavBar dark={isDark} switchDark={handleDark} />
            {error ? (
                <div className={`${isDark ? "text-white" : "text-black"} w-fit mt-20 mx-auto text-center`}>
                    <img src={errorIcon} alt="" className="mx-auto w-10 h-10" />
                    <h1 className="text-4xl font-bold my-8">
                        Something Went Rong
                    </h1>
                    <p className={`w-[410px] text-md ${isDark ? "text-[#cccddf]" : "text-black"} `}>
                        We couldn't connect to the server ({error}).Please try
                        again in a few moments
                    </p>
                    <button
                        className={`${isDark ? "bg-[#25253f] text-[#cccddf]" : "bg-[#dfe3e7] text-black"} rounded-lg p-2 flex gap-2 mt-3 mx-auto cursor-pointer`}
                        onClick={() => window.location.reload()}
                    >
                        <img src={retryIcon} alt="" />
                        <span>Retry</span>
                    </button>
                </div>
            ) : (
                <>
                    <Header dark={isDark} onSearchClick={handleSearch} onLocClick={handleLocation} />
                    {locError && <div className={`text-center mt-10 text-2xl ${isDark ? "text-white" : "text-black"} `}>{locError}</div>}

                    {isLoading && <WeatherSkeleton dark={isDark} />}

                    {cityError && !isLoading && (
                        <div className={`mt-8 ${isDark ? "text-white" : "text-black"}  text-2xl w-fit mx-auto font-bold`}>
                            No Search result found!
                        </div>
                    )}

                    {weather && (
                        <div className="flex max-l:flex-col gap-5 mt-8">
                            <div className="flex-1">
                                <TodayForecast
                                    dark={isDark}
                                    current={weather.current}
                                    city={name}
                                    country={country}
                                />
                                <DailyForecast
                                    dark={isDark}
                                    daily={weather.daily}
                                />
                            </div>
                            <HourlyForecast
                                dark={isDark}
                                hourly={weather.hourly}
                                days={weather.daily.time}
                                day={day}
                                onDayChange={setDay}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
