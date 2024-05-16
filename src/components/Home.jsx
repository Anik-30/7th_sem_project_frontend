import "../style/home.css";
import Description from "./Description";
import { useEffect, useState } from "react";
import { weatherData } from "../weatherApi";
import { FcAssistant } from "react-icons/fc"; // Import chat icon
import { IoIosSend } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import Modal from 'react-modal';
import axios from 'axios';

//modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Hazy background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '40%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Transparent background
    border: 'none', // Remove border
    borderRadius: '10px', // Add border-radius for rounded corners
    padding: '20px', // Add padding
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
};

Modal.setAppElement('#root');

function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); 

  const user = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const fetchWeatherData = async () => {
      setError(false); // Reset error state before fetching new data

      try {
        const data = await weatherData(city, units);
        setWeather(data);
      } catch (error) {
        setError(true); // Set error state if API call fails
      }
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMessages([
      ...messages,
      { text: `Hello, ${user && user.user && user.user.firstname}! Please type a city to know about it's weather condition !!`, sender: 'bot' },
    ]);
  };

  //chatbot
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    if (input.trim() === '') return;

    try {
      setLoading(true);

      const response = await axios.get(`http://localhost:5000/weather?city=${input}`);
      const data = response.data;

      setMessages([0]);

      const sentences = data.weather_sentence.split('\n\n');

      // Extract the first two sentences
      const firstTwoSentences = sentences.slice(0, 2);


      // Display temperature and rainfall as bot messages
      setMessages([
        ...messages,
        { text: `${user && user.user && user.user.firstname}: ${input}`, sender: 'user' },
        { text: `${'Bot'}: ${firstTwoSentences}`, sender: 'bot' },
      ]);

      // Clear input field
      setInput('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="home">
  <div className="overlay">
    {/* Chat assistant icon */}
    {user && (
          <div className="chat-icon" onClick={toggleModal}>
          <FcAssistant />
        </div>
    )}
    

    {/* Weather data */}
    {weather && (
      <div className="container">
        {user && (
        <div className="section section_inputs">
          <input
            onKeyDown={enterKeyPressed}
            type="text"
            name="city"
            placeholder="city"
          />
          <button className="ml-2" onClick={(e) => handleUnitsClick(e)}>
            ℉
          </button>
        </div>
        )}
        <div className="section section_temparature">
          <div className="icon">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconURL} alt="weatherIcon" />
            <h3>{weather.description}</h3>
          </div>
          <div className="temperature1">
            <h1>{`${weather.temp.toFixed()} °${
              units === "metric" ? "C" : "F"
            }`}</h1>
          </div>
        </div>
        <Description weather={weather} units={units} />
      </div>
    )}

  <Modal
  isOpen={isModalOpen}
  onRequestClose={toggleModal}
  style={customStyles}
  contentLabel="Chat Bot Modal"
>
  <div className="chat-bot">

    <div className="chat-box">
      <div className="chat-box-messages">
        {loading ? (<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        ):(
          messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        )))}
      </div>
      <div className="chat-box-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a city..."
        />
        <button onClick={handleMessageSubmit} disabled={loading}><IoIosSend /></button>
      </div>
    </div>
  </div>
  {/* Close button */}
  <button className="close-btn" onClick={toggleModal}>
  <RxCrossCircled />
  </button>
  </Modal>
</div>

  </div>
// </div>

  );
}

export default App;

