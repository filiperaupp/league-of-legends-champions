import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Champions from './pages/Champions'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Champions />
  )
}

export default App
