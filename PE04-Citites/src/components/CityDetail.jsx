import { useParams, Link } from "react-router-dom";

/**
 * CityDetail uses the useParams hook to read :id from the URL,
 * finds the matching city, and renders its full details.
 */
export default function CityDetail({ cities }) {
  // useParams fetches the :id segment from the nested route /cities/:id
  const { id } = useParams();
  const city = cities.find((c) => c.id === parseInt(id, 10));

  if (!city) {
    return (
      <div className="empty-state">
        <div className="empty-globe">❓</div>
        <h2>City Not Found</h2>
        <p>
          No city with ID <strong>{id}</strong> exists.{" "}
          <Link to="/cities">Go back</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="city-detail">
      {/* Hero banner */}
      <div className="detail-hero">
        <div className="detail-hero-flag">{city.flag}</div>
        <div className="detail-hero-name">{city.name}</div>
        <div className="detail-hero-country">
          {city.country} · {city.continent}
        </div>
      </div>

      {/* Info cards grid */}
      <div className="detail-grid">
        <InfoCard icon="👥" label="Population" value={city.population} />
        <InfoCard icon="💬" label="Language"   value={city.language}   />
        <InfoCard icon="🕐" label="Timezone"   value={city.timezone}   />
        <InfoCard icon="🌐" label="Continent"  value={city.continent}  />
      </div>

      {/* Description */}
      {city.description && (
        <div className="detail-card" style={{ marginTop: "1rem" }}>
          <div className="detail-label">About</div>
          <div style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
            {city.description}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="detail-card">
      <div className="detail-label">
        {icon} {label}
      </div>
      <div className="detail-value">{value || "—"}</div>
    </div>
  );
}
