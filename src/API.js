import axios from 'axios'

export default axios.create ({
    baseURL: "api.openweathermap.org/data/2.5/"//,
    //responseType: "json"
});
//https://api.openweathermap.org/data/2.5/weather?q=Kaluga&appid=297c67b07a1c365c1ba09ed002715c27