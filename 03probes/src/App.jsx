import User from "./components/User.jsx";

function App(){
  return (
    <div style={{ display:"flex" , justifyContent:"center", flexWrap:"Wrap" }}>
      <User name = "rojesh" age={20} profession = "developer" />
      < User name ="shyam" age ={30} profession = "designer" />
      <User name = "Bob" age={40}  profession="student" />
    </div>
  );
}

export default App;