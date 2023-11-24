
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Forecast from './components/Forecast';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Forecast/>
      <News/>
      <Contact/>
    </div>
  );
}

export default App;
