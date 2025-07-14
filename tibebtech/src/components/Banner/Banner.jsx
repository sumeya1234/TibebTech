import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import './banner.css'

const Banner = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`banner-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="banner-overlay"></div>
      <Container className="banner-content">
        <Row className="align-items-center min-vh-50">
          <Col lg={6} className="text-start">
            <div className="banner-text">
              <h1 className="display-4 fw-bold mb-3 text-white">
                Welcome to <span className="text-primary">TibebTech</span>
              </h1>
              <p className="lead mb-4 text-white">
                Learn new skills with short, focused online courses tailored for you. 
                Join thousands of students already transforming their careers.
              </p>
              <div className="banner-buttons">
                <Button variant="primary" size="lg" className="me-3 mb-2">
                  <i className="bi bi-play-circle me-2"></i>
                  Start Learning
                </Button>
                <Button variant="outline-light" size="lg" className="mb-2">
                  <i className="bi bi-collection-play me-2"></i>
                  Browse Courses
                </Button>
              </div>
              <div className="banner-stats mt-4">
                <Row className="text-center text-lg-start">
                  <Col xs={4}>
                    <h4 className="banner-stats-number fw-bold">50+</h4>
                    <small className="banner-stats-label">Courses</small>
                  </Col>
                  <Col xs={4}>
                    <h4 className="banner-stats-number fw-bold">10K+</h4>
                    <small className="banner-stats-label">Students</small>
                  </Col>
                  <Col xs={4}>
                    <h4 className="banner-stats-number fw-bold">4.8★</h4>
                    <small className="banner-stats-label">Rating</small>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="banner-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center" 
                alt="Students learning online" 
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="floating-element floating-element-1">
                <i className="bi bi-lightbulb text-warning"></i>
              </div>
              <div className="floating-element floating-element-2">
                <i className="bi bi-code-slash text-info"></i>
              </div>
              <div className="floating-element floating-element-3">
                <i className="bi bi-award text-success"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner;