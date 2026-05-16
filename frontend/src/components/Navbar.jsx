import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>🤖 Candidate Shortlisting System</h1>

      <p>AI Powered Recruitment Platform 🚀</p>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          👤 Candidate Info
        </NavLink>
        <NavLink to="/shortlisting" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          🔍 Shortlisting
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;