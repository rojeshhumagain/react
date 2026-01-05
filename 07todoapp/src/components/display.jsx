function DisplayItems() {
  let item1name = 'Wakeup';
  let item1date = '2026/01/05';
  let item2name = 'OK GOOD';
  let item2date = '2026/01/05';

  return (
    <>
      <div className="todo-row mt-3">
        <div className="todo-name">{item1name}</div>
        <div className="todo-date">{item1date}</div>
        <button type="button" className="todo-delete">Delete</button>
      </div>

      <div className="todo-row mt-3">
        <div className="todo-name">{item2name}</div>
        <div className="todo-date">{item2date}</div>
        <button type="button" className="todo-delete">Delete</button>
      </div>
    </>
  );
}

export default DisplayItems;
