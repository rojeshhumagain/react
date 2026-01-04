// src/App.jsx
import { useState } from "react";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import FormSubmit from "./components/FormSubmit.jsx";

function App() {
  // page state le kun component show garne decide garxa
  const [page, setPage] = useState("counter"); // default counter

  return (
    <div>
      {/* Header ma setPage props pathaune */}
      <Header setPage={setPage} />

      {/* Conditional rendering */}
      {page === "counter" && <Counter title="This is Counter Component" />}
      {page === "form" && <FormSubmit title="This is Form Component" />}
    </div>
  );
}

export default App;
