import React from 'react'
import WeatherTimeData from './components/WeatherTimeData'

const App = () => {

  return (
    <div className='container-fluid text-center p-3 mb-2 bg-body-tertiary'>
      <h1 className='mt-4'>WeatherTime</h1>
      <WeatherTimeData />
    </div>
  )
}

export default App