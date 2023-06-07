import React, { useState } from 'react'
const APIKEY = '73d287dd990c454a82b4c6a5264637ce'

const WeatherTimeData = () => {
    const [currentWeather, setCurrentWeather] = useState([])
    const [forecastWeather, setForecastWeather] = useState([])
    const [city, setCity] = useState('')

    const searchPressed = () => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&lang=es&key=${APIKEY}&include=minutely`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentWeather(data.data)
                setForecastWeather(data.minutely)
            })
    }

    return (
        <div className='mt-4'>
            <div>
                <input
                    className='text-center border border-1 rounded-4 w-25 p-3 '
                    type="text"
                    placeholder='Ciudad...'
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className='btn btn-primary ms-4'
                    onClick={(searchPressed)}>
                    Buscar
                </button>
            </div>

            {
                currentWeather.map(currentWeather => {
                    return (
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-4'>
                                <div className='card shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5 mt-5' >
                                    <div className='card-body'>
                                        <h5 className='card-title'>Ahora</h5>
                                        <hr />
                                        <h5 className='card-title'>{currentWeather.city_name}, {currentWeather.country_code}</h5>
                                        <img src={`https://cdn.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`} alt="" />
                                        <h3 className='card-title'>{currentWeather.temp}°C</h3>
                                        <h5 className='card-title mb-3'>{currentWeather.weather.description}</h5>
                                        <p className='fs-5 bi bi-thermometer-half'>Sensación terminca : {currentWeather.app_temp}°C</p>
                                        <p className='fs-5 bi bi-water'>  Humedad : {currentWeather.rh}%</p>
                                        <p className='fs-5 bi bi-cloud-rain'>  Probabilidad de lluvia : {currentWeather.precip}%</p>
                                        <p className='fs-5 bi bi-sunrise'>  Amencer : {currentWeather.sunrise}</p>
                                        <p className='fs-5 bi bi-sunset'>  Atardecer : {currentWeather.sunset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {
                forecastWeather.map(forecastWeather => {
                    return (
                        <div className='row d-flex justify-content-center'>
                            <div>
                                <h5 className='card-title'>Pronóstico de 1 hora / minuto</h5>
                                <hr />
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5 mt-5' >
                                    <div className='card-body'>
                                        <h5 className='card-title'>{forecastWeather.timestamp_local}</h5>
                                        <hr />
                                        <h3 className='card-title'>{forecastWeather.temp}°C</h3>
                                        <p className='fs-5 bi bi-cloud-rain'>  Probabilidad de lluvia : {forecastWeather.precip}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default WeatherTimeData