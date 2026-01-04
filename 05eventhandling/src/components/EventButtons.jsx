// src/components/EventButtons.jsx
import { useState } from "react";
import "./EventButtons.css";

function EventButtons({ title }) {
  // useState le count store garxa
  const [count, setCount] = useState(0);

  // Button click handler
  const handleIncrease = () => {
    setCount(count + 1); // count 1 le badhaune
  };

  const handleDecrease = () => {
    setCount(count - 1); // count 1 le ghataune
  };

  const handleReset = () => {
    setCount(0); // count reset garne
  };

  return (
    <div className="event-buttons-card">
      <h2>{title}</h2>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default EventButtons;
