import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layout/Home'
import Chat from './Layout/Chat'
import './App.css'

// import AudioTest from './components/audioTesting'


function App() {
  

  return (

<Router>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
  </Routes>
</Router>
  



  )
}

export default App
