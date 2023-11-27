const API_KEY = '20ae94cdebf6485a888315355c8e2902'

const iconURL = (iconId) =>  `https://openweathermap.org/img/wn/${iconId}@2x.png`
const weatherData = async (city, units = 'metric') =>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data =await fetch(URL)
    .then((res)=>res.json())
    .then((data)=>data);

    // console.log(data);

    const{weather,main:{temp,feels_like, temp_min,temp_max,pressure, humidity},
    wind:{speed},
    sys:{country},
    name
    }=data

    const {description,icon} = weather[0];

    return{
        description,
        iconURL: iconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    };
};


export {weatherData}