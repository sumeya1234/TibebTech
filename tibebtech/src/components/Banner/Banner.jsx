import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'

const Banner = () => {
  const { darkMode } = useTheme();
  
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "300px",
        background: darkMode 
          ? "linear-gradient(90deg, #1e1b4b, #1e3a8a)" // darker gradient for dark mode
          : "linear-gradient(90deg, #4f46e5, #3b82f6)", // original gradient for light mode
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold mb-3">Welcome to TibebTech</h1>
        <p className="lead mb-4">
          Learn new skills with short, focused online courses tailored for you.
        </p>
        <Button variant="light" size="lg">
          Start Learning
        </Button>
      </Container>
    </div>
  )
}

export default Banner
