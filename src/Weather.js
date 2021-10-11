import React from 'react'
import axios from 'axios'
import API from './API'
const CityName = 'Kaluga';
const ApiID = '297c67b07a1c365c1ba09ed002715c27';
export default class Weather extends React.Component {
    state = {weathers: []}
    componentDidMount() {
        API.get(`weather?q=${CityName}&appid=${ApiID}`).then(
            res => {
                const weathers = res.data;
                this.setState({weathers:weathers});
            })
    }
    render() {
        return(
        <div>{this.state.weathers.id}{console.log(this.state.weathers.id)}</div>
        )
        
    }
}
