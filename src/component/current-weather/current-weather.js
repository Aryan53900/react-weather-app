import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city" >Jaipur</p>
                    <p className="Discription">summer</p>
                </div>
                <img alt="weather" className="weather-icon" src="src/icons/01d.png" />
            </div>
        </div>
    );
}

export default CurrentWeather;