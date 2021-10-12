import React, {useState} from 'react'
import axios from 'axios'
import API from './API'

function Weather() {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = '297c67b07a1c365c1ba09ed002715c27';
    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
            speed: res.data.wind.speed
        })

        setCity(res.data.name)

    }
    
    let k = weather.temp;
    let C = k - 273.15
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = 'Сегодня ' + mm + '/' + yyyy + 'г';
    
    const Weath = () => {
        return <div>
            <div className="wdgrees">
                <div className="numb">{C.toFixed(2)}
                    <div className="cel">°</div>
                </div>
                <div className="descp">{weather.descp}</div>
            </div>
            <div className="wpanel">
                <div className="welement">
                <img src="images/windy.svg" />
                <p>Wind</p> <p>|</p> <p>{weather.speed} м/с</p>
                </div>
                <div className="welement">
                <img src="images/hum.svg" />
                <p>Hum</p> <p>|</p> <p>{weather.humidity} %</p>
                </div>
            </div>
        </div>
    }
return (<>
            <form onSubmit={apiCall} className="form">
                <div className="input-with-icon">
                    <input type="text" className="form-control" placeholder="Город" name="loc" />
                    <div className="btn btn-default icon">
                        <span><img className="icon-search" src="images/search.svg"/></span>
                    </div>
                </div>
            </form>
            <div className="weather">
                <div className="card-bg"></div>
                <div className="today">{today}</div>
                <div className="wdall">
                    {weather && <Weath />}
                </div>
            </div>
    </>
    )
}

export default Weather
                /* Дополнения из API ( в будущем добавить! )
                
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Температура : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Влажность : {weather.humidity} %
                </div>
                <div className="welement">
                    Давление :  {weather.press} mb
                </div>
                <div className="welement">
                    Широта :  {weather.lat}
                </div>
                <div className="welement">
                    Долгота :  {weather.lon}
                </div>
                <div className="welement">
                    Скорость ветра :  {weather.speed} м/с
                </div>*/
