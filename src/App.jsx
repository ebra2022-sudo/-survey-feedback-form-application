import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FeedbackForm } from './Components/FeedBackForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <FeedbackForm/>
  )
}


export default App
