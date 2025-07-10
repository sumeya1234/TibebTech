import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./header.css";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="lg" className={`custom-navbar shadow-sm ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <div className="logo-container">
            <div className="logo-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span className="brand-text">TibebTech</span>
          </div>
        </Navbar.Brand>

        {/* Custom Hamburger Button */}
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''} ${darkMode ? 'dark' : 'light'}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <i className="bi bi-house me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav-link-custom">
              <i className="bi bi-collection-play me-1"></i>
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">
              <i className="bi bi-grid-3x3-gap me-1"></i>
              Dashboard
            </Nav.Link>
            
            {/* Theme Toggle */}
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleTheme();
              }}
              className="nav-link-custom theme-toggle"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi ${darkMode ? "bi-sun" : "bi-moon-fill"} fs-5`}></i>
            </Nav.Link>

            {/* Auth Buttons */}
            <div className="auth-buttons ms-3">
              <Button 
                as={Link} 
                to="/login" 
                variant="outline-primary" 
                size="sm" 
                className="me-2 auth-btn"
              >
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </Button>
              <Button 
                as={Link} 
                to="/signup" 
                variant="primary" 
                size="sm"
                className="auth-btn"
              >
                <i className="bi bi-person-plus me-1"></i>
                Sign Up
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
