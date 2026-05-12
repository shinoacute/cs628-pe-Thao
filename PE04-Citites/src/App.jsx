import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header       from "./components/Header";
import CitiesList   from "./components/CitiesList";
import CityDetail   from "./components/CityDetail";
import AddCity      from "./components/AddCity";
import initialCities from "./data/cities";

/**
 * App sets up all React Router routes:
 *
 *  /              → redirect to /cities
 *  /cities        → CitiesList (with Outlet for nested detail)
 *  /cities/:id    → CityDetail (nested under CitiesList)
 *  /add           → AddCity (redirects to /cities on submit)
 */
export default function App() {
  const [cities, setCities]   = useState(initialCities);
  const [toast,  setToast]    = useState(null);

  /** Called by AddCity after form submission */
  const handleAddCity = (cityData) => {
    const newCity = { ...cityData, id: Date.now() };
    setCities((prev) => [...prev, newCity]);
    // Show a brief success notification
    setToast("✓  City added successfully!");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <Router>
      <Header />

      <Routes>
        {/* Default: redirect root to /cities */}
        <Route path="/" element={<Navigate to="/cities" replace />} />

        {/* Cities List + nested City Detail */}
        <Route
          path="/cities"
          element={<CitiesList cities={cities} />}
        >
          {/* Index route: shown when no city is selected */}
          <Route
            index
            element={
              <div className="empty-state">
                <div className="empty-globe">🌍</div>
                <h2>Select a City</h2>
                <p>Click any city from the list to see detailed information.</p>
              </div>
            }
          />
          {/* Nested detail route — uses useParams inside CityDetail */}
          <Route
            path=":id"
            element={<CityDetail cities={cities} />}
          />
        </Route>

        {/* Add City — redirects to /cities after submit */}
        <Route
          path="/add"
          element={<AddCity onAdd={handleAddCity} />}
        />

        {/* Catch-all: redirect unknown paths */}
        <Route path="*" element={<Navigate to="/cities" replace />} />
      </Routes>

      {/* Toast notification */}
      {toast && <div className="toast">{toast}</div>}
    </Router>
  );
}
