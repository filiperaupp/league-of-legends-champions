import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Champions from './pages/Champions'
import axios from "axios"

import { BrowserRouter } from "react-router-dom";
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // <Champions />
  )
}

export default App
