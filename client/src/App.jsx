import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layout/Home'
import Chat from './Layout/Chat'
import './App.css'
import Select from './Layout/Select'
import Interview from './Layout/Interview'


function App() {
  

  return (

<Router>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/majors' element={<Select />} />
        <Route path='/interview' element={<Interview />} />
  </Routes>
</Router>
  



  )
}

export default App
