// src/components/InputText.jsx
import { useState } from "react";
import "./InputText.css";

function InputText({ title }) {
  // State for input text
  const [text, setText] = useState("");

  // State for submitted text
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Form reload rokne
    setSubmittedText(text); // Text submit garne
    setText(""); // Input clear garne
  };

  return (
    <div className="input-text-card">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)} // Input type garda state update
          required
        />
        <button type="submit">Submit</button>
      </form>
      {/* Conditional rendering */}
      {submittedText && <p>You typed: {submittedText}</p>}
    </div>
  );
}

export default InputText;
