// src/App.jsx
import "./index.css";       // <-- relative path to your index.css
import Grid from "./components/div.jsx";

const App = () => {
  return (
    <div>
      <Grid />
      <Grid />
      <Grid />
      <h1>Hello React + Vite!</h1>
    </div>
  );
};

export default App;
