import { useRecoilValue } from 'recoil';
import dataState from '../states/dataState';
import f from './functions/index';

// Main component that showes weather information
function Main() {
    const data = useRecoilValue(dataState),
    // Destructure functions from object
    { checkData, unixToLocal, getTime } = f;

    // Mark city as fvourite and save it to localStorage, so after few days it loads the city you marked, unless you did not cleared localStorage :|
    function markAsFavourite() {
        const fav = document.getElementById('favourite').classList;
        
        if (fav.contains('added')) {
            fav.remove('added');
            localStorage.removeItem("fav");
        } else {
            fav.add('added');
            localStorage.setItem("fav", JSON.stringify(data.name))
        }
    }

    // Check if the current city is in your localStorage, and if it's true - return class fragment that will color start to yellow
    function checkLocal() {
        if ("fav" in localStorage && data.name === JSON.parse(localStorage.getItem("fav"))) {
            return "added";
        } else return "";
    }

    // If there is data in dataState recoil - show main component with all the informations, if not - ask user to search for city using search component
    if (!checkData(data)) {
        return (
            <div id="main" className="main">
                <div className="main-title">
                    <h6>{getTime()}</h6>
                    <h1>{data.name} ({data.sys.country})<i id="favourite" className={`bi bi-star favourite ${checkLocal()}`} onClick={() => markAsFavourite()}></i></h1>
                </div>
                <div className="main-info">
                    <div className="main-info_weather">
                        <div className="main-info_weather_icon">
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/>
                            <h1>{data.main.temp.toFixed(1)}&deg;C</h1>
                        </div>
                        <div className="main-info_weather_description">
                            {data.weather[0].description}
                        </div>
                    </div>
                    <div className="main-info_temp">
                        <p>Feels like: {data.main.feels_like.toFixed(1)}&deg;C</p>
                        <p>Min: {data.main.temp_min.toFixed(1)}&deg;C</p>
                        <p>Max: {data.main.temp_max.toFixed(1)}&deg;C</p>
                    </div>
                </div>
                <div className="main-sun">
                    <p>Sunrise: {unixToLocal(data.sys.sunrise)}</p>
                    <p>Sunset: {unixToLocal(data.sys.sunset)}</p>
                </div>
                <div className="main-addon">
                    <p>Pressure: {data.main.pressure} hPa</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p> 
                        Wind: 
                        &emsp;
                        <svg style={{transform: `rotate(${data.wind.deg}deg)`}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                        &emsp;
                        {data.wind.speed} m/s
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{marginTop: "20vh"}}>
                <h1 style={{textAlign: "center"}}>Please select your city!</h1>
            </div>
        )
    }
}

export default Main;