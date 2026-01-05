import Header from './components/header.jsx';
import AddItems from './components/additems.jsx';
import DisplayItems from './components/display.jsx';
import './app.css';

function App() {
  return <center class='todo-container mt-5 '>
    <Header />
    <div class="container text-center">
    <AddItems />
    <DisplayItems />

    </div>


  </center>

}

export default App;