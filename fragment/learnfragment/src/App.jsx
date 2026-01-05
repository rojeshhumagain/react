import "./App.css";
import React from "react";


const App = () => {

  const foodItems = ['Apple', 'Bnana', 'smoodi', 'peanuts', 'green vegetable'];
  return (

    /// Fragment can be used in React in three ways:
    // 1. Using empty tags: <> </>
    // 2. Wrapping elements inside a <div>
    // 3. Using <React.Fragment> from the React library
    // 4. map is used to mapping the item like for loop

    //  inline rendering - Directly inside JSX
    //  {items.maps(Assign unique key for optimizes re-rendersa.)}

    // key prop: Assign unique key for optimized
    // <div key={items.id}>{items.name}</div>
    // key={items}

    //  map() is a JavaScript array method.
    // It loops over each element in the array and returns a new array.
    // Here, for each items (like 'Apple'), it returns a <li> element with the item text.
    <>
      <React.Fragment>
        <h1>Healthy Food</h1>
        <ul className="list-group">
          {foodItems.map((items) => (
            <li  className="list-group-items">{items}</li>
          ))}
        </ul>
      </React.Fragment>

      <React.Fragment>
        <h1>Healthy Food</h1>
        <ul className="list-group">
          {foodItems.map((items) => (
            <li key={items} className="list-group-items">{items}</li>
          ))}
        </ul>
      </React.Fragment>
    </>
  )
}

export default App