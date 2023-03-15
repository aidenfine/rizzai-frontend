import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

// Pages imports 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'

// Components imports 
import Navbar from './components/Navbar'

import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/get-started' element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello</h1> */}
    </div>
  )
}

export default App
