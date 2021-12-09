// Test!

import { useState, useEffect} from "react";
import "./Weatherapi.css";

function Weatherapi() {
    const [weather, setWeather] = useState();

    useEffect(() => {
        fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=b0274f12ce12eadee9ea07afc60cb723`);
        }, []);

    async function fetchData(url) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setWeather(data);
    }

    useEffect(() => {
      console.log(weather);
      }, [weather]);


    return (
      <div className="weatherapi-wrapper">
          
        </div>
    );
  }
  
  export default Weatherapi;