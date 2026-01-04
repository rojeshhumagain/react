// src/components/FormSubmit.jsx
import { useState } from "react";
import "./FormSubmit.css";

function FormSubmit({ title }) {
  // name state le input ma type gareko value store garxa
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // form reload roknu
    setSubmittedName(name); // state update
    setName(""); // input clear garna
  };

  return (
    <div className="form-card">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          placeholder="Type your name" 
          onChange={(e) => setName(e.target.value)} // state update on typing
          required 
        />
        <button type="submit">Submit</button>
      </form>
      {/* submittedName state display */}
      {submittedName && <p>Hello, {submittedName}!</p>}
    </div>
  );
}

export default FormSubmit;
