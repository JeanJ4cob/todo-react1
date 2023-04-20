import React from 'react';
import scatteredClouds from './icons/scatteredClouds.png';
import cloudy from './icons/cloudy.png';
import clearSky from './icons/clearSky.png';
import lightRain from './icons/lightRain.png';
import './WheaterInput.css';

const WheaterInput=(props)=>{
    const [city,setCity]=React.useState("");
    const [weatherData, setWeatherData]=React.useState(null);
    const [icon, setIcon]=React.useState(null);

    function weatherIcon(data){
        switch(data.weather[0].description.toLowerCase()){
            case 'light rain':
                setIcon(lightRain);
                break;

            case 'clear sky':
                setIcon(clearSky);
                break;

            case 'scattered clouds':
                setIcon(scatteredClouds);
                break;
            
            case 'broken clouds':
                setIcon(cloudy);
                break;

            case 'few clouds':
                setIcon(scatteredClouds);
                break;
            default:
                setIcon(null);
        }
    }

    function dataChange(e){
        if(e.target.name==='city'){
            setCity(e.target.value);
        }
    }

    function dataSubmit(e){
        e.preventDefault();
        props.datos(city, `16aadf45dd1fdee24a5625a95b839fa1`)
            .then(data=>{
                setWeatherData(data);
                weatherIcon(data);
            })
    }

    return(
        <main>
            <form onSubmit={dataSubmit}>
              <label>
                <input placeholder='Enter a city...' type="text" name="city" value={city} onChange={dataChange} />
              </label>

              {weatherData && (
                <div>
                  <p>Temperature: ({((((Number(weatherData.main.temp)-273.15)*9)/5)+32).toFixed(0)}) °F</p>
                  <p>Description: {weatherData.weather[0].description} </p>
                  {icon && <img src={icon} alt='Weather icon' />}
                </div>
              )}
            </form>
        </main>
        )
};

export {WheaterInput};