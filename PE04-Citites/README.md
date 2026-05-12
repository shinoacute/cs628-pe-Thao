# PE04 – Cities React Application

A React application built for CS628 PE04 that demonstrates React Router, nested routes, `useParams`, and programmatic navigation (`useNavigate`).

---

# Input

The Cities application accepts two forms of user input. First, the user interacts with the **Cities List** by clicking on any city name displayed in the sidebar. Each city link is a React Router `<NavLink>` that changes the URL to `/cities/:id`, where `:id` is the unique identifier of the selected city. Second, the user can navigate to the **Add City** screen and complete a form that collects a city's name, country, population, continent, primary language, timezone, flag emoji, and a short description. Required fields (name, country, population, continent) are validated before the form is accepted.

---

# Process

When a city link is clicked, React Router matches the `/cities/:id` route and renders the `CityDetail` component as a nested child of `CitiesList` via the `<Outlet />` component. Inside `CityDetail`, the `useParams` hook extracts the `:id` parameter from the URL and uses it to look up the matching city object from the shared `cities` state array held in `App`. When the Add City form is submitted, the `handleAddCity` function in `App` creates a new city object with a unique timestamp-based ID and appends it to the state array using `setCities`. The `AddCity` component then calls `useNavigate()` to programmatically redirect the browser to `/cities`, demonstrating React Router's imperative navigation API.

---

# Output

The application renders three main screens. The **Cities List** screen displays a sidebar of all cities alongside a content area — when no city is selected, a prompt is shown; when a city link is clicked, the `CityDetail` component appears in the same layout without a full page reload, fulfilling the nested-route requirement. The **City Detail** screen shows a styled hero banner with the city's flag, name, and country, plus info cards for population, language, timezone, and continent. The **Add City** screen displays the input form; on successful submission, the user is redirected to the Cities List and a brief toast notification confirms the addition.
