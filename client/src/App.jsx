import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layout/Home'
import Chat from './Layout/Chat'

import './App.css'
import Timeline from './Layout/Timeline'
// import AudioTest from './components/audioTesting'


function App() {
  

  return (

    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path = "/timeline" element={<Timeline/>}/>
      </Routes>
    </Router>
  



  )
}

export default App
