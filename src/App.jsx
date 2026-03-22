import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Routing from './components/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routing />
    </>
  )
}

export default App
