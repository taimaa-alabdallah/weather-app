

export default function TodayForecast({ dark, current, city, country }) {
    const date = new Date(current.time).toLocaleDateString("en-Us", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return (
        <div className={` ${dark ? "text-white" : "text-black"}`}>
            <div
                style={{
                    backgroundImage: `url(../images/bg-today-large-${dark ? "dark.svg" : "light.jpg"})`,
                }}
                className="bg-cover p-7 flex max-sm:flex-col justify-between items-center h-62.25 rounded-xl"
            >
                <div className="">
                    <h2 className="text-[30px]">
                        {city}, {country}
                    </h2>
                    <p>{date}</p>
                </div>
                <div className="flex justify-between items-center">
                    <img
                        src="../images/icon-sunny.webp"
                        alt="weathe state"
                        className="w-20 h-20"
                    />
                    <p className="text-6xl italic">
                        {Math.round(current.temperature_2m)} °
                    </p>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-4 max-sm:grid-cols-2 gap-5">
                <div
                    className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} flex-1 p-4 rounded-xl `}
                >
                    <h3
                        className={`text-[15px] ${dark ? "text-[#cccddf]" : "text-black"}  mb-3`}
                    >
                        Feels like
                    </h3>
                    <p className="text-2xl">
                        {Math.round(current.apparent_temperature)} °
                    </p>
                </div>
                <div
                    className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} flex-1 p-4 rounded-xl`}
                >
                    <h3
                        className={`text-[15px] ${dark ? "text-[#cccddf]" : "text-black"}  mb-3`}
                    >
                        Humidity
                    </h3>
                    <p className="text-2xl">{current.relative_humidity_2m}%</p>
                </div>
                <div
                    className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} flex-1 p-4 rounded-xl`}
                >
                    <h3
                        className={`text-[15px] ${dark ? "text-[#cccddf]" : "text-black"}  mb-3`}
                    >
                        Wind
                    </h3>
                    <p className="text-2xl">{current.wind_speed_10m} Km/h</p>
                </div>
                <div
                    className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} flex-1 p-4 rounded-xl`}
                >
                    <h3
                        className={`text-[15px] ${dark ? "text-[#cccddf]" : "text-black"}  mb-3`}
                    >
                        precipitation
                    </h3>
                    <p className="text-2xl">{current.precipitation} mm</p>
                </div>
            </div>
        </div>
    );
}
