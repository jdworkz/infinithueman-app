import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      <Navbar />
      
      <Hero/>
      <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/About" element={<About/>} />
        

      </Routes>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;

