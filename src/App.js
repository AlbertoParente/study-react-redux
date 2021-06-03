import React from 'react'
import './app.css'
import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Sortition from './components/Sortition'

function App() {
    return (
        <div className="App">
            <h1>Activity React-Redux (Simple)</h1>
            <div className="line">
                <Interval />
            </div>
            <div className="line">
                <Average />
                <Sum />
                <Sortition />
            </div>
        </div>
    )
}

export default App
