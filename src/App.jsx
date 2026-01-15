import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'

function App() {

  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <Navbar />
        <div style={{marginLeft:'250px', padding:'70px'}}>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/products" element={<Products />} ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
