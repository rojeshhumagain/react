function AddItems() {
  return (
    <div className="add-row ">
      <input type="text" placeholder="Enter to do list" className="add-input" />
      <input type="date" className="add-input-date" />
      <button type="button" className="add-btn">Add</button>
    </div>
  );
}

export default AddItems;
