import { useEffect, useState } from 'react'
import History from './History'
import Weather from './Weather'
import { getDateFromStamp } from './helper';

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const API_KEY = `d26449bff0f11d7d841f52c28bab544a`;

  const fetchWeather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if(data.cod == "200"){
      setWeather(data);
      setHistory([
        ...history,
        {
          name : city,
          timestamp: new Date().getTime()
        }
      ]);
    } else {
      setWeather(null);
    }
    setWeather(data);
  }

  useEffect(
    () =>{
      const lsHistory = localStorage.getItem('history');
      if(lsHistory != null){
          setHistory(JSON.parse(lsHistory));
      }
    },
    []
  )

  useEffect(
    () =>{
      if(history.length != 0){

        localStorage.setItem("history",JSON.stringify(history));
      }
    },
    [history]
  )

  return (
    <div className='max-w-[1240px] gap-3 mx-auto grid grid-cols-4'>
      <History history ={history}/>
      <Weather weather = {weather} fetchWeather ={fetchWeather}/>
    </div>
  )
}

export default App
