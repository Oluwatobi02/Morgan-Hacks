import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layout/Home'
import Chat from './Layout/Chat'
import './App.css'
<<<<<<< HEAD
import Select from './Layout/Select'
=======

>>>>>>> e52f6e14958487f04ed76e883d5b45e5aab1eaa5
// import AudioTest from './components/audioTesting'


function App() {
  

  return (
<<<<<<< HEAD
    
    //<Home />
     <Chat/>
    // <AudioTest />
=======

<Router>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
  </Routes>
</Router>
  


>>>>>>> e52f6e14958487f04ed76e883d5b45e5aab1eaa5

  )
}

export default App
