import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import News from './components/News';
import Mlflow from './components/Mlflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="content">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/mlflow' element={<Mlflow/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* <Route path='*' element={<ErrorPage/>}/> */}
      </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
