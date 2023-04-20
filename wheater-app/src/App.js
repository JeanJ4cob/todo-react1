import logo from './logo.svg';
import React from 'react';
import { WheaterInput } from './WheaterInput';
import './App.css';

function App() {

  const url='https://api.openweathermap.org/data/2.5/weather';
  function datos(city, API_KEY){
    const api=`${url}?q=${city},&appid=${API_KEY}`;
    return fetch(api)
      .then(Response=>Response.json())
      .then(data=>{
        return data;
      })
      .catch(error=>{
        console.error(error)
      });
  }
  return (
    <React.StrictMode>
      <WheaterInput 
        datos={datos}
      />
    </React.StrictMode>
  );
}

export default App;
