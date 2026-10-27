import arrow from "../assets/icon-dropdown.svg";
export default function WeatherSkeleton({dark}) {
    return (
        <div className="mt-8 flex max-l:flex-col gap-5">
            <div>
                <div className={`w-170 max-l:w-full h-67 ${dark ? "bg-[#25253f]" : "bg-[#e0e5e9]"}  rounded-xl flex flex-col justify-center items-center`}>
                    <div className="loader "></div>
                    <p className={`${dark ? "text-white" : "text-black"}`}>Loading...</p>
                </div>
                <div className="mt-5 grid grid-cols-4 max-sm:grid-cols-2 gap-5">
                    <div className={`${dark ? "text-[#cccddf] bg-[#25253f]" : "text-black bg-[#dfe3e7]"}  flex-1 p-4 rounded-xl`}>
                        <h3 className="text-[15px]  mb-3">
                            Feels like
                        </h3>
                        <p className="text-2xl">_</p>
                    </div>
                    <div className={`${dark ? "text-[#cccddf] bg-[#25253f]" : "text-black bg-[#dfe3e7]"}  flex-1 p-4 rounded-xl`}>
                        <h3 className="text-[15px]  mb-3">
                            Humidity
                        </h3>
                        <p className="text-2xl">_</p>
                    </div>
                    <div className={`${dark ? "text-[#cccddf] bg-[#25253f]" : "text-black bg-[#dfe3e7]"}  flex-1 p-4 rounded-xl`}>
                        <h3 className="text-[15px]  mb-3">
                            Wind
                        </h3>
                        <p className="text-2xl">_</p>
                    </div>
                    <div className={`${dark ? "text-[#cccddf] bg-[#25253f]" : "text-black bg-[#dfe3e7]"}  flex-1 p-4 rounded-xl`}>
                        <h3 className="text-[15px]  mb-3">
                            precipitation
                        </h3>
                        <p className="text-2xl">_</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className={`${dark ? "text-white" : "text-black"}`}>Daily forecast</h2>
                    <div className="mt-5 grid grid-cols-7 max-sm:grid-cols-3 gap-2.5">
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                        <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-22 h-35 rounded-xl animate-pulse`}></div>
                    </div>
                </div>
            </div>

            <div className={`${dark ? "bg-[#25253f]" : "bg-[#dfe3e7]"} min-w-[320px] h-154 rounded-xl p-5`}>
                <div className={`${dark ? "text-white" : "text-black"} flex justify-between items-center`}>
                    <h2>Hourly forecast</h2>
                    <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} flex items-end pb-3 px-4 rounded-xl`}>
                        _
                        <img className="w-3 h-3 ml-2" src={arrow} alt="" />
                    </div>
                </div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
                <div className={`${dark ? "bg-[#3c3b5d]" : "bg-[#cdd1d5]"} w-full h-13 mt-4 rounded-lg animate-pulse`}></div>
            </div>
        </div>
    );
}
