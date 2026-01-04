// src/components/Counter.jsx
import { useState } from "react";
import "./Counter.css";

function Counter({ title }) {
  // useState le count ko dynamic state banaucha
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      {/* title props bata aako */}
      <h2>{title}</h2>
      <p>Current Count: {count}</p>

      {/* Button click garda state update huncha */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
