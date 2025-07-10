import { Navbar, Nav, Container } from "react-bootstrap";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className={`shadow-sm px-3 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Container fluid>
        <Navbar.Brand href="#" className={`fw-bold ${darkMode ? "text-light" : "text-dark"}`}>
          TibebTech
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#" className={darkMode ? "text-light" : "text-dark"}>Home</Nav.Link>
            <Nav.Link href="#" className={darkMode ? "text-light" : "text-dark"}>Courses</Nav.Link>
            <Nav.Link href="#" className={darkMode ? "text-light" : "text-dark"}>Dashboard</Nav.Link>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleTheme();
              }}
              className={darkMode ? "text-light" : "text-dark"}
            >
              <i className={`bi ${darkMode ? "bi-moon-fill" : "bi-sun-fill"} fs-5`}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
