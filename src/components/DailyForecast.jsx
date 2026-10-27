import { weatherCodeDescription } from "../weather-icons";

export default function DailyForecast({ dark, daily }) {
    const days = daily.time;
    return (
        <div className={`${dark ? "text-white" : "text-black"} mt-7`}>
            <h2>Daily forecast</h2>
            <div className="grid grid-cols-7 gap-2.5 max-sm:grid-cols-3 mt-4">
                {days.map((day, i) => (
                    <div key={i} className={`py-3 ${dark ? "bg-[#25253f]" : "bg-[#e1e5e9]"}  rounded-xl flex-1`}>
                        <p className="text-center">
                            {new Date(day).toLocaleString("en-Us", {
                                weekday: "short",
                            })}
                        </p>
                        <img
                            className="w-12 h-12 mx-auto"
                            src={`/images/icon-${weatherCodeDescription[daily.weather_code[i]]}.webp`}
                            alt=""
                        />
                        <div className="flex justify-between flex-1 px-3 mt-3">
                            <span className="text-sm">{Math.round(daily.temperature_2m_max[i])} °</span>
                            <span className="text-sm">{Math.round(daily.temperature_2m_min[i])} °</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
