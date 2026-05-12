import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * AddCity renders a form that collects city information.
 * On successful submission it calls onAdd() then uses
 * useNavigate() to redirect back to /cities — demonstrating
 * programmatic navigation (redirection).
 */
export default function AddCity({ onAdd }) {
  // useNavigate for programmatic redirection after form submit
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    country: "",
    population: "",
    continent: "",
    language: "",
    timezone: "",
    flag: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())       e.name       = "City name is required";
    if (!form.country.trim())    e.country    = "Country is required";
    if (!form.population.trim()) e.population = "Population is required";
    if (!form.continent.trim())  e.continent  = "Continent is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    // Add the city (lifts state up to App)
    onAdd({ ...form, flag: form.flag || "🏙️" });
    // Redirect to Cities List after successful add
    navigate("/cities");
  };

  return (
    <div className="full-main">
      <div className="form-container">
        <div className="form-header">
          <h1>Add a New City</h1>
          <p>Fill in the details below to add a city to the directory.</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <Field
              id="name"
              label="City Name *"
              placeholder="e.g. London"
              value={form.name}
              error={errors.name}
              onChange={(v) => handleChange("name", v)}
            />
            <Field
              id="country"
              label="Country *"
              placeholder="e.g. United Kingdom"
              value={form.country}
              error={errors.country}
              onChange={(v) => handleChange("country", v)}
            />
            <Field
              id="population"
              label="Population *"
              placeholder="e.g. 9,002,000"
              value={form.population}
              error={errors.population}
              onChange={(v) => handleChange("population", v)}
            />
            <Field
              id="continent"
              label="Continent *"
              placeholder="e.g. Europe"
              value={form.continent}
              error={errors.continent}
              onChange={(v) => handleChange("continent", v)}
            />
            <Field
              id="language"
              label="Primary Language"
              placeholder="e.g. English"
              value={form.language}
              onChange={(v) => handleChange("language", v)}
            />
            <Field
              id="timezone"
              label="Timezone"
              placeholder="e.g. UTC+0"
              value={form.timezone}
              onChange={(v) => handleChange("timezone", v)}
            />
            <Field
              id="flag"
              label="Flag Emoji"
              placeholder="🏳️"
              value={form.flag}
              onChange={(v) => handleChange("flag", v)}
            />
            <div className="form-group full">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={form.description}
                placeholder="Brief description of the city…"
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => navigate("/cities")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add City →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ── Reusable field component ────────────────────────────── */
function Field({ id, label, placeholder, value, error, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
