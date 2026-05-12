import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/cities" className="brand">
        <span>◉ </span>Cities
      </NavLink>
      <nav>
        <NavLink
          to="/cities"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          🗺 Cities List
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ＋ Add City
        </NavLink>
      </nav>
    </header>
  );
}
