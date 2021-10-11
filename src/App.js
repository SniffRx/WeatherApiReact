import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Weather from './Weather'

function App() {
    
  return (
    <div className="wrapper">
        <div className="container-fluid">
        <Weather />
        </div>
    </div>
  )
}

export default App;
