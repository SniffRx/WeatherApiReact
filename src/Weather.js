import React from 'react'
import axios from 'axios'
import API from './API'
const CityName = 'Kaluga';
const ApiID = '297c67b07a1c365c1ba09ed002715c27';
export default class Weather extends React.Component {
    state = {weathers: []}
    componentDidMount() {
        API.get(`weather?q=${CityName}&appid=${ApiID}&units=metric`).then(
            res => {
                const weathers = res.data;
                this.setState({weathers:weathers});
            })
    }
    
    render() {
        return(
            <div className="container">
                <div className="panel">
                    <p>Страна: {this.state.weathers.name}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>Температура {this.state.weathers['main']/*.temp*/}</p>
                    <p>Скорость ветра {this.state.weathers.wind/*.speed*/}</p>{console.log(this.state.weathers['main']['temp'])}
                </div>
            </div>
        )
        
    }
}
