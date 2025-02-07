import React from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'
import GameList from './components/GameList/GameList'

import { Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div >
      <Navbar />
      
     
     
      <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/GameList" element={<GameList/>} />
        
        

      </Routes>
      </div>
    </div>
  );
}

export default App;

