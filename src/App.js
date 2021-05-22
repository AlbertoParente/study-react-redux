import logo from './logo.svg'
import './app.css'
import Card from './components/Card'
import Interval from './components/Interval'

function App() {
  return (
    <div className="App">
      <h1>Activity React-Redux (Simple)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Card title="Card 2" green>X</Card>
        <Card title="Card 3" blue>Y</Card>
        <Card title="Card 4" purple>Y</Card>
      </div>
    </div>
  )
}

export default App
