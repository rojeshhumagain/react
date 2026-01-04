// src/components/Header.jsx
import "./Header.css";

function Header({ setPage }) {
  // setPage props le parent (App) ko state change garna allow garxa
  return (
    <header className="header">
      <h1>Rojesh React App</h1>
      <nav>
        {/* Navbar buttons, click garda parent ma page state change hunchha */}
        <button onClick={() => setPage("counter")}>Counter</button>
        <button onClick={() => setPage("form")}>Form Submit</button>
      </nav>
    </header>
  );
}

export default Header;
