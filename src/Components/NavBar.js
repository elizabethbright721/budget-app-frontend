import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="nav-title">
        <Link to="/transactions">Budget App</Link>
      </h1>
      {/* <button className="nav-title">
        <Link to="/transactions/">Balance $</Link>
      </button> */}
      <button className="nav-title">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
      
    </nav>
  );
}