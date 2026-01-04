// src/App.jsx
import EventButtons from "./components/EventButtons.jsx";
import InputText from "./components/InputText.jsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>05 Event Handling Project</h1>
      
      {/* EventButtons component */}
      <EventButtons title="Counter Buttons Example" />

      {/* InputText component */}
      <InputText title="Form Input Example" />
    </div>
  );
}

export default App;
