import React from 'react';
import { getDateFromStamp } from './helper';


const Weather = ({weather,fetchWeather}) => {

    function keyUpHandler(event) {
        if (event.key == 'Enter') {
            fetchWeather(event.target.value)

            event.target.value = "";
        }
    }
    
    return (
        <div className='col-span-3'>
            <input placeholder='Enter city name' type="text" className='text-xl border p-3 w-full' onKeyUp={keyUpHandler}/>
            <hr className='my-4' />
            <div className=''>
                {
                     weather == null 
                     ? <h1 className='text-5xl text-gary-500 text-center'>Enter the City</h1>
                     : <>
                            <div className='text-5xl text-center'>{weather.main.temp}° C</div>
                            <div className="text-center text-xl p-2\">
                                <div>Sunrise: {getDateFromStamp(weather.sys.sunrise * 1000, 1)}</div>
                                <div>Sunset: {getDateFromStamp(weather.sys.sunset * 1000, 1)}</div>
                            </div>
                     </>
                }
                
            </div>
        </div>
    );
}

export default Weather;
