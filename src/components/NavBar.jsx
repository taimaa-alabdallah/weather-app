import logo from "../assets/logo.png";

export default function NavBar({ dark, switchDark }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src={logo} alt="weather logo" className="w-10 h-10" />
                <p className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>Weather Now</p>
            </div>
            <button
                onClick={switchDark}
                aria-label={
                    dark ? "Switch to light mode" : "Switch to dark mode"
                }
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s",
                }}
            >
                {dark ? (
                    /* Sun Icon (Visible in Light Mode) */
                    <svg
                        xmlns="http://w3.org"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                ) : (
                    /* Moon Icon (Visible in Dark Mode) */
                    <svg
                        xmlns="http://w3.org"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
