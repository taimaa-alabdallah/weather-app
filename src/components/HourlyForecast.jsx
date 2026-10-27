import { useState } from "react";
import arrow from "../assets/icon-dropdown.svg";
import { weatherCodeDescription } from "../weather-icons";

export default function HourlyForecast({dark, hourly, days, day, onDayChange }) {
    const [showDropDown, setShowDropdown] = useState(false);
    const start = day * 24;
    const hours = hourly.time.slice(start, start + 24);
    return (
        <div className={`p-6 ${dark ? "bg-[#25253f] text-white " : "bg-[#dfe4e8] text-black"}  w-80 max-l:w-auto rounded-xl `}>
            <div className=" flex justify-between items-center relative ">
                <h2>Hourly forecast</h2>
                <div
                    className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} flex gap-3 items-center rounded-[10px] py-2 px-4 cursor-pointer`}
                    onClick={() => setShowDropdown(!showDropDown)}
                >
                    <p>
                        {new Date(days[day]).toLocaleDateString("en-US", {
                            weekday: "long",
                        })}
                    </p>
                    <img src={arrow} alt="arrowIcon" className="w-3 h-3" />
                </div>
                {showDropDown && (
                    <div className={`absolute top-10 end-4 ${dark ? "bg-[#25253f] border-2 border-[#323258]" : "bg-[#dfe4e8] border-none"}  p-2 rounded-lg w-50 `}>
                        {days.map((t, i) => (
                            <div
                                key={t}
                                data-value={i}
                                className={`p-2 cursor-pointer ${dark ? "hover:bg-[#3c3b5d]" : "hover:bg-[#cdd1d5]"}  rounded-lg`}
                                onClick={(e) => {
                                    onDayChange(e.target.dataset.value);
                                    setShowDropdown(false);
                                }}
                            >
                                {new Date(t).toLocaleDateString("en-US", {
                                    weekday: "long",
                                })}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="h-115  overflow-y-auto overflow-x-hidden mt-3 pr-4">
                {hours.map((time, i) => (
                    <div key={i} className="mt-4">
                        <div className={`flex justify-between items-center ${dark ? "bg-[#2f2f49]" : "bg-[#cdd1d5]"}  p-2 rounded-xl`}>
                            <div className="flex items-center gap-3">
                                <img
                                    src={`/images/icon-${weatherCodeDescription[hourly.weather_code[start + i]]}.webp`}
                                    alt=""
                                    className="w-11 h-11"
                                />
                                <p className="text-[19px]">
                                    {new Date(time).toLocaleTimeString(
                                        "en-Us",
                                        {
                                            hour: "numeric",
                                        },
                                    )}
                                </p>
                            </div>
                            <p>{Math.round(hourly.temperature_2m[start + i])} °</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
