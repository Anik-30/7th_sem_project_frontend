
import "../style/home.css";
import Description from "./Description";
import { useEffect,useState } from "react";
import { weatherData } from "../weatherApi";
function App() {

  const[city, setCity] =useState("Delhi");
  const [weather,setWeather] = useState(null);
  const [units,setUnits] = useState("metric");
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchWeatherData = async()=>{
      setError(false); // Reset error state before fetching new data

      try {
        const data = await weatherData(city, units);
        setWeather(data);
      } catch (error) {
        setError(true); // Set error state if API call fails
      }
    };
    fetchWeatherData();
  },[units,city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    
    const isCelcius = currentUnit === 'C';
    button.innerText = isCelcius ? '°F' : '°C'
    setUnits(isCelcius ? 'metric' : 'imperial');
  }

  const enterKeyPressed = (e) =>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }
  return (
    <div className="home">
      <div className="overlay">
        {
          weather && (
            <div className="container">
            <div className="section section_inputs">
              <input
              onKeyDown={enterKeyPressed} 
              type="text" name="city" placeholder="city" />
              <button onClick={(e)=>handleUnitsClick(e)}>℉</button>
            </div>
            <div className="section section_temparature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img
                  src={weather.iconURL}
                  alt="weatherIcon"
                />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature1">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric'?'C':'F'}`}</h1>
              </div>
            </div>
            <Description weather={weather} units={units}/>
          </div>
          )
        }
 
      </div>
    </div>
  );
}

export default App;
