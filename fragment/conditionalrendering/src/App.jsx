import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const foodItems = ['apple','banana'];

 
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {foodItems.length==0 ?<h3>I am still hungry</h3> : null}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-items">{items}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default App