
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Forecast from './components/Forecast';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="content">
      <Navbar/>
      <Home/>
      <Forecast/>
      <News/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
