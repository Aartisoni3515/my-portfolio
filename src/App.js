import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from './Components/Header/Home/Home';
import About from './Components/Header/About/About';
import Contact from './Components/Header/Contact/Contact';
import Projects from './Components/Header/Projects/Projects';

function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/contact' element={<Contact/>}/>




</Routes>



</BrowserRouter>

    </>
  );
}

export default App;
