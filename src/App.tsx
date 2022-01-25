import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count + 1)}>
            sumar
          </button>
          <button type="button" onClick={() => {
            if (count > 0) setCount(count - 1)
          }}>
            restar
          </button>
        </p>
        <p>
          { count }
        </p>
      </header>
    </div>
  )
}

export default App
