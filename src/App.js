import React, { useState } from 'react'
import './app.css'
import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Sortition from './components/Sortition'

function App() {
  const [min, setMIn] = useState(100)
  const [max, setmax] = useState(1000)

  return (
    <div className="App">
      <h1>Activity React-Redux (Simple)</h1>
      <div className="line">
        <Interval min={min} max={max} 
          onMinChanged={setMIn} onMaxChanged={setmax} />
      </div>
      <div className="line">
        <Average min={min} max={max} />
        <Sum min={min} max={max} />
        <Sortition min={min} max={max} />
      </div>
    </div>
  )
}

export default App
