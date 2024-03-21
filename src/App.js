import React from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import About from './components/About/About'
import LoginForm from './components/Form/LoginForm'
import { Route, Routes} from 'react-router-dom'
import RegisterForm from './components/Form/RegisterForm'
import ShopCategory from './Pages/ShopCategory/ShopCategory'


function App() {
  return (
    <div >
      <Navbar />
      
     
     
      <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>}/>
        <Route path=':ProductId' element ={<Products/>}/>
        <Route path='./Tincture' element ={<ShopCategory categort="Tinctur"/>}/>
        <Route path='./Tea' element ={<ShopCategory categort="Tea"/>}/>
        <Route path='./Soap' element ={<ShopCategory categort="Soap"/>}/>
        <Route path="/Cart" element={<Cart/>} />
        

      </Routes>
      <div>
        <Routes>
          <Route path = "/LoginForm" element={<LoginForm/>}/>

          
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path = "/RegisterForm" element={<RegisterForm/>}/>

          
        </Routes>
      </div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;

