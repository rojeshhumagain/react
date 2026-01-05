import { useState } from 'react'
import './App.css'

function App() {
  // Use state instead of normal variable
  const [counter, setCounter] = useState(0);

  // Add value function
  const addValue = () => {
    console.log("clicked", counter)
    setCounter(counter + 1);  // update state
  }

  // Decrease value function
  const decreaseValue = () => {
    console.log("clicked", counter)
    setCounter(counter - 1);  // update state
  }
  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <div>
        <h1>this is my react counter</h1>
        <h2>counter Value : {counter}</h2>

        {/* Pass function reference, not call */}
        <button onClick={addValue}>Add value</button>
        <button onClick={decreaseValue}>Decrease value</button>
        <button onClick={resetValue}>Reset counter</button>
      </div>
    </>
  )
}

export default App
