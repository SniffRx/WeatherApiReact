import React from 'react'
import axios from 'axios'
import API from './API'

const CityName = 'Kaluga';
const ApiID = '297c67b07a1c365c1ba09ed002715c27';

export default class Weather extends React.Component {
    
    state = {weathers: []}

    componentDidMount() {
        API.get(`weather?q=${CityName}&appid=${ApiID}`)
        .then(function (response) {
        // handle success
        console.log(response);
        })
    }
    
        render() {return(<div>{this.state.weathers.response}</div>)}
}

//{ this.state.persons.map(person => <li>{person.name}</li>)}

    /*handleSubmit = event => {
    event.preventDefault();
    //https://api.openweathermap.org/data/2.5/weather?q=Kaluga&appid=297c67b07a1c365c1ba09ed002715c27
    API.get(`weather?q=${CityName}&appid=${ApiID}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    
    //render() {return (<div/>)}
}*/
