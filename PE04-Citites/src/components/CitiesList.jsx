import { NavLink, Outlet } from "react-router-dom";

/**
 * CitiesList renders:
 *  - A sidebar listing all cities (each is a link to /cities/:id)
 *  - An <Outlet /> area where the nested CityDetail route renders
 *
 * This demonstrates nested routing: the city detail appears
 * within the same page layout as the cities sidebar.
 */
export default function CitiesList({ cities }) {
  return (
    <div className="layout">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-title">{cities.length} Cities</div>

        {cities.map((city) => (
          <NavLink
            key={city.id}
            to={`/cities/${city.id}`}
            className={({ isActive }) => `city-item ${isActive ? "active" : ""}`}
          >
            <span className="city-flag">{city.flag}</span>
            <div>
              <div className="city-name-small">{city.name}</div>
              <div className="city-country-small">{city.country}</div>
            </div>
          </NavLink>
        ))}
      </aside>

      {/* ── Nested route renders here ── */}
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
